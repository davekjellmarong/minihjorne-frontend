import { SlidersHorizontal } from "@phosphor-icons/react";
import React from "react";
interface FilterIconProps {
  setOpen: (open: boolean) => void;
}
const FilterIcon = ({ setOpen }: FilterIconProps) => {
  return (
    <div className="flex justify-between gap-4">
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="flex items-center rounded border border-gray-300 p-2 px-4 sm:hover:bg-gray-200"
      >
        <SlidersHorizontal size={24} weight="thin" />
        <p className="">Filter</p>
      </button>
    </div>
  );
};

export default FilterIcon;
