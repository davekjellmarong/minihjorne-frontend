"use client";
import React, { useState } from "react";
import { baseUrl, tailwindColorsUserButton } from "@/utils/constants";
import { Product, ProductBackend } from "@/utils/types";
import { Heart, Tag, UserCircle } from "@phosphor-icons/react";
import Loading from "@/components/loading/Loading";
import { useRouter } from "next/navigation";
import Dialog from "@/components/dialog/Dialog";
import ProductDetail from "./ProductDetail";

interface ProductsProps {
  isLoading?: boolean;
  data: ProductBackend[] | undefined;
}
const Products = ({ isLoading, data }: ProductsProps) => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductBackend>();

  if (isLoading) return <Loading />;
  if (data)
    return (
      <>
        <Dialog open={open} setOpen={setOpen}>
          <ProductDetail selectedProduct={selectedProduct} setOpen={setOpen} />
        </Dialog>
        <ul className="flex flex-wrap gap-36 justify-center mt-10">
          {data.map((product) => {
            const tailwindColor = tailwindColorsUserButton[product.user.color];
            return (
              <li
                className="border-2 rounded border-gray-100 w-64 hover:shadow cursor-pointer hover:bg-gray-50"
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  setOpen(true);
                }}
              >
                <div className="relative">
                  <img
                    className="w-full max-h-72 object-cover"
                    src={`${baseUrl}${product.image.url}`}
                    alt=""
                    // onClick={() => {
                    //   router.push(`/produkter/${product.id}`);
                    // }}
                  />
                  {/* <Heart
                  className="absolute right-0 top-0 m-4"
                  size={26}
                  color="white"
                  weight="duotone"
                /> */}
                </div>
                <div className="flex flex-col gap-4  p-6">
                  <p className="text-center font-semibold">
                    {product.price} kr
                  </p>
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
              </li>
            );
          })}
        </ul>
      </>
    );
};

export default Products;
