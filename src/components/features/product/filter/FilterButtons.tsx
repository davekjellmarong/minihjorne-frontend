"use client";
import { useRouter } from "next/navigation";
import React from "react";
interface FilterButtonsProps {
  setOpen: (open: boolean) => void;
  products: any;
}
const FilterButtons = ({ setOpen, products }: FilterButtonsProps) => {
  const router = useRouter();
  return (
    <div className="sticky bottom-0 flex justify-between  bg-gray-100 px-6 shadow-inner">
      <button
        className=" my-4 flex items-center rounded-md border-2 border-red-300 p-2 px-4  sm:hover:bg-gray-700"
        onClick={() => {
          const newUrl = window.location.pathname;
          router.push(newUrl);
        }}
      >
        Tøm alle filtre
      </button>
      <button
        className="sticky top-0 m-4 block rounded-md bg-gray-500 p-2 px-4 text-white sm:hover:bg-gray-700"
        onClick={() => {
          setOpen(false);
        }}
      >
        Se {products.data?.length === 20 ? "20+" : products.data?.length}{" "}
        produkter
      </button>
    </div>
  );
};

export default FilterButtons;
