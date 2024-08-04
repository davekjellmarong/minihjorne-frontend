import React, { useState } from "react";
import Filter from "./Fillter";
import useGetFilters from "@/components/customHooks/useGetFilters";
import { SlidersHorizontal, X } from "@phosphor-icons/react";
import FilterDialog from "./FilterDialog";
import { queryTemplates } from "@/utils/constants";
import useExtractQueryParams from "../useExtractQueryParams";
import { ProductsPagination } from "@/utils/types";
import FilterButtons from "./FilterButtons";
import FilterHeader from "./FilterHeader";
interface FiltersProps {
  products: ProductsPagination;
}
const Filters = ({ products }: FiltersProps) => {
  const [open, setOpen] = useState(false);
  const {
    SexData,
    CategoryData,
    SizesData,
    TagsData,
    ColorsData,
    MaterialsData,
    CategoryTypesData,
    DefectsData,
    StatesData,
  } = useGetFilters();
  const { queryParams } = useExtractQueryParams();
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
          <FilterHeader setOpen={setOpen} products={products} />
          <div className="grow">
            <Filter
              queryParams={queryParams}
              data={SexData}
              property="name"
              label="Kjønn"
              filter="sex"
              queryTemplate={queryTemplates.sexQueryTemplate}
            />
            <Filter
              queryParams={queryParams}
              data={CategoryData}
              property="name"
              label="Kategori"
              filter="category"
              queryTemplate={queryTemplates.categoryQueryTemplate}
            />
            <Filter
              queryParams={queryParams}
              data={CategoryTypesData}
              property="name"
              label="Kategori Type"
              filter="category_type"
              queryTemplate={queryTemplates.categoryTypeQueryTemplate}
            />

            <Filter
              queryParams={queryParams}
              data={SizesData}
              property="number"
              label="Størrelse"
              filter="size"
              queryTemplate={queryTemplates.sizeQueryTemplate}
            />
            <Filter
              queryParams={queryParams}
              data={TagsData}
              property="name"
              label="Tags"
              filter="tags"
              queryTemplate={queryTemplates.tagQueryTemplate}
            />

            <Filter
              queryParams={queryParams}
              data={ColorsData}
              property="name"
              label="Farger"
              filter="colors"
              queryTemplate={queryTemplates.colorQueryTemplate}
            />
            <Filter
              queryParams={queryParams}
              data={MaterialsData}
              property="name"
              label="Stoff"
              filter="materials"
              queryTemplate={queryTemplates.materialQueryTemplate}
            />
            <Filter
              queryParams={queryParams}
              data={StatesData}
              property="name"
              label="Tilstand"
              filter="state"
              queryTemplate={queryTemplates.stateQueryTemplate}
            />
            <Filter
              queryParams={queryParams}
              data={DefectsData}
              property="type"
              label="Avvik"
              filter="defects"
              queryTemplate={queryTemplates.defectQueryTemplate}
            />
          </div>
          <FilterButtons setOpen={setOpen} products={products} />
        </div>
      </FilterDialog>
    </div>
  );
};

export default Filters;
