import { tailwindColorsUserButton } from "@/utils/constants";
import { Product as ProductType, ProductBackend } from "@/utils/types";
import { Tag, UserCircle } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

interface ProductProps {
  product: ProductType;
}
const Product = ({ product }: ProductProps) => {
  const { color } = product.attributes.user.data.attributes;
  const { image, brand, price, size } = product.attributes;
  return (
    <Link
      href={`/produkter/${product.id}`}
      className="w-full cursor-pointer rounded border-2 border-gray-100 active:bg-gray-200"
      key={product.id}
      onClick={() => {}}
    >
      {/* <div className="aspect-w-3 aspect-h-4 relative"> */}
      <img
        className="h-60 w-full rounded object-cover"
        // className="rounded-8 border-bluegray-300 h-full w-full border object-cover object-center"
        src={`${image.data[0].attributes.url}`}
        alt=""
      />
      {/* <Heart
        className="absolute right-0 top-0 m-4"
        size={26}
        color="white"
        weight="duotone"
      /> */}
      {/* </div> */}
      <div className="flex flex-col gap-4  p-6">
        <p className="text-center font-semibold text-gray-800">{price} kr</p>
        {/* <p className="text-start text-sm text-gray-500">
          <span className=" text-sm">Str </span>
          <span>{size.data.attributes.number}</span>
        </p> */}
        {/* <div className="flex items-center justify-between text-sm text-gray-500"> */}
        {/* <div className="flex justify-center gap-2"> */}
        {/* <Tag size={22} /> */}
        <p className="text-center text-sm text-gray-500">{brand}</p>
        {/* </div> */}
        {/* </div> */}
        {/* <div className="flex items-end justify-start text-xs text-gray-500">
          <div
            className={`flex items-center justify-between gap-1 ${tailwindColor}  rounded px-3 py-1`}
          >
            <UserCircle size={20} />
            <p>{username}</p>
          </div>
        </div> */}
      </div>
    </Link>
  );
};

export default Product;
