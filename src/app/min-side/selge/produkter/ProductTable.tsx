"use client";
import ProductStatusChip from "@/components/chip/ProductStatusChip";
import { ProductBackend } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
// import { columns } from "@/components/table/ProductsTable/Columns";

interface ProductTableProps {
  products: ProductBackend[];
  // columns: ColumnDef<ProductBackend>[];
}

const ProductTable = ({ products }: ProductTableProps) => {
  const router = useRouter();
  // const table = useReactTable({
  //   products,
  //   columns,
  //   getCoreRowModel: getCoreRowModel(),
  //   getPaginationRowModel: getPaginationRowModel(),
  // });
  return (
    <>
      <table className="w-full">
        <thead className="border-indigo-100  bg-indigo-400">
          <tr className="">
            <th className="py-4 pl-5 text-left text-xs font-normal text-white">
              Bilde
            </th>
            <th className="py-4 pl-4 text-left text-xs font-normal text-white">
              Dato
            </th>
            <th className="py-4 pr-4 text-right text-xs font-normal text-white">
              Pris
            </th>
            <th className="py-4 pl-4 text-left text-xs font-normal text-white">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            const dateObject = new Date(product.createdAt);

            const options: any = {
              year: "numeric",
              month: "short",
              day: "numeric",
            };
            const formattedDate = dateObject.toLocaleDateString(
              "no-NO",
              options,
            );
            const formattedDateWithoutDot = formattedDate.replace(/\./g, "");
            return (
              <tr
                key={product.id}
                className="cursor-pointer border-b border-indigo-100 sm:hover:bg-indigo-100"
                onClick={() => {
                  router.push(`produkter/${product.id}`);
                }}
              >
                <td className="px-4 py-1 text-left text-sm">
                  {product?.image?.length > 0 && (
                    <Image
                      src={product?.image[0]?.url}
                      alt="Produkt bilde"
                      width={50}
                      height={50}
                      className="max-h-16 rounded object-cover"
                    />
                  )}
                </td>
                <td className=" px-4 py-5 text-left text-sm font-semibold">
                  {formattedDateWithoutDot}
                </td>
                <td className="px-4 py-5 text-right text-sm text-gray-500">
                  kr {product.price}
                </td>
                <td>
                  <ProductStatusChip
                    active={product.active}
                    sold={product.sold}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
