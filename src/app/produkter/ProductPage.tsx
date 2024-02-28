"use client";
import { ProductBackend } from "@/utils/types";
import { fetchProductsFiltered } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Products from "../../components/products/Products";
import Filters from "./Filters";
import FilterChips from "./FilterChips";

export interface SelectedFilter {
  query: string;
  id: number;
  name: string;
}
const ProductPage = () => {
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
            checkboxStates={checkboxStates}
            setCheckboxStates={setCheckboxStates}
          />
        </div>
        <div className="px-6 sm:px-24 w-full">
          <FilterChips
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            setCheckboxStates={setCheckboxStates}
          />
        </div>
        <div className="px-6">
          <Products data={data} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
