"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ProductBackend, ProductRQ } from "@/utils/types";
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
import AddToCartButtons from "@/components/button/AddToCartButtons";

interface ProductProps {
  selectedProduct: ProductBackend | undefined;
}
const Product = ({ selectedProduct }: ProductProps) => {
  const { id } = useParams();
  //   const { data: product } = useQuery<ProductRQ>({
  //     queryKey: ["product", id],
  //     queryFn: () => ProductsMethods.getById(id),
  //   });
  const iconsList: any = {
    BaseballCap: <BaseballCap size={32} />,
    Dress: <Dress size={32} />,
    Pants: <Pants size={32} />,
    Sneaker: <Sneaker size={32} />,
    TShirt: <TShirt size={32} />,
  };
  console.log(selectedProduct);
  if (!selectedProduct) return <Loading />;
  return (
    <div className="flex w-full justify-center gap-6 ">
      <img
        className=" w-1/2 h-full object-cover"
        src={`${baseUrl}${selectedProduct.image.url}`}
        height={200}
        width={200}
        alt=""
      />
      <div className="w-1/2 flex flex-col gap-4 items-start">
        <div className="my-10">
          <BackButton />
        </div>
        <div className="py-2 px-8 rounded bg-gray-200">
          {selectedProduct.tags.map((tag) => {
            return <p key={tag.id}>{tag.name}</p>;
          })}
        </div>
        <div className="flex items-center font-semibold text-lg">
          <p>{selectedProduct.category.name}</p>
          <span>{iconsList[selectedProduct.category.icon]}</span>
        </div>
        <Link href="" className="flex border-2 rounded py-2 border-transparent">
          <p className="text-blue-500">{selectedProduct.user.username}</p>
          <User size={22} />
        </Link>
        {/* <ColorSquares colors={selectedProduct.colors} /> */}
        <p>Str {selectedProduct.size.number}</p>
        <p>{selectedProduct.brand}</p>
        <p>{selectedProduct.material?.name}</p>
        <p>kr {selectedProduct.price}</p>

        {/* <AddToCartButtons product={selectedProduct} /> */}
      </div>
    </div>
  );
};

export default Product;
