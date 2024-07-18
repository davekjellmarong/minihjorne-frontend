import React from "react";
import useExtractQueryParams from "./useExtractQueryParams";
import { XCircle } from "@phosphor-icons/react";

const FilterChips = () => {
  const { flatQueryParams } = useExtractQueryParams();
  return (
    <div className="mb-4 mt-2 flex w-full flex-wrap gap-2  rounded-lg">
      {flatQueryParams?.length > 0 && (
        // TO-DO Use a button component
        <button
          onClick={() => {
            window.location.search = "";
          }}
          className="flex gap-1 rounded border bg-red-400 p-1.5 px-3"
        >
          <p className="text-sm font-light text-white">Fjern alle</p>
          <XCircle size={20} color="white" />
        </button>
      )}

      {flatQueryParams?.map((filter: any) => (
        <div
          className="flex gap-1 rounded-full border border-gray-300 bg-brand-400 p-1.5 px-3 text-white"
          key={filter.attributes.createdAt}
        >
          <p className="text-sm font-light">
            {filter.attributes?.name?.length > 1
              ? filter.attributes?.name
              : filter.attributes?.number}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FilterChips;
