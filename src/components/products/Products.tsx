"use client";
import React, { useState } from "react";
import { Product as ProductType, ProductBackend } from "@/utils/types";
import SmallProductSkeleton from "../skeleton/SmallProductSkeleton";
import Product from "./Product";

interface ProductsProps {
  isLoading?: boolean;
  data: ProductType[] | undefined;
}
const Products = ({ isLoading, data }: ProductsProps) => {
  console.log(data);
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
      <ul className="mt-10 flex flex-wrap justify-evenly gap-4">
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
