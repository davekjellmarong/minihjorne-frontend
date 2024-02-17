import ProductDetail from "@/components/productDetail/ProductDetail";
import Dialog from "@/components/dialog/Dialog";
import { ProductBackend } from "@/utils/types";
import { CheckCircle, X, XCircle } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useState } from "react";
interface ProductTableProps {
  products: ProductBackend[] | undefined;
}
const ProductTable = ({ products }: ProductTableProps) => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductBackend>();
  console.log(products);
  return (
    <>
      {/* <Dialog open={open} setOpen={setOpen}>
        <ProductDetail selectedProduct={selectedProduct} setOpen={setOpen} />
      </Dialog> */}
      <table className="w-full">
        <thead className="bg-indigo-200 border-2 border-indigo-100">
          <tr className="">
            <th className="text-xs text-left pl-4 py-4 font-normal">Bilde</th>
            <th className="text-xs text-left pl-4 py-4 font-normal">Dato</th>
            <th className="text-xs text-right pr-4 py-4 font-normal">Pris</th>
            <th className="text-xs text-left pl-4 py-4 font-normal">Solgt</th>
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
                onClick={() => {
                  setSelectedProduct(product);
                  setOpen(true);
                }}
                className="border-2 border-indigo-100 hover:bg-indigo-100 cursor-pointer"
              >
                <td className="text-sm py-1 px-4 text-left">
                  <Image
                    src={product.image[0]?.url}
                    alt="Produkt bilde"
                    width={50}
                    height={50}
                    className="rounded max-h-16 object-cover"
                  />
                </td>
                <td className=" text-sm py-5 px-4 text-left font-semibold">
                  {formattedDateWithoutDot}
                </td>
                <td className="text-sm py-5 px-4 text-right text-gray-500">
                  kr {product.price}
                </td>
                {/* <td className="text-sm py-5 px-4 text-left text-gray-500">
                {product.products?.data.length} stk
              </td> */}
                {/* <td className={` py-4 px-10 text-gray-500 ${color?.tailwind}`}> */}
                <td className={` py-3 px-4  `}>
                  <p
                    className={`text-indigo-700 text-xs p-2 rounded text-center`}
                  >
                    {product.sold ? (
                      <CheckCircle size={26} color="green" />
                    ) : (
                      <X size={26} weight="light" />
                    )}
                  </p>
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
