"use client";
import React from "react";
import useExtractQueryParams from "../useExtractQueryParams";
import { XCircle } from "@phosphor-icons/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { handleRemoveFilter } from "@/utils/QueryParamUtils";

const FilterChips = () => {
  const { queryParams } = useExtractQueryParams();
  const filterEntries = Object.entries(queryParams);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const handleClearAll = () => {
    router.push(pathname);
  };

  return (
    <div className="mb-4 mt-2 flex w-full flex-wrap gap-2 rounded-lg">
      {filterEntries.some(([key, filters]: any) => filters.length > 0) && (
        <button
          onClick={handleClearAll}
          className="flex gap-1 rounded border bg-red-400 p-1.5 px-3"
        >
          <p className="text-sm font-light text-white">Fjern alle</p>
          <XCircle size={20} color="white" />
        </button>
      )}

      {filterEntries.map(([key, filters]: any) =>
        filters.length > 0
          ? filters.map((filter: any) => (
              <div
                className="flex gap-1 rounded-full border border-gray-300 bg-brand-400 p-1.5 px-3 text-white"
                key={filter.id}
              >
                <p className="text-sm font-light">
                  {filter.attributes?.name?.length > 1
                    ? filter.attributes?.name
                    : filter.attributes?.number}
                </p>
                {filter.attributes?.type && (
                  <p className="text-sm font-light">
                    {filter.attributes?.type}
                  </p>
                )}

                <button
                  onClick={() =>
                    handleRemoveFilter(router, pathname, params, key, filter.id)
                  }
                >
                  <XCircle size={20} color="white" />
                </button>
              </div>
            ))
          : null,
      )}
    </div>
  );
};

export default FilterChips;
