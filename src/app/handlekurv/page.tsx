"use client";
import {
  calculateTotalPrice,
  getItemsFromLocalStorage,
  removeItemFromCart,
} from "@/utils/CartUtils";
import { Product } from "@/utils/types";
import { XCircle } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthQueries } from "@/reactQuery/AuthQueryFactory";

const Page = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());

  let productItems: Product[] = [];
  if (typeof window !== "undefined") {
    // Perform localStorage action
    productItems = getItemsFromLocalStorage();
  }

  const [cartItems, setCartItems] = useState(productItems);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const updatedTotalPrice = calculateTotalPrice(cartItems);
    setTotalPrice(updatedTotalPrice);
  }, [cartItems]);
  return (
    <div className="relative flex flex-col">
      <div className="ml-8  ">
        <div className="mb-8 mt-14 flex items-center gap-10">
          <h2 className="text-2xl font-semibold">Handlekurv</h2>
          <p className="text-gray-700">{cartItems.length} produkter</p>
        </div>
        <ul
          className="flex flex-col gap-12 overflow-scroll pb-8"
          style={{ height: 700 }}
        >
          {cartItems.map((product: Product) => {
            return (
              <li key={product.id} className="flex justify-start">
                <div className="flex gap-8 ">
                  <img
                    src={`${product.attributes.image.data[0].attributes.url}`}
                    alt=""
                    className="h-28 w-28 rounded p-4 shadow"
                    onClick={() => {
                      router.push(`/produkter/${product.id}`);
                    }}
                  />
                  <div className="flex flex-col justify-start gap-4">
                    <div>
                      <p className="font-semibold">
                        {product.attributes.category.data.attributes.name}{" "}
                      </p>
                      <p className="font-light text-gray-500">
                        Str {product.attributes.size.data.attributes.number}
                      </p>
                    </div>
                    <p className="font-light text-gray-500">
                      {product.attributes.brand}
                    </p>
                    {/* {product.colors.data.map((color) => {
                    return <p key={color.id}>{color.name}</p>;
                  })} */}
                  </div>
                </div>
                <div className="flex w-96 items-start justify-center gap-8">
                  <p>{product.attributes.price}kr</p>
                  <button
                    onClick={() => {
                      const updatedCart = removeItemFromCart(product.id);
                      setCartItems(updatedCart);
                    }}
                  >
                    <XCircle color="gray" size={32} weight="thin" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sticky bottom-0  flex flex-col  gap-10 bg-gray-100 p-10">
        <p className="text-gray-500">
          Total pris er{" "}
          <span className="text-xl font-light text-black">
            {totalPrice} kr{" "}
          </span>
        </p>
        <p className="text-sm">Frakt pris beregnes ved checkout</p>
        <Link
          href={jwt ? "/checkout" : "/auth?redirect=/checkout&type=login"}
          className="rounded border-2 border-gray-500 px-8 py-4 transition-colors duration-150 sm:hover:bg-gray-500 sm:hover:text-white"
        >
          <button>Gå videre</button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
