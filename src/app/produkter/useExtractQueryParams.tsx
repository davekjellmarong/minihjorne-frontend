"use client";
import { FilterQueries } from "@/queryFactory/FilterQueryFactory";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const useExtractQueryParams = () => {
  const [filters, setFilters] = useState<any>([]);
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

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

  const current = new URLSearchParams(Array.from(searchParams.entries()));
  const path = current
    .toString()
    .split("&")
    .map((item) => decodeURIComponent(item));
  useEffect(() => {
    const filterMap: any = {
      category,
      colors,
      size,
      tags,
      materials,
      sex,
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
        setFilters((prevState: any) => {
          return [...prevState, filterData];
        });
      }
    }

    return () => {
      setFilters([]);
    };
  }, []);
  return filters;
};

export default useExtractQueryParams;
