import React from "react";

const Select = ({ values, selected }: any) => {
  console.log({ selected });
  console.log({ values });
  if (!values) return null;
  return (
    <div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="countries"
        defaultValue={selected.attributes.number}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
