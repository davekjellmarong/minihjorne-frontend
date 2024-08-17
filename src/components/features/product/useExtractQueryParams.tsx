"use client";
import useGetFiltersRouteHandler from "@/components/customHooks/useGetFiltersRouteHandler";
import { allFiltersObject } from "@/utils/constants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useExtractQueryParams = () => {
  const [queryParams, setQueryParams] = useState<any>(allFiltersObject);
  const searchParams = useSearchParams();
  const { allFilters } = useGetFiltersRouteHandler();
  useEffect(() => {
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
      material: [],
      sex: [],
      defects: [],
      category_type: [],
      state: [],
    };
    for (const query of path) {
      if (query.includes("pagination")) continue;

      const startIndex = query.indexOf("[") + 1;
      const endIndex = query.indexOf("]");
      const filter = query.substring(startIndex, endIndex);
      if (allFilters[filter]) {
        const filterValues = query.split("=")[1];
        const filterData = allFilters[filter].find(
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
  }, [searchParams]);
  return {
    queryParams: queryParams,
  };
};

export default useExtractQueryParams;
