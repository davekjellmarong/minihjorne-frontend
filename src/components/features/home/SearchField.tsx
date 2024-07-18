import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";

const SearchField = () => {
  return (
    <div>
      <div className="relative"></div>
      <input
        type="text"
        placeholder="Søk"
        className="w-full rounded border border-gray-200 p-2 pl-10"
      />
      <MagnifyingGlass
        size={20}
        className="absolute left-2 top-2 text-gray-400"
      />
    </div>
  );
};

export default SearchField;
