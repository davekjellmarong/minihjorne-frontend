"use client";
import React, { Suspense, useState } from "react";
import QuickFilterCards from "@/components/features/product/QuickFilterCards";
import Products from "@/components/features/product/Products";
import Pagination from "@/components/features/product/Pagination";
import Filters from "@/components/features/product/filter/Filters";
import FilterChips from "@/components/features/product/filter/FilterChips";
import FilterIcon from "@/components/features/product/filter/FilterIcon";
import ProductsSkeleton from "@/components/features/product/ProductsSkeleton";

export interface SelectedFilter {
  query: string;
  id: number;
  name: string;
}
const ProductPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative flex w-full flex-col items-center px-4">
        <div className="w-full  py-10 ">
          <h2 className="text-3xl ">Produkter</h2>
        </div>
        <div className="w-full pb-6">
          <QuickFilterCards />
        </div>
        <div className="flex w-full  border-gray-200  py-2">
          <FilterIcon setOpen={setOpen} />
        </div>
        <Suspense>
          <div className="flex w-full  border-gray-200  py-2">
            <Filters open={open} setOpen={setOpen} />
          </div>
          <div className="w-full">
            <FilterChips />
          </div>
        </Suspense>

        <Suspense fallback={<ProductsSkeleton />}>
          <Products />
          <div className="flex flex-col gap-6 py-6">
            <Pagination />
          </div>
        </Suspense>
      </div>
      <div className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-4 text-center text-white">
        <a
          href="https://www.instagram.com/mini_hjorne"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2"
        >
          <span className="text-lg font-semibold">Følg oss på Instagram</span>
          <svg
            className="h-6 w-6 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zM12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm6.125-.29a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32zm-6.125 1.54a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5zm5.25 7.75c.643 0 1.164-.521 1.164-1.164v-3.5a.164.164 0 0 0-.164-.164h-1.164a.164.164 0 0 0-.164.164v3.5c0 .643.521 1.164 1.164 1.164z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default ProductPage;
