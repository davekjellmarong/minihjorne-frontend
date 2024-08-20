"use client";
import {
  calculateTotalPrice,
  getItemsFromLocalStorage,
  removeItemFromCart,
} from "@/utils/CartUtils";
import { Product } from "@/utils/types";
import { CurrencyDollar, Pants, Truck, XCircle } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { AuthQueries } from "@/queryFactory/Auth";
import Button from "@/components/common/buttons/Button";
import Image from "next/image";
import { shippingPrice } from "@/utils/constants";

const Page = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());
  const [checked, setChecked] = useState(false);
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
  if (cartItems.length === 0)
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <p className="text-lg">Handlekurven er desverre tom</p>
        <Image src="/empty-cart.svg" width={200} height={200} alt="emptyCart" />
        <Link
          href="/brukte-barne-klaer?pagination[page]=1"
          className="rounded bg-brand-500 px-8 py-4 text-center text-white shadow"
        >
          <button>Se produkter</button>
        </Link>
      </div>
    );
  return (
    <div className="relative flex flex-col">
      <div className="max-w-[500px] px-4 ">
        <div className="mb-8 mt-8 grid grid-cols-5 grid-rows-1 items-center gap-2">
          <h2 className="col-span-2 text-2xl">Handlekurv</h2>
          <p className="col-span-1 text-gray-700">{cartItems.length} stk</p>
          <p className="col-span-1 text-gray-700">{totalPrice} kr</p>
        </div>
        <ul className="flex flex-col gap-12 pb-8">
          {cartItems.map((product: Product) => {
            return (
              <li
                key={product.id}
                className=" grid grid-cols-5 grid-rows-2  gap-2"
              >
                <Image
                  height={160}
                  width={128}
                  src={`${product.attributes.image.data[0].attributes.formats.small.url}`}
                  alt=""
                  className="col-span-2 row-span-full h-40 w-32 rounded object-cover"
                  onClick={() => {
                    router.push(`/brukte-barne-klaer/${product.id}`);
                  }}
                />
                <p className="row-span-1 font-semibold">
                  {product.attributes.category.data.attributes.name}
                </p>
                <p className="row-span-1">{product.attributes.price}kr</p>
                <Button
                  type="flat"
                  className="flex flex-col justify-start p-0"
                  onClick={() => {
                    const updatedCart = removeItemFromCart(product.id);
                    setCartItems(updatedCart);
                  }}
                >
                  <XCircle color="gray" size={32} weight="thin" />
                </Button>
                <p className="col-span-3 row-span-1 font-light text-gray-500">
                  Str {product.attributes.size.data.attributes.number}
                </p>
                {/* <p className="col-span-3 row-span-1 font-light text-gray-500">
                  {product.attributes.brand}
                </p> */}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sticky bottom-0 flex flex-col justify-center gap-4 border-t bg-white px-4 py-8">
        <div className="flex gap-2">
          <Pants size={24} color="gray" />
          <p className="w-24 text-gray-500">Varer </p>
          <span className="text-xl font-light text-black">
            {totalPrice} kr{" "}
          </span>
        </div>
        <div className="flex gap-2">
          <Truck size={24} color="gray" />
          <p className="w-24 text-gray-500">Frakt </p>
          <span className="text-xl font-light text-black">
            {" "}
            {shippingPrice} kr
          </span>
        </div>
        <hr className="w-52 border" />
        <div className="flex gap-2">
          <CurrencyDollar size={24} color="gray" />
          <p className="w-24 text-gray-500">Total </p>
          <span className="text-xl font-light text-black">
            {" "}
            {totalPrice + shippingPrice} kr
          </span>
        </div>
        <label className="flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-brand-600 focus:ring-2 focus:ring-brand-500"
          />
          <Link href="/salgsbetingelser" className="ml-2">
            Godtar du våre{" "}
            <span className="text-blue-500">kjøpebetingelser?</span>
          </Link>
        </label>
        {/* <Link
          href={jwt ? "/checkout" : "/auth?redirect=/checkout&type=login"}
          className="shadow- max-w-[350px] rounded bg-brand-500 px-8 py-4 text-center font-semibold text-white  "
        > */}
        <button
          className={`shadow- max-w-[350px] rounded  px-8 py-4 text-center font-semibold text-white ${checked ? "bg-brand-500" : "bg-gray-300"}`}
          onClick={() => {
            router.push("/checkout");
          }}
          disabled={!checked}
        >
          Gå videre
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Page;
