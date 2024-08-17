"use client";
import React from "react";
import Filter from "./Fillter";
import FilterDialog from "./FilterDialog";
import { queryTemplates } from "@/utils/constants";
import useExtractQueryParams from "../useExtractQueryParams";
import FilterButtons from "./FilterButtons";
import FilterHeader from "./FilterHeader";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ProductQueries } from "@/queryFactory/Product";
import { useSearchParams } from "next/navigation";
import { FilterQueriesCached } from "@/queryFactory/Filter";
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
    colors,
    materials,
    sizes,
    sexes,
    tags,
    categories,
    categoryTypes,
    states,
    defects,
  } = useSuspenseQuery(FilterQueriesCached.allFilter()).data;

  const { queryParams } = useExtractQueryParams();
  return (
    <div className="relative flex max-h-screen flex-col overflow-y-scroll">
      {/* <FilterIcon setOpen={setOpen} /> */}

      <FilterDialog open={open} setOpen={setOpen}>
        <div className={`relative flex h-screen max-h-screen flex-col `}>
          <FilterHeader setOpen={setOpen} products={products} />
          <div className="grow">
            <Filter
              queryParams={queryParams}
              data={sexes}
              property="name"
              label="Kjønn"
              filter="sex"
              queryTemplate={queryTemplates.sexQueryTemplate}
            />
            <Filter
              queryParams={queryParams}
              data={categories}
              property="name"
              label="Plagg"
              filter="category"
              queryTemplate={queryTemplates.categoryQueryTemplate}
            />
            <Filter
              queryParams={queryParams}
              data={categoryTypes}
              property="name"
              label="Plagg Type"
              filter="category_type"
              queryTemplate={queryTemplates.categoryTypeQueryTemplate}
            />

            <Filter
              queryParams={queryParams}
              data={sizes}
              property="number"
              label="Størrelse"
              filter="size"
              queryTemplate={queryTemplates.sizeQueryTemplate}
            />
            <Filter
              queryParams={queryParams}
              data={tags}
              property="name"
              label="Tema"
              filter="tags"
              queryTemplate={queryTemplates.tagQueryTemplate}
            />

            <Filter
              queryParams={queryParams}
              data={colors}
              property="name"
              label="Farger"
              filter="colors"
              queryTemplate={queryTemplates.colorQueryTemplate}
            />
            <Filter
              queryParams={queryParams}
              data={materials}
              property="name"
              label="Tekstil"
              filter="materials"
              queryTemplate={queryTemplates.materialQueryTemplate}
            />
            <Filter
              queryParams={queryParams}
              data={states}
              property="name"
              label="Tilstand"
              filter="state"
              queryTemplate={queryTemplates.stateQueryTemplate}
            />
            <Filter
              queryParams={queryParams}
              data={defects}
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
