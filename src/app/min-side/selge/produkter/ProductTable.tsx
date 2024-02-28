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
  return (
    <>
      {/* <Dialog open={open} setOpen={setOpen}>
        <ProductDetail selectedProduct={selectedProduct} setOpen={setOpen} />
      </Dialog> */}
      <table className="w-full">
        <thead className="bg-indigo-300 border-2 border-indigo-100">
          <tr className="">
            <th className="text-xs text-left pl-4 py-4 font-normal">Bilde</th>
            <th className="text-xs text-left pl-4 py-4 font-normal">Dato</th>
            <th className="text-xs text-right pr-4 py-4 font-normal">Pris</th>
            {/* <th className="text-xs text-left pl-4 py-4 font-normal">Solgt</th> */}
            <th className="text-xs text-left pl-4 py-4 font-normal">Status</th>
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
                className="border border-indigo-100 hover:bg-indigo-100 cursor-pointer"
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
                {/* <td className="text-sm py-5 px-4 text-left text-gray-500">
                {product.products?.data.length} stk
              </td> */}
                {/* <td className={` py-4 px-10 text-gray-500 ${color?.tailwind}`}> */}
                {/* <td className={` py-3 px-4  `}>
                  <p
                    className={`text-indigo-700 text-xs p-2 rounded text-center`}
                  >
                    {product.sold ? <p>Ja</p> : <p>Nei</p>}
                  </p>
                </td> */}
                <td className=" py-3 px-4 text-sm">
                  {!product.active && product.sold === false && (
                    <div className="flex text-red-800 items-center bg-red-200 border p-2">
                      <p className=" w-full text-center">Offline</p>
                    </div>
                  )}
                  {product.active && product.sold === false && (
                    <div className="flex text-orange-800 items-center bg-orange-300 border p-2">
                      <p className=" w-full text-center">Live</p>
                    </div>
                  )}
                  {product.sold && (
                    <div className="flex text-green-800 items-center bg-green-200 border p-2">
                      <p className=" w-full text-center">Solgt</p>
                    </div>
                  )}
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
