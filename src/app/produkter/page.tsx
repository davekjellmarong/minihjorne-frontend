"use client";
import { apiUrl, baseUrl, tailwindColors } from "@/utils/constants";
import { Product, ProductsData, TagsRQ } from "@/utils/types";
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

const Page = () => {
  const [filterQuery, setFilterQuery] = useState("");
  const { data, isLoading } = useQuery<ProductsData>({
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
  return (
    <>
      <SplitView>
        <Filters setFilterQuery={setFilterQuery} />
        <Products data={data?.data} isLoading={isLoading} />
      </SplitView>
    </>
  );
};

export default Page;
