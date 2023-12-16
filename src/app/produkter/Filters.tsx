import {
  CategoryRQ,
  ColorsRQ,
  MaterialRQ,
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
import Filter from "./Fillter";

interface FiltersProps {
  setFilterQuery: any;
}
const Filters = ({ setFilterQuery }: FiltersProps) => {
  const [colorFilter, setColorFilter] = useState<any>([]);
  const [sizeFilter, setSizeFilter] = useState<any>([]);
  const [tagFilter, setTagFilter] = useState<any>([]);
  const [materialFilter, setMaterialFilter] = useState<any>([]);
  const [categoryFilter, setCategoryFilter] = useState<any>([]);
  const { data: TagsData, isLoading: tagsLoading } = useQuery<TagsRQ>({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });
  const { data: ColorsData, isLoading: colorsLoading } = useQuery<ColorsRQ>({
    queryKey: ["colors"],
    queryFn: fetchColors,
  });
  const { data: SizesData, isLoading: sizesLoading } = useQuery<SizesRQ>({
    queryKey: ["sizes"],
    queryFn: fetchSizes,
  });
  const { data: CategoryData, isLoading: categoriesLoading } =
    useQuery<CategoryRQ>({
      queryKey: ["category"],
      queryFn: fetchCategories,
    });
  const { data: MaterialsData, isLoading: materialLoading } =
    useQuery<MaterialRQ>({
      queryKey: ["material"],
      queryFn: fetchMaterials,
    });
  const handleFilterFetch = () => {
    const colorQuery = colorFilter
      .map((item: any) => {
        return item.query;
      })
      .join("");
    const sizeQuery = sizeFilter
      .map((item: any) => {
        return item.query;
      })
      .join("");
    const tagQuery = tagFilter
      .map((item: any) => {
        return item.query;
      })
      .join("");
    const materialQuery = materialFilter
      .map((item: any) => {
        return item.query;
      })
      .join("");
    const categoryQuery = categoryFilter
      .map((item: any) => {
        return item.query;
      })
      .join("");
    setFilterQuery(
      colorQuery + tagQuery + sizeQuery + materialQuery + categoryQuery
    );
  };
  if (
    colorsLoading ||
    tagsLoading ||
    sizesLoading ||
    materialLoading ||
    categoriesLoading
  ) {
    return <p>loading</p>;
  }
  if (TagsData && ColorsData && SizesData && MaterialsData && CategoryData)
    return (
      <div className="mx-6 space-y-3">
        <button className="bg-gray-300 p-2 px-4" onClick={handleFilterFetch}>
          Bruk filter
        </button>
        <Filter
          data={TagsData}
          property="name"
          label="Tags"
          setFilter={setTagFilter}
          filter={tagFilter}
          queryTemplate="&filters[tags][name][$eq]="
        />
        <Filter
          data={ColorsData}
          property="name"
          label="Farger"
          setFilter={setColorFilter}
          filter={colorFilter}
          queryTemplate="&filters[colors][name][$eq]="
        />
        <Filter
          data={SizesData}
          property="number"
          label="Størrelser"
          setFilter={setSizeFilter}
          filter={sizeFilter}
          queryTemplate="&filters[size][number][$eq]="
        />
        <Filter
          data={MaterialsData}
          property="name"
          label="Stoff"
          setFilter={setMaterialFilter}
          filter={materialFilter}
          queryTemplate="&filters[materials][name][$eq]="
        />
        <Filter
          data={CategoryData}
          property="name"
          label="Kategori"
          setFilter={setCategoryFilter}
          filter={categoryFilter}
          queryTemplate="&filters[category][name][$eq]="
        />
      </div>
    );
};

export default Filters;
