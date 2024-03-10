import {
  CategoryRQ,
  ColorsRQ,
  MaterialsRQ,
  SexRq,
  SizesRQ,
  TagsRQ,
} from "@/utils/types";
import {
  fetchCategories,
  fetchColors,
  fetchMaterials,
  fetchSexes,
  fetchSizes,
  fetchTags,
} from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const useGetFilters = () => {
  const { data: TagsData, isLoading: tagsLoading } = useQuery<TagsRQ>({
    queryKey: ["tags"],
    queryFn: fetchTags,
    staleTime: Infinity,
  });
  const { data: ColorsData, isLoading: colorsLoading } = useQuery<ColorsRQ>({
    queryKey: ["colors"],
    queryFn: fetchColors,
    staleTime: Infinity,
  });
  const { data: SizesData, isLoading: sizesLoading } = useQuery<SizesRQ>({
    queryKey: ["sizes"],
    queryFn: fetchSizes,
    staleTime: Infinity,
  });
  const { data: CategoryData, isLoading: categoriesLoading } =
    useQuery<CategoryRQ>({
      queryKey: ["category"],
      queryFn: fetchCategories,
      staleTime: Infinity,
    });
  const { data: MaterialsData, isLoading: materialLoading } =
    useQuery<MaterialsRQ>({
      queryKey: ["material"],
      queryFn: fetchMaterials,
      staleTime: Infinity,
    });
  const { data: SexData, isLoading: sexLoading } = useQuery<SexRq>({
    queryKey: ["sex"],
    queryFn: fetchSexes,
    staleTime: Infinity,
  });
  return [
    TagsData,
    ColorsData,
    SizesData,
    CategoryData,
    MaterialsData,
    SexData,
  ];
};

export default useGetFilters;
