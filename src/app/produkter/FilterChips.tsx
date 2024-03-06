import { XCircle } from "@phosphor-icons/react";
import React from "react";

interface FilterProps {
  selectedFilters: string[];
  setSelectedFilters: any;
  setCheckboxStates: (value: any) => void;
}

const FilterChips = ({
  selectedFilters,
  setSelectedFilters,
  setCheckboxStates,
}: FilterProps) => {
  if (selectedFilters.length === 0) return <></>;
  return (
    <div className="mb-4 mt-2 flex w-full flex-wrap gap-2  rounded-lg">
      {selectedFilters.map((filter) => (
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

          <p>{filter}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterChips;
