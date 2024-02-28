import { tailwindColorsUserButton } from "@/utils/constants";
import { ProductBackend } from "@/utils/types";
import { Tag, UserCircle } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

interface ProductProps {
  product: ProductBackend;
}
const Product = ({ product }: ProductProps) => {
  const tailwindColor = tailwindColorsUserButton[product.user.color];
  return (
    <Link
      href={`/produkter/${product.id}`}
      className="border-2 rounded border-gray-100 w-44 hover:shadow cursor-pointer hover:bg-gray-50"
      key={product.id}
      onClick={() => {}}
    >
      <div className="relative">
        <img
          className="w-full h-60 object-cover"
          src={`${product.image[0].url}`}
          alt=""
        />
        {/* <Heart
        className="absolute right-0 top-0 m-4"
        size={26}
        color="white"
        weight="duotone"
      /> */}
      </div>
      <div className="flex flex-col gap-4  p-6">
        <p className="text-center font-semibold">{product.price} kr</p>
        <p className="text-sm text-start text-gray-500">
          <span className=" text-sm">Str </span>
          <span>{product.size.number}</span>
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex gap-2">
            <Tag size={22} />
            <p>{product.brand}</p>
          </div>
        </div>
        <div className="flex items-end justify-start text-xs text-gray-500">
          <div
            className={`flex justify-between gap-1 items-center ${tailwindColor}  px-3 py-1 rounded`}
          >
            <UserCircle size={20} />
            <p>{product.user.username}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
