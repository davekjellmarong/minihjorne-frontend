import React, { useState } from "react";
import Filter from "./Fillter";
import useGetFilters from "@/components/customHooks/useGetFilters";
import FilterChips from "./FilterChips";
import { SlidersHorizontal } from "@phosphor-icons/react";

interface FiltersProps {
  setFilterQuery: any;
  setSelectedFilters: (value: string[]) => void;
  selectedFilters: string[];
}
type Heights = {
  0: string;
  h: string;
};
const Filters = ({
  setFilterQuery,
  setSelectedFilters,
  selectedFilters,
}: FiltersProps) => {
  enum heightClasses {
    zero = "h-0",
    auto = "h-auto",
  }

  const [height, setHeight] = useState(heightClasses.zero);
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({});
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
  return (
    <div className=" sm:px-16 max-h-screen flex flex-col overflow-y-scroll sm:border-r-2 sm:border-gray-300 relative">
      <div className="flex justify-between gap-4">
        <button
          onClick={() => {
            console.log(height);
            setHeight(
              height === heightClasses.zero
                ? heightClasses.auto
                : heightClasses.zero
            );
          }}
          className="sm:hidden flex items-center border-2 border-gray-500 rounded-md p-2 px-4 my-4  hover:bg-gray-700"
        >
          <SlidersHorizontal size={32} weight="thin" />
          <p>Filter</p>
        </button>
        <button
          className="sm:hidden flex items-center border-2 border-red-300 rounded-md p-2 px-4 my-4  hover:bg-gray-700"
          onClick={() => {
            setCheckboxStates({});
            setFilterQuery("");
            setSelectedFilters([]);
            setColorFilter([]);
            setSizeFilter([]);
            setTagFilter([]);
            setMaterialFilter([]);
            setCategoryFilter([]);
          }}
        >
          Tøm alle filtre
        </button>
      </div>

      <button
        className="hidden sm:block bg-gray-500 rounded-md p-2 px-4 m-4 sticky top-0 text-white hover:bg-gray-700"
        onClick={handleFilterFetch}
      >
        Bruk filter
      </button>
      <FilterChips
        setCheckboxStates={setCheckboxStates}
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      />
      <div
        className={`${height} max-h-screen sm:h-auto sm:space-y-8 flex flex-col`}
      >
        <div className="flex justify-between">
          <p className="text-lg font-bold">Filtrer</p>
          <div>x</div>
        </div>
        <Filter
          setCheckboxStates={setCheckboxStates}
          checkboxStates={checkboxStates}
          data={CategoryData}
          property="name"
          label="Kategori"
          setFilter={setCategoryFilter}
          filter={categoryFilter}
          queryTemplate="&filters[category][name][$eq]="
        />
        <Filter
          setCheckboxStates={setCheckboxStates}
          checkboxStates={checkboxStates}
          data={SizesData}
          property="number"
          label="Størrelser"
          setFilter={setSizeFilter}
          filter={sizeFilter}
          queryTemplate="&filters[size][number][$eq]="
        />
        <Filter
          setCheckboxStates={setCheckboxStates}
          checkboxStates={checkboxStates}
          data={MaterialsData}
          property="name"
          label="Stoff"
          setFilter={setMaterialFilter}
          filter={materialFilter}
          queryTemplate="&filters[materials][name][$eq]="
        />
        <Filter
          setCheckboxStates={setCheckboxStates}
          checkboxStates={checkboxStates}
          data={TagsData}
          property="name"
          label="Tags"
          setFilter={setTagFilter}
          filter={tagFilter}
          queryTemplate="&filters[tags][name][$eq]="
        />
        <Filter
          setCheckboxStates={setCheckboxStates}
          checkboxStates={checkboxStates}
          data={ColorsData}
          property="name"
          label="Farger"
          setFilter={setColorFilter}
          filter={colorFilter}
          queryTemplate="&filters[colors][name][$eq]="
        />
        <button
          className="block sm:hidden bg-gray-500 rounded-md p-2 px-4 m-4 sticky top-0 text-white hover:bg-gray-700"
          onClick={() => {
            handleFilterFetch();
            setHeight(heightClasses.zero);
          }}
        >
          Bruk filter
        </button>
      </div>
    </div>
  );
};

export default Filters;
