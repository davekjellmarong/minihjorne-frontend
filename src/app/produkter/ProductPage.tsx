"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Products from "../../components/products/Products";
import Filters from "./Filters";
import FilterChips from "./FilterChips";
import { ProductQueries } from "@/queryFactory/ProductQueryFactory";
import Pagination from "./Pagination";
import useInitialQueryParams from "./useInitialQueryParams";
import QuickFilterCards from "./QuickFilterCards";

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
          <Filters setFilterQuery={setFilterQuery} filterQuery={filterQuery} />
        </div>
        <div className="w-full ">
          <FilterChips />
        </div>
        <div className="flex flex-col gap-4">
          <Pagination
            pageCount={products?.meta?.pagination.pageCount}
            pageTotal={products?.meta?.pagination.total}
            setFilterQuery={setFilterQuery}
          />
        </div>
        <Products data={products?.data} isLoading={isPending} />
        <div className="flex flex-col gap-6 py-6">
          <Pagination
            pageCount={products?.meta?.pagination.pageCount}
            pageTotal={products?.meta?.pagination.total}
            setFilterQuery={setFilterQuery}
          />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
