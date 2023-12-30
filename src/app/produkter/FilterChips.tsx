import { XCircle } from "@phosphor-icons/react";
import React from "react";

interface FilterProps {
  selectedFilters: string[];
  setSelectedFilters: (value: string[]) => void;
}

const FilterChips = ({ selectedFilters, setSelectedFilters }: FilterProps) => {
  if (selectedFilters.length === 0) return <></>;
  return (
    <div className="flex flex-wrap gap-2 mt-2 mb-4  rounded-lg">
      {selectedFilters.map((filter) => (
        <div
          className="flex gap-1 bg-gray-300 px-3 py-2 rounded-lg"
          key={filter}
        >
          {/* <XCircle
            size={20}
            className="cursor-pointer :hover:bg-gray-400"
            weight="thin"
          /> */}

          <p>{filter}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterChips;
