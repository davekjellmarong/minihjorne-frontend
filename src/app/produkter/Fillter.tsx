import React, { useRef, useState } from "react";
interface FilterProps {
  data: any;
  property: string;
  label: string;
  setFilter: any;
  filter: any;
  queryTemplate: string;
  setCheckboxStates: any;
  checkboxStates: any;
}
const Filter = ({
  data,
  property,
  label,
  setFilter,
  filter,
  queryTemplate,
  setCheckboxStates,
  checkboxStates,
}: FilterProps) => {
  const FilterRef = useRef<HTMLUListElement | null>(null);

  const handleCheckboxChange = (item: any) => {
    const isChecked = !checkboxStates[item.attributes[property]];
    setCheckboxStates((prevStates: any) => ({
      ...prevStates,
      [item.attributes[property]]: isChecked,
    }));

    const currentQueryTemplate = queryTemplate + item.id;

    if (isChecked) {
      setFilter((prevFilter: any) => [
        ...prevFilter,
        {
          query: currentQueryTemplate,
          key: item.id,
          name: item.attributes[property],
        },
      ]);
    } else {
      const removedQuery = filter.filter((query: any) => query.key !== item.id);
      setFilter(removedQuery);
    }
  };

  if (data)
    return (
      <div className="sm:pl-8">
        <p
          className="w-full sm:w-72 font-semibold text-xs ml-0 p-4 hover:bg-gray-200 border-b-2 border-b-gray-300 sm:border-0 sm:pl-0"
          onClick={() => {
            if (FilterRef.current) {
              FilterRef.current.classList.toggle("hidden");
            }
          }}
        >
          {label}
        </p>
        <ul ref={FilterRef} className="hidden">
          {data.data.map((item: any) => {
            return (
              <li key={item.attributes[property]} className="flex gap-4 my-2">
                <input
                  id={item.attributes[property]}
                  type="checkbox"
                  onChange={() => handleCheckboxChange(item)}
                  checked={checkboxStates[item.attributes[property]] || false}
                  className="size-6 cursor-pointer rounded-sm"
                />
                <label
                  htmlFor={item.attributes[property]}
                  className="text-sm w-full"
                >
                  {item.attributes[property]}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default Filter;
