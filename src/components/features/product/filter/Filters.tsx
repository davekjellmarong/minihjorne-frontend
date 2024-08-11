"use client";
import React from "react";
import Filter from "./Fillter";
import useGetFilters from "@/components/customHooks/useGetFilters";
import FilterDialog from "./FilterDialog";
import { queryTemplates } from "@/utils/constants";
import useExtractQueryParams from "../useExtractQueryParams";
import FilterButtons from "./FilterButtons";
import FilterHeader from "./FilterHeader";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ProductQueries } from "@/queryFactory/Product";
import { useSearchParams } from "next/navigation";
interface FiltersProps {
  setOpen: (open: boolean) => void;
  open: boolean;
}
const Filters = ({ setOpen, open }: FiltersProps) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const { data: products } = useSuspenseQuery(
    ProductQueries.searchParamsTest(params.toString()),
  );
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
