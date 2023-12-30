import {
  CategoryRQ,
  ColorsRQ,
  MaterialsRQ,
  SizesRQ,
  TagsRQ,
} from "@/utils/types";
import {
  fetchCategories,
  fetchColors,
  fetchMaterials,
  fetchSizes,
  fetchTags,
} from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const useGetFilters = () => {
  const [colorFilter, setColorFilter] = useState<any>([]);
  const [sizeFilter, setSizeFilter] = useState<any>([]);
  const [tagFilter, setTagFilter] = useState<any>([]);
  const [materialFilter, setMaterialFilter] = useState<any>([]);
  const [categoryFilter, setCategoryFilter] = useState<any>([]);
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
  return [
    TagsData,
    ColorsData,
    SizesData,
    CategoryData,
    MaterialsData,
    colorFilter,
    setColorFilter,
    sizeFilter,
    setSizeFilter,
    tagFilter,
    setTagFilter,
    materialFilter,
    setMaterialFilter,
    categoryFilter,
    setCategoryFilter,
  ];
};

export default useGetFilters;
