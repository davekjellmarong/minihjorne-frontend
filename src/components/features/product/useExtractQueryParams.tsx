"use client";
import { FilterQueries } from "@/queryFactory/Filter";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useExtractQueryParams = () => {
  const [queryParams, setQueryParams] = useState<any>({
    category: [],
    colors: [],
    size: [],
    tags: [],
    materials: [],
    sex: [],
    defects: [],
    category_type: [],
    state: [],
  });
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  useEffect(() => {
    const category = queryClient.getQueryData(
      FilterQueries.categories().queryKey,
    );
    const colors = queryClient.getQueryData(FilterQueries.colors().queryKey);
    const size = queryClient.getQueryData(FilterQueries.sizes().queryKey);
    const tags = queryClient.getQueryData(FilterQueries.tags().queryKey);
    const materials = queryClient.getQueryData(
      FilterQueries.materials().queryKey,
    );
    const sex = queryClient.getQueryData(FilterQueries.sexes().queryKey);
    const defects = queryClient.getQueryData(FilterQueries.defects().queryKey);
    const category_type = queryClient.getQueryData(
      FilterQueries.categoryTypes().queryKey,
    );
    const state = queryClient.getQueryData(FilterQueries.states().queryKey);

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const path = current
      .toString()
      .split("&")
      .map((item) => decodeURIComponent(item));
    let queryParamsObject: any = {
      category: [],
      colors: [],
      size: [],
      tags: [],
      materials: [],
      sex: [],
      defects: [],
      category_type: [],
      state: [],
    };
    const filterMap: any = {
      category,
      colors,
      size,
      tags,
      materials,
      sex,
      defects,
      category_type,
      state,
    };
    for (const query of path) {
      if (query.includes("pagination")) continue;

      const startIndex = query.indexOf("[") + 1;
      const endIndex = query.indexOf("]");
      const filter = query.substring(startIndex, endIndex);
      if (filterMap[filter]) {
        const filterValues = query.split("=")[1];
        const filterData = filterMap[filter].find(
          (item: any) => item.id === Number(filterValues),
        );
        if (filterData) {
          queryParamsObject[filter]?.push(filterData);
        }
      }
    }
    setQueryParams(queryParamsObject);

    return () => {
      setQueryParams([]);
    };
  }, [searchParams, queryClient]);
  return {
    queryParams: queryParams,
  };
};

export default useExtractQueryParams;
