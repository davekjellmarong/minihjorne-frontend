"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import Products from "../../components/products/Products";
import Filters from "./Filters";
import FilterChips from "./FilterChips";
import { ProductQueries } from "@/queryFactory/ProductQueryFactory";
import Button from "@/components/button/Button";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

export interface SelectedFilter {
  query: string;
  id: number;
  name: string;
}
const ProductPage = () => {
  const [page, setPage] = useState(1);
  const [filterQuery, setFilterQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({});
  const { data: products, isPending } = useQuery(
    ProductQueries.filtered(filterQuery, page),
  );
  // useBottomScrollListener(() => {
  //   setPage(page + 1);
  // });

  // const { data: products, isPending } = useQuery(
  //   ProductQueries.filtered(filterQuery),
  // );
  // useEffect(() => {
  //   if (products?.meta) {
  //     setPage(products?.meta.page);
  //   }
  // }, [products]);
  console.log({ products });
  console.log({ page });
  return (
    <>
      <div className="relative flex w-full flex-col items-center">
        <div className="w-full px-6 py-10 sm:px-24">
          <h2 className="text-3xl font-bold">Produkter</h2>
        </div>
        <div className="flex w-full border-y border-gray-200 px-6 py-2 sm:px-24">
          <Filters
            filterQuery={filterQuery}
            setFilterQuery={setFilterQuery}
            setSelectedFilters={setSelectedFilters}
            checkboxStates={checkboxStates}
            setCheckboxStates={setCheckboxStates}
          />
          <div className="flex">
            <Button
              type="outline"
              disabled={page === 1}
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Forrige
            </Button>
            <Button
              disabled={products?.meta.pagination.pageCount === page}
              type="outline"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Neste
            </Button>
          </div>
        </div>
        <div className="w-full px-6 sm:px-24">
          <FilterChips
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            setCheckboxStates={setCheckboxStates}
          />
        </div>
        <div className="px-3">
          <Products data={products?.data} isLoading={isPending} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
