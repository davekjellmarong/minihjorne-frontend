"use client";
import {
  calculateTotalPrice,
  getItemsFromLocalStorage,
  removeItemFromCart,
} from "@/components/cart/Utils";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import SplitView from "@/components/layout/SplitView";
import { baseUrl } from "@/utils/constants";
import { Product, ProductsRQ } from "@/utils/types";
import { ProductsMethods } from "@/utils/utils";
import { XCircle } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  let productItems: any = [];
  if (typeof window !== "undefined") {
    // Perform localStorage action
    productItems = getItemsFromLocalStorage();
  }

  const [cartItems, setCartItems] = useState(productItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const { data: productsAndSold } = useQuery<ProductsRQ>({
    queryKey: ["products", "soldAlso"],
    queryFn: ProductsMethods.getsome,
  });
  console.log(productsAndSold);
  useEffect(() => {
    const updatedTotalPrice = calculateTotalPrice(cartItems);
    setTotalPrice(updatedTotalPrice);
  }, [cartItems]);
  useEffect(() => {}, []);
  useAutoLogIn();
  return (
    <div className="flex justify-evenly mx-52">
      <div className="grow  pb-16">
        <div className="flex items-center gap-10 mt-14 mb-8">
          <h2 className="font-semibold text-2xl">Handlekurv</h2>
          <p className="text-gray-700">{cartItems.length} produkter</p>
        </div>
        <ul
          className="flex flex-col overflow-scroll gap-12"
          style={{ height: 700 }}
        >
          {cartItems.map((product: any) => {
            return (
              <li key={product.id} className="flex justify-start">
                <div className="flex gap-8 w-96">
                  <img
                    src={`${baseUrl}${product.attributes.image.data?.attributes.url}`}
                    alt=""
                    className="p-4 shadow rounded h-28 w-28"
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
                    {/* {product.attributes.colors.data.map((color) => {
                    return <p key={color.id}>{color.attributes.name}</p>;
                  })} */}
                  </div>
                </div>
                <div className="flex gap-8 items-start justify-center w-96">
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
        <hr />
      </div>
      <div className="w-96 bg-gray-100 pt-20 mb-14 px-10 flex flex-col gap-20">
        <p className="text-gray-500">
          Total pris er{" "}
          <span className="text-xl font-light text-black">
            {totalPrice} kr{" "}
          </span>
        </p>
        <p className="text-sm">Frakt pris beregnes ved checkout</p>
        <Link
          href="/checkout"
          className="py-4 px-8 border-2 border-gray-500 rounded hover:bg-gray-500 hover:text-white transition-colors duration-150"
        >
          <button>Gå videre</button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
