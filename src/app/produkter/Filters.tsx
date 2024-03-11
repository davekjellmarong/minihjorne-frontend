import React, { useState } from "react";
import Filter from "./Fillter";
import useGetFilters from "@/components/customHooks/useGetFilters";
import { SlidersHorizontal, X } from "@phosphor-icons/react";
import FilterDialog from "./FilterDialog";
import { queryTemplates } from "@/utils/constants";
import useExtractQueryParams from "./useExtractQueryParams";

interface FiltersProps {
  setFilterQuery: any;
}
const Filters = ({ setFilterQuery }: FiltersProps) => {
  const [open, setOpen] = useState(false);

  const [
    TagsData,
    ColorsData,
    SizesData,
    CategoryData,
    MaterialsData,
    SexData,
  ] = useGetFilters();

  const handleFilterFetch = () => {
    const queryParams = new URLSearchParams(window.location.search);
    setFilterQuery(`?${queryParams.toString()}&pagination[page]=1`);
  };
  const { queryParams } = useExtractQueryParams();
  const FilterProps = {
    queryParams,
  };
  return (
    <div className="relative flex max-h-screen flex-col overflow-y-scroll">
      <div className="flex justify-between gap-4">
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="flex items-center rounded border border-gray-300 p-2 px-4 sm:hover:bg-gray-200"
        >
          <SlidersHorizontal size={24} weight="thin" />
          <p className="">Filter</p>
        </button>
      </div>
      <FilterDialog open={open} setOpen={setOpen}>
        <div className={`relative flex h-screen max-h-screen flex-col `}>
          <div className="flex justify-between border-b border-b-gray-300 px-6  py-6">
            <p className="text-lg font-bold ">Filtrer</p>
            <div
              onClick={() => {
                setOpen(false);
              }}
              className="cursor-pointer"
            >
              <X size={28} />
            </div>
          </div>
          <div className="grow">
            <Filter
              {...FilterProps}
              data={SexData}
              property="name"
              label="Kjønn"
              filter="sex"
              queryTemplate={queryTemplates.sexQueryTemplate}
            />
            <Filter
              {...FilterProps}
              data={CategoryData}
              property="name"
              label="Kategori"
              filter="category"
              queryTemplate={queryTemplates.categoryQueryTemplate}
            />
            <Filter
              {...FilterProps}
              data={SizesData}
              property="number"
              label="Størrelse"
              filter="size"
              queryTemplate={queryTemplates.sizeQueryTemplate}
            />
            <Filter
              {...FilterProps}
              data={TagsData}
              property="name"
              label="Tags"
              filter="tags"
              queryTemplate={queryTemplates.tagQueryTemplate}
            />
            <Filter
              {...FilterProps}
              data={ColorsData}
              property="name"
              label="Farger"
              filter="colors"
              queryTemplate={queryTemplates.colorQueryTemplate}
            />
            <Filter
              {...FilterProps}
              data={MaterialsData}
              property="name"
              label="Stoff"
              filter="materials"
              queryTemplate={queryTemplates.materialQueryTemplate}
            />
          </div>

          <div className="sticky bottom-0 flex justify-between  bg-gray-100 px-6 shadow-inner">
            <button
              className=" my-4 flex items-center rounded-md border-2 border-red-300 p-2 px-4  sm:hover:bg-gray-700"
              onClick={() => {
                setFilterQuery("");
              }}
            >
              Tøm alle filtre
            </button>
            <button
              className="sticky top-0 m-4 block rounded-md bg-gray-500 p-2 px-4 text-white sm:hover:bg-gray-700"
              onClick={() => {
                handleFilterFetch();
                setOpen(false);
                // router.push(`/produkter?${filterQuery}`);
              }}
            >
              Bruk filter
            </button>
          </div>
        </div>
      </FilterDialog>
    </div>
  );
};

export default Filters;
