import { Product as ProductType } from "@/utils/types";
import Link from "next/link";
import React from "react";

interface ProductProps {
  product: ProductType;
}
const Product = ({ product }: ProductProps) => {
  const { image, brand, price } = product.attributes;
  return (
    <Link
      href={`/produkter/${product.id}`}
      className="w-full cursor-pointer rounded border-2 border-gray-100 active:bg-gray-200"
      key={product.id}
    >
      {/* TO-DO Image tag */}
      <img
        className="h-60 w-full rounded object-cover"
        src={`${image.data[0].attributes.formats.small.url}`}
        alt=""
      />
      <div className="flex flex-col gap-4  p-6">
        <p className="text-center font-semibold text-gray-800">{price} kr</p>
        <p className="text-center text-sm text-gray-500">{brand}</p>
      </div>
    </Link>
  );
};

export default Product;
