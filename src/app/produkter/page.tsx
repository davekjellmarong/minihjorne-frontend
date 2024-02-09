"use client";
import {
  Product as ProductType,
  ProductBackend,
  ProductsData,
  TagsRQ,
} from "@/utils/types";
import { fetchProductsFiltered } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import Filters from "./Filters";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";

import FilterChips from "./FilterChips";
import ProductDetail from "./ProductDetail";
import Dialog from "@/components/dialog/Dialog";
import FilterDialog from "./FilterDialog";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

export interface SelectedFilter {
  query: string;
  id: number;
  name: string;
}
const Page = () => {
  const [filterData, setFilterData] = useState<any>({});
  const [filterQuery, setFilterQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({});
  const { data, isLoading } = useQuery<ProductBackend[]>({
    queryKey: ["product", filterQuery],
    queryFn: () => {
      return fetchProductsFiltered(filterQuery);
    },
  });
  useAutoLogIn();
  return (
    <>
      <div className="flex w-full flex-col items-center relative">
        <div className="w-full px-6 py-10 sm:px-24">
          <h2 className="text-3xl font-bold">Produkter</h2>
        </div>
        <div className="w-full border-y border-gray-200 py-2 px-6 sm:px-24">
          <Filters
            filterQuery={filterQuery}
            setFilterQuery={setFilterQuery}
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
            checkboxStates={checkboxStates}
            setCheckboxStates={setCheckboxStates}
            filterData={filterData}
            setFilterData={setFilterData}
          />
        </div>
        <div className="px-6 sm:px-24 w-full">
          <FilterChips
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            setCheckboxStates={setCheckboxStates}
          />
        </div>
        <div className="w-5/6">
          <Products data={data} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
};

export default Page;
