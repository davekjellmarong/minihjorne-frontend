"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Products from "../../components/products/Products";
import Filters from "./Filters";
import FilterChips from "./FilterChips";
import { ProductQueries } from "@/queryFactory/ProductQueryFactory";
import Pagination from "./Pagination";
import PageNumber from "./PageNumber";
import { useSearchParams } from "next/navigation";

export interface SelectedFilter {
  query: string;
  id: number;
  name: string;
}
const ProductPage = () => {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(1);
  const [filterQuery, setFilterQuery] = useState("");
  console.log(React);
  const { data: products, isPending } = useQuery(
    ProductQueries.filtered(filterQuery, page),
  );
  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const pageParam = current.get("pagination[page]");
    if (pageParam) {
      setFilterQuery("&" + current.toString());
      setPage(Number(pageParam));
    } else if (current.toString().length > 0) {
      setFilterQuery("&" + current.toString() + "&pagination[page]=1");
    }
  }, [page]);
  return (
    <>
      <div className="relative flex w-full flex-col items-center">
        <div className="w-full px-6 py-10 sm:px-24">
          <h2 className="text-3xl font-bold">Produkter</h2>
        </div>
        <div className="flex w-full border-y border-gray-200 px-6 py-2 sm:px-24">
          <Filters setFilterQuery={setFilterQuery} />
          <div className="flex grow items-center justify-end">
            <Pagination
              page={page}
              setPage={setPage}
              pageCount={products?.meta?.pagination.pageCount}
              setFilterQuery={setFilterQuery}
            />
          </div>
        </div>
        <div className="w-full px-6 sm:px-24">
          <FilterChips />
        </div>
        <div className="px-3">
          <PageNumber
            page={page}
            pageCount={products?.meta?.pagination.pageCount}
            pageTotal={products?.meta?.pagination.total}
          />
          <Products data={products?.data} isLoading={isPending} />
          <div className="flex flex-col items-center pt-6">
            <Pagination
              page={page}
              setPage={setPage}
              pageCount={products?.meta?.pagination.pageCount}
              setFilterQuery={setFilterQuery}
            />
            <PageNumber
              page={page}
              pageCount={products?.meta?.pagination.pageCount}
              pageTotal={products?.meta?.pagination.total}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
