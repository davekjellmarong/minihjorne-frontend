"use client";
import React from "react";
import Product from "./Product";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ProductQueries } from "@/queryFactory/Product";
import { useSearchParams } from "next/navigation";

const Products = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const { data: products } = useSuspenseQuery(
    ProductQueries.searchParamsTest(params.toString()),
  );
  console.log(products.data[0].attributes.price);
  return (
    <ul className="mt-10 grid w-full grid-cols-2 justify-items-center gap-x-4 gap-y-16 sm:grid-cols-3 md:grid-cols-4">
      {products.data.map((product) => {
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
