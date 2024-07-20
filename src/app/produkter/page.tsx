"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ProductQueries } from "@/queryFactory/Product";
import useInitialQueryParams from "@/components/features/product/useInitialQueryParams";
import QuickFilterCards from "@/components/features/product/QuickFilterCards";
import Filters from "@/components/features/product/Filters";
import FilterChips from "@/components/features/product/FilterChips";
import Products from "@/components/features/product/Products";
import Pagination from "@/components/features/product/Pagination";

export interface SelectedFilter {
  query: string;
  id: number;
  name: string;
}
const ProductPage = () => {
  const { filterQuery, setFilterQuery } = useInitialQueryParams();

  // todo to-do - use page value from filterQuery instead of page state, to stop refetching on page change aka move page state to url
  const { data: products, isPending } = useQuery(
    ProductQueries.filtered(filterQuery),
  );
  return (
    <>
      <div className="relative flex w-full flex-col items-center px-4">
        <div className="w-full  py-10 ">
          <h2 className="text-3xl font-bold">Produkter</h2>
        </div>
        <div className="w-full  pb-6">
          <QuickFilterCards setFilterQuery={setFilterQuery} />
        </div>
        <div className="flex w-full  border-gray-200  py-2">
          <Filters setFilterQuery={setFilterQuery} />
        </div>
        <div className="w-full ">
          <FilterChips />
        </div>
        <Products data={products?.data} isLoading={isPending} />
        <div className="flex flex-col gap-6 py-6">
          <Pagination
            pageCount={products?.meta?.pagination.pageCount}
            setFilterQuery={setFilterQuery}
          />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
