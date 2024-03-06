import React from "react";

const Select = ({ values, selected }: any) => {
  if (!values) return null;
  return (
    <div>
      <label
        htmlFor="countries"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="countries"
        defaultValue={selected.attributes.number}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        {values.map((value: any) => (
          <option
            key={value.id}
            value={value.id}
            selected={value.id === selected.id}
          >
            {value.attributes.number}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
