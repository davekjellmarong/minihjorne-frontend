"use client";
import React from "react";
import Product from "./Product";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ProductQueries } from "@/queryFactory/Product";
import { useSearchParams } from "next/navigation";
interface SalgsProfilProductsProps {
  id: string;
}
const SalgsProfilProducts = ({ id }: { id: string | number }) => {
  const { data: products } = useSuspenseQuery(
    ProductQueries.userId(String(id)),
  );
  return (
    <ul className="mt-10 grid w-full grid-cols-2 justify-items-center gap-x-4 gap-y-16 sm:grid-cols-3 md:grid-cols-4">
      {products.map((product) => {
        return (
          <React.Fragment key={product.id}>
            <Product product={product} />
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default SalgsProfilProducts;
