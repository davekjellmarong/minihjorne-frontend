"use client";
import React from "react";
import { baseUrl, tailwindColors } from "@/utils/constants";
import { Product } from "@/utils/types";
import { PlusCircle, Tag, User } from "@phosphor-icons/react";
import Loading from "@/components/loading/Loading";
import Image from "next/image";
interface ProductsProps {
  isLoading?: boolean;
  data: Product[] | undefined;
}
const Products = ({ isLoading, data }: ProductsProps) => {
  if (isLoading) return <Loading />;
  if (data)
    return (
      <ul className="flex flex-wrap gap-20 justify-center">
        {data.map((product) => {
          return (
            <li className="shadow w-80 p-10" key={product.id}>
              <p className="text-center">{product.attributes.name}</p>
              <Image
                className="w-full h-56"
                src={`${baseUrl}${product.attributes.image.data?.attributes.url}`}
                height={200}
                width={200}
                alt=""
              />
              <div className="flex flex-col gap-4">
                <p className="text-center text-lg font-semibold">
                  {product.attributes.price} kr
                </p>
                <ul className="flex gap-3">
                  {product.attributes.tags.data.map((tag, index) => {
                    return (
                      <li
                        key={tag.id}
                        className={`bg-gray-200 p-2 text-sm rounded `}
                      >
                        <p>{tag.attributes.name}</p>
                      </li>
                    );
                  })}
                </ul>
                <div className="flex justify-between">
                  <ul className="flex gap-2 ">
                    {product.attributes.colors.data.map((color) => {
                      const colorClass = tailwindColors.find(
                        (item) => item.title === color.attributes.name
                      );
                      return (
                        <li
                          className={`${colorClass?.tailwind} w-6 h-6 rounded border-gray-200 border-2`}
                          key={color.id}
                        ></li>
                      );
                    })}
                  </ul>
                </div>
                <p>
                  <span className=" text-sm">Str </span>
                  <span>{product.attributes.size.data.attributes.number}</span>
                </p>
                <div className="flex">
                  <Tag size={22} />
                  <p>{product.attributes.brand}</p>
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex">
                    <User size={22} />
                    <p>{product.attributes.user.data?.attributes.username}</p>
                  </div>
                  <button className="">
                    <PlusCircle size={32} />
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
};

export default Products;
