"use client";
import { ProductsPagination } from "@/utils/types";
import { X } from "@phosphor-icons/react";
import React from "react";
interface FilterHeaderProps {
  setOpen: (open: boolean) => void;
  products: ProductsPagination;
}
const FilterHeader = ({ setOpen, products }: FilterHeaderProps) => {
  return (
    <div className="flex justify-between border-b border-b-gray-300 px-6  py-6">
      <p className="text-lg font-bold ">Filtrer</p>
      <p>
        {products.data?.length === 20 ? "20+" : products.data?.length} produkter
      </p>
      <div
        onClick={() => {
          setOpen(false);
        }}
        className="cursor-pointer"
      >
        <X size={28} />
      </div>
    </div>
  );
};

export default FilterHeader;
