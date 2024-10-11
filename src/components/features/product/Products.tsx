"use client";
import React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ProductQueries } from "@/queryFactory/Product";
import { useSearchParams } from "next/navigation";
import Product from "./Product";

const Products = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const { data: products } = useSuspenseQuery(
    ProductQueries.searchParamsTest(params.toString()),
  );
  return (
    // <ul className="mt-10 grid w-full grid-cols-1 justify-items-center gap-x-4 gap-y-16 sm:grid-cols-2 md:grid-cols-3">
    //   {products.data.map((product) => {
    //     return (
    //       <React.Fragment key={product.id}>
    //         <Product product={product} />
    //       </React.Fragment>
    //     );
    //   })}
    // </ul>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.data.map((product) => (
        <React.Fragment key={product.id}>
          <Product product={product} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Products;
