import React from "react";
import useExtractQueryParams from "./useExtractQueryParams";

const FilterChips = () => {
  const filters = useExtractQueryParams();

  return (
    <div className="mb-4 mt-2 flex w-full flex-wrap gap-2  rounded-lg">
      {filters.map((filter: any) => (
        <div
          className="flex gap-1 rounded border border-gray-300 px-3 py-2"
          key={filter}
        >
          {/* <XCircle
            size={20}
            className="cursor-pointer :sm:hover:bg-gray-400"
            weight="thin"
            onClick={() => {
              setCheckboxStates((prevState: any) => {
                return {
                  ...prevState,
                  [filter]: false,
                };
              });
              setSelectedFilters((prevState: string[]) => {
                return prevState.filter((item) => item !== filter);
              });
            }}
          /> */}

          <p>
            {filter.attributes?.name?.length > 1
              ? filter.attributes?.name
              : filter.attributes?.number}
            {/* {filter.attributes?.name} */}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FilterChips;
