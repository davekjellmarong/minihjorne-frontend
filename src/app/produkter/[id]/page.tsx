"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ProductRQ } from "@/utils/types";
import { ProductsMethods } from "@/utils/utils";
import { baseUrl } from "@/utils/constants";
import BackButton from "@/components/button/BackButton";
import ColorSquares from "@/components/color/ColorSquares";
import Loading from "@/components/loading/Loading";
import { User } from "@phosphor-icons/react";
import {
  BaseballCap,
  Dress,
  Pants,
  Sneaker,
  TShirt,
} from "@phosphor-icons/react";
import Link from "next/link";
import { addItemToCart, getSavedProductIds } from "@/components/cart/Utils";
import AddToCartButtons from "@/components/button/AddToCartButtons";
const Page = () => {
  const { id } = useParams();
  const { data: product } = useQuery<ProductRQ>({
    queryKey: ["product", id],
    queryFn: () => ProductsMethods.getById(id),
  });
  const iconsList: any = {
    BaseballCap: <BaseballCap size={32} />,
    Dress: <Dress size={32} />,
    Pants: <Pants size={32} />,
    Sneaker: <Sneaker size={32} />,
    TShirt: <TShirt size={32} />,
  };
  if (!product) return <Loading />;
  return (
    <div className="flex w-full">
      <img
        className="w-full"
        src={`${baseUrl}${product.data.attributes.image.data.attributes.url}`}
        height={200}
        width={200}
        alt=""
      />
      <div className="w-full flex flex-col gap-4 items-start">
        <div className="my-10">
          <BackButton />
        </div>
        <div className="py-2 px-8 rounded bg-gray-200">
          {product.data.attributes.tags.data.map((tag) => {
            return <p key={tag.id}>{tag.attributes.name}</p>;
          })}
        </div>
        <div className="flex items-center font-semibold text-lg">
          <p>{product.data.attributes.category.data.attributes.name}</p>
          <span>
            {iconsList[product.data.attributes.category.data.attributes.icon]}
          </span>
        </div>
        <Link href="" className="flex border-2 rounded py-2 border-transparent">
          <p className="text-blue-500">
            {product.data.attributes.user.data.attributes.username}
          </p>
          <User size={22} />
        </Link>
        <ColorSquares product={product.data} />
        <p>Str {product.data.attributes.size.data.attributes.number}</p>
        <p>{product.data.attributes.brand}</p>
        <p>{product.data.attributes.material.data?.attributes.name}</p>
        <p>kr {product.data.attributes.price}</p>

        <AddToCartButtons product={product.data} />
      </div>
    </div>
  );
};

export default Page;
