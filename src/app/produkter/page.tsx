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
import React, { useState } from "react";
import Products from "./Products";
import Filters from "./Filters";
import SplitView from "@/components/layout/SplitView";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";

const Page = () => {
  const [filterQuery, setFilterQuery] = useState("");
  const { data, isLoading } = useQuery<ProductsData>({
    queryKey: ["product", filterQuery],
    queryFn: () => {
      return fetchProductsFiltered(filterQuery);
    },
  });
  useAutoLogIn();

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
