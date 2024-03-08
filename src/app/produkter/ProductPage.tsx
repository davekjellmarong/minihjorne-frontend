"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import Products from "../../components/products/Products";
import Filters from "./Filters";
import FilterChips from "./FilterChips";
import { ProductQueries } from "@/queryFactory/ProductQueryFactory";
import Button from "@/components/button/Button";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import Pagination from "./Pagination";
import PageNumber from "./PageNumber";
import { useRouter, useSearchParams } from "next/navigation";

export interface SelectedFilter {
  query: string;
  id: number;
  name: string;
}
const ProductPage = () => {
  const router = useRouter();
  // TO DO TO-DO validate user when doing post/delege request that user is accesing their own data, and not someone elses
  let pageNumber = 1;
  const searchParams = useSearchParams();

  useEffect(() => {
    // const params = new URLSearchParams(searchParams.toString());
    // params.set('page', sortOrder);
    // window.history.pushState(null, '', `?${params.toString()}`);
    // console.log("run effect");
    // const urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams);
    // const pageParam = urlParams.get("page");
    // console.log(pageParam);
    // if (pageParam) {
    //   const pageValue = parseInt(pageParam);
    //   setPage(pageValue);
    //   // pageNumber = pageValue;
    //   urlParams.delete("page");
    //   const searchQueryParams = urlParams.toString();
    //   console.log(searchQueryParams);
    //   router.push(`${window.location.pathname}?${searchQueryParams}`);
    // }
  }, []);
  const [page, setPage] = useState(1);
  // const [pageQuery, setPageQuery] = useState(`?pagination[page]=${page}`);
  const [filterQuery, setFilterQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({});
  const { data: products, isPending } = useQuery(
    ProductQueries.filtered(filterQuery, page),
  );
  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    // let pageQuery = "?pagination[page]=";
    const pageParam = current.get("pagination[page]");
    console.log(pageParam);
    console.log(current.toString());
    if (pageParam) {
      console.log("first if");
      setFilterQuery("&" + current.toString());
      // pageQuery += pageParam;
      // const pageValue = parseInt(pageParam);
      setPage(Number(pageParam));
    } else if (current.toString().length > 0) {
      console.log("second if");
      setFilterQuery("&" + current.toString() + "&pagination[page]=1");
      // pageQuery += 1;
    }

    // const path = current.toString();
    // if (path.length > 0) {
    //   setFilterQuery("&" + path);
    // }
  }, [page]);
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
          <FilterChips
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            setCheckboxStates={setCheckboxStates}
          />
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
