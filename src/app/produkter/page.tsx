"use client";
import { apiUrl, baseUrl, tailwindColors } from "@/utils/constants";
import { Product, ProductBackend, ProductsData, TagsRQ } from "@/utils/types";
import {
  fetchColors,
  fetchProducts,
  fetchProductsFiltered,
  fetchPublicData,
  fetchSizes,
  fetchTags,
} from "@/utils/utils";
import { PlusCircle, Tag, User } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import Filters from "./Filters";
import SplitView from "@/components/layout/SplitView";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import {
  getItemsFromLocalStorage,
  getSavedProductIds,
} from "@/components/cart/Utils";
import FilterChips from "./FilterChips";
export interface SelectedFilter {
  query: string;
  id: number;
  name: string;
}
const Page = () => {
  const [filterQuery, setFilterQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const { data, isLoading } = useQuery<ProductBackend[]>({
    queryKey: ["product", filterQuery],
    queryFn: () => {
      return fetchProductsFiltered(filterQuery);
    },
  });
  useAutoLogIn();

  // useEffect(() => {
  //   if (data?.data) {
  //     const productsIds = data?.data.map((product) => product.id);
  //     const savedProductsIds = getItemsFromLocalStorage().map(
  //       (product) => product.id
  //     );
  //     console.log({ savedProductsIds });
  //     console.log(productsIds);
  //     const addedProducts = savedProductsIds.filter((id) =>
  //       productsIds.includes(id)
  //     );
  //     console.log(addedProducts);
  //   }
  // }, [data]);
  console.log(selectedFilters);

  return (
    <>
      <div className="flex w-full flex-col items-center sm:items-start sm:flex-row relative">
        <div className="w-full sm:w-80">
          <Filters
            setFilterQuery={setFilterQuery}
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
          />
          {/* <FilterChips
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          /> */}
        </div>
        <div className=" w-full sm:grow">
          <Products data={data} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
};

export default Page;
