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
import Product from "./Product";
import Dialog from "@/components/dialog/Dialog";
export interface SelectedFilter {
  query: string;
  id: number;
  name: string;
}
const Page = () => {
  const [filterQuery, setFilterQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductBackend>();
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
        <Dialog open={open} setOpen={setOpen}>
          <Product selectedProduct={selectedProduct} />
        </Dialog>
        <div className="w-full border-y border-gray-200 py-2 px-6 sm:px-24">
          <Filters
            setFilterQuery={setFilterQuery}
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
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
        <div className="w-5/6">
          <Products
            setOpen={setOpen}
            setSelectedProduct={setSelectedProduct}
            data={data}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
