import ProductStatusChip from "@/components/chip/ProductStatusChip";
import { ProductBackend } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
interface ProductTableProps {
  products: ProductBackend[] | undefined;
}
const ProductTable = ({ products }: ProductTableProps) => {
  const router = useRouter();
  return (
    <>
      <table className="w-full">
        <thead className="bg-indigo-400  border-indigo-100">
          <tr className="">
            <th className="text-xs text-white text-left pl-5 py-4 font-normal">
              Bilde
            </th>
            <th className="text-xs text-white text-left pl-4 py-4 font-normal">
              Dato
            </th>
            <th className="text-xs text-white text-right pr-4 py-4 font-normal">
              Pris
            </th>
            <th className="text-xs text-white text-left pl-4 py-4 font-normal">
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
              options
            );
            const formattedDateWithoutDot = formattedDate.replace(/\./g, "");
            return (
              <tr
                key={product.id}
                className="border border-indigo-100 hover:bg-indigo-100 cursor-pointer"
                onClick={() => {
                  router.push(`produkter/${product.id}`);
                }}
              >
                <td className="text-sm py-1 px-4 text-left">
                  {product?.image?.length > 0 && (
                    <Image
                      src={product?.image[0]?.url}
                      alt="Produkt bilde"
                      width={50}
                      height={50}
                      className="rounded max-h-16 object-cover"
                    />
                  )}
                </td>
                <td className=" text-sm py-5 px-4 text-left font-semibold">
                  {formattedDateWithoutDot}
                </td>
                <td className="text-sm py-5 px-4 text-right text-gray-500">
                  kr {product.price}
                </td>
                <ProductStatusChip
                  active={product.active}
                  sold={product.sold}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
