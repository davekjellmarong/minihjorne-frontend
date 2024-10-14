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
  const [sortBy, setSortBy] = useState("sort=random_weight:desc");
  return (
    <>
      <div className="relative flex w-full flex-col px-4">
        <div className="w-full  py-10 ">
          <h2 className="text-3xl ">Produkter</h2>
        </div>
        <div className="w-full pb-6">
          <QuickFilterCards />
        </div>
        <div className="flex w-full gap-4 border-gray-200  py-2">
          <FilterIcon setOpen={setOpen} />
          {/* <SortMenu setSortBy={setSortBy} sortBy={sortBy} /> */}
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
          <div className="flex justify-center py-6">
            <Pagination />
          </div>
          {/* <LastProductsPage /> */}
        </Suspense>
      </div>
    </>
  );
};

export default ProductPage;
