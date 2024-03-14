import React from "react";
import useExtractQueryParams from "./useExtractQueryParams";
import { XCircle } from "@phosphor-icons/react";

const FilterChips = () => {
  const { flatQueryParams } = useExtractQueryParams();
  console.log(flatQueryParams);
  return (
    <div className="mb-4 mt-2 flex w-full flex-wrap gap-2  rounded-lg">
      {flatQueryParams?.map((filter: any) => (
        <div
          className="flex gap-1 rounded-full border border-gray-300 p-1.5 px-3"
          key={filter.attributes.createdAt}
        >
          <XCircle
            size={20}
            className=":sm:hover:bg-gray-400 cursor-pointer"
            weight="thin"
            onClick={() => {
              // setCheckboxStates((prevState: any) => {
              //   return {
              //     ...prevState,
              //     [filter]: false,
              //   };
              // });
              // setSelectedFilters((prevState: string[]) => {
              //   return prevState.filter((item) => item !== filter);
              // });
            }}
          />

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
