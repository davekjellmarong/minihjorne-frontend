"use client";
import { incrementProductViews } from "@/serverActions/ServerActions";
import { Product as ProductType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import React from "react";

interface ProductProps {
  product: ProductType;
}
const Product = ({ product }: ProductProps) => {
  const posthog = usePostHog();

  const {
    image,
    brand,
    price,
    size,
    category,
    seller,
    category_type,
    sex,
    material,
  } = product.attributes;

  return (
    <Link
      href={`/brukte-barne-klaer/${product.id}`}
      className=" w-full cursor-pointer rounded border-2 border-gray-100 active:bg-gray-200"
      key={product.id}
      onClick={() => {
        incrementProductViews(product.id);
        posthog.capture("product_view", {
          id: product.id,
          seller: seller.data.attributes.username,
          brand: brand,
          category: category.data.attributes.name,
          size: size.data.attributes.number,
          category_type: category_type.data.attributes.name,
          sex: sex.data.attributes.name,
          price: price,
          location: "products_page",
        });
      }}
    >
      <div className="relative">
        <Image
          className=" h-60 w-full rounded object-cover"
          src={`${image.data[0].attributes.formats.medium.url}`}
          alt=""
          height={240}
          width={240}
        />
        {brand && (
          <p className="absolute bottom-2 right-2 rounded  bg-brand-300 p-2 text-center text-xs opacity-75  shadow-lg">
            {brand}
          </p>
        )}
      </div>
      <div className=" flex flex-col gap-4 p-6">
        <p className="text-center font-semibold text-gray-800">{price} kr</p>
        <div className="flex items-baseline justify-center gap-1 text-sm text-gray-500">
          <p className="text-xs">Str </p>
          <p className="text-xl">{size.data.attributes.number}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
