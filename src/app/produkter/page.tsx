"use client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { ProductQueries } from "@/queryFactory/Product";
import QuickFilterCards from "@/components/features/product/QuickFilterCards";
import Products from "@/components/features/product/Products";
import Pagination from "@/components/features/product/Pagination";
import { useSearchParams } from "next/navigation";
import Filters from "@/components/features/product/filter/Filters";
import FilterChips from "@/components/features/product/filter/FilterChips";

export interface SelectedFilter {
  query: string;
  id: number;
  name: string;
}
const ProductPage = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const { data: products, isPending } = useSuspenseQuery(
    ProductQueries.searchParamsTest(params.toString()),
  );
  return (
    <>
      <div className="relative flex w-full flex-col items-center px-4">
        <div className="w-full  py-10 ">
          <h2 className="text-3xl font-bold">Produkter</h2>
        </div>
        <div className="w-full  pb-6">
          <QuickFilterCards />
        </div>
        <div className="flex w-full  border-gray-200  py-2">
          <Filters products={products} />
        </div>
        <div className="w-full ">
          <FilterChips />
        </div>
        <Products data={products?.data} isLoading={isPending} />
        <div className="flex flex-col gap-6 py-6">
          <Pagination pageCount={products?.meta?.pagination.pageCount} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
