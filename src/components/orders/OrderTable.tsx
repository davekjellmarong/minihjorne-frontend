"use client";
import { Product } from "@/utils/types";
import { useRouter } from "next/navigation";
import React from "react";
interface OrderTableProps {
  products: Product[];
}

const OrderTable = ({ products }: OrderTableProps) => {
  const router = useRouter();

  if (products?.length > 0) {
    return (
      <>
        <table className="m-auto w-full max-w-[700px]">
          <thead className="border-indigo-100  bg-indigo-400">
            <tr className="">
              <th className="py-4 pl-5 text-left text-xs font-normal text-white">
                Kategori
              </th>
              <th className="py-4 pl-4 text-left text-xs font-normal text-white">
                Str
              </th>
              <th className="py-4 pr-4 text-right text-xs font-normal text-white">
                Pris
              </th>
              <th className="py-4 pl-4 text-left text-xs font-normal text-white">
                Bilde
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                // <Link
                //   className="w-full"
                //   href={`/produkter/${product.id}`}
                //   key={product.id}
                // >
                <tr
                  className="w-full cursor-pointer border-2 border-gray-100 active:bg-gray-100 sm:hover:bg-gray-100"
                  onClick={() => {
                    router.push(`/produkter/${product.id}`);
                  }}
                  key={product.id}
                >
                  <td className="px-4 py-5 text-left">
                    {product.attributes.category.data.attributes.name}
                  </td>
                  <td className="px-4 py-5 text-left text-gray-500">
                    {product.attributes.size.data.attributes.number}
                  </td>
                  <td className="px-4 py-5 text-right text-gray-500">
                    kr {product.attributes.price}
                  </td>
                  <td className=" px-4 text-left">
                    <img
                      className="h-14 w-14 shadow-sm"
                      src={`${product.attributes.image.data?.[0].attributes.url}`}
                      height={200}
                      width={200}
                      alt=""
                    />
                  </td>
                </tr>
                // </Link>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
};

export default OrderTable;
