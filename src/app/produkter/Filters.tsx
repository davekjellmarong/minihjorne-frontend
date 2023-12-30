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
import Filter from "./Fillter";
import useGetFilters from "@/components/customHooks/useGetFilters";
import { SelectedFilter } from "./page";
import FilterChips from "./FilterChips";
import { SlidersHorizontal } from "@phosphor-icons/react";

interface FiltersProps {
  setFilterQuery: any;
  setSelectedFilters: (value: string[]) => void;
  selectedFilters: string[];
}
const Filters = ({
  setFilterQuery,
  setSelectedFilters,
  selectedFilters,
}: FiltersProps) => {
  const [height, setHeight] = useState("0");
  const [
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
  ] = useGetFilters();
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
    setSelectedFilters([
      ...colorFilter.map((item: any) => item.name),
      ...sizeFilter.map((item: any) => item.name),
      ...tagFilter.map((item: any) => item.name),
      ...materialFilter.map((item: any) => item.name),
      ...categoryFilter.map((item: any) => item.name),
    ]);
  };
  // if (
  //   colorsLoading ||
  //   tagsLoading ||
  //   sizesLoading ||
  //   materialLoading ||
  //   categoriesLoading
  // ) {
  //   return <p>loading</p>;
  // }
  // if (TagsData && ColorsData && SizesData && MaterialsData && CategoryData)
  return (
    <div className="px-4 sm:px-16 max-h-screen flex flex-col overflow-y-scroll sm:border-r-2 sm:border-gray-300 relative">
      <div>
        <button
          onClick={() => {
            console.log(height);
            setHeight(height === "0" ? "h-auto" : "0");
          }}
          className="sm:hidden flex items-center border-2 border-gray-500 rounded-md p-2 px-4 my-4  hover:bg-gray-700"
        >
          <SlidersHorizontal size={32} weight="thin" />
          <p>Filter</p>
        </button>
      </div>

      <button
        className="hidden sm:block bg-gray-500 rounded-md p-2 px-4 m-4 sticky top-0 text-white hover:bg-gray-700"
        onClick={handleFilterFetch}
      >
        Bruk filter
      </button>
      <FilterChips
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />
      <div
        className={`h-${height} max-h-screen sm:h-auto sm:space-y-8 flex flex-col`}
      >
        <button
          className="block sm:hidden bg-gray-500 rounded-md p-2 px-4 m-4 sticky top-0 text-white hover:bg-gray-700"
          onClick={() => {
            handleFilterFetch();
            setHeight("0");
          }}
        >
          Bruk filter
        </button>
        <Filter
          data={CategoryData}
          property="name"
          label="Kategori"
          setFilter={setCategoryFilter}
          filter={categoryFilter}
          queryTemplate="&filters[category][name][$eq]="
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
      </div>
    </div>
  );
};

export default Filters;
