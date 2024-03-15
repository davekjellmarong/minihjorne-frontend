"use client";
import React from "react";
import { Product as ProductType } from "@/utils/types";
import SmallProductSkeleton from "../skeleton/SmallProductSkeleton";
import Product from "./Product";

interface ProductsProps {
  isLoading?: boolean;
  data: ProductType[] | undefined;
}
const Products = ({ isLoading, data }: ProductsProps) => {
  if (isLoading)
    return (
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {Array(10)
          .fill(0)
          .map((_, i) => {
            return <SmallProductSkeleton key={i} />;
          })}
      </div>
    );
  if (data)
    return (
      <ul
        // className="grid f-grid grid-flow-row-dense takeover-z-index grid-cols-2 lg:grid-cols-3 gap-16 -mx-8 px-8 -my-8 py-8 md:mx-0 md:px-16"
        className="mt-10 grid w-full grid-cols-2 justify-items-center gap-16 sm:grid-cols-3 md:grid-cols-4"
        // className=" mt-10 flex flex-wrap justify-evenly gap-4"
      >
        {data.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <Product product={product} />
            </React.Fragment>
          );
        })}
      </ul>
    );
};

export default Products;
