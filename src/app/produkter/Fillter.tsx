"use client";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

import React, { useEffect, useRef, useState } from "react";
interface FilterProps {
  data: any;
  property: string;
  label: string;
  filter: string;
  queryTemplate: string;
  queryParams: any;
}
const Filter = ({
  data,
  property,
  label,
  filter,
  queryTemplate,
  queryParams,
}: FilterProps) => {
  // When inside this component, use the Label to check if there are any searchParams for this Label. If there are, loop through thoose and set the checkboxStates to true for each of them. and also set the setFilter data as well
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({});
  const FilterRef = useRef<HTMLUListElement | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const localFilters = queryParams[filter];
    const filtersObject = localFilters?.reduce((prev: any, curr: any) => {
      const value = curr.attributes[property];
      prev[value] = true;
      return prev;
    }, {});
    setCheckboxStates((prevCheckboxStates: any) => ({
      ...prevCheckboxStates,
      ...filtersObject,
    }));
  }, [data]);

  const handleCheckboxChange = (item: any) => {
    const isChecked = !checkboxStates[item.attributes[property]];
    setCheckboxStates((prevStates: any) => ({
      ...prevStates,
      [item.attributes[property]]: isChecked,
    }));

    if (isChecked) {
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.append(queryTemplate.slice(1, -1), item.id);
      const newUrl = window.location.pathname + "?" + queryParams.toString();
      window.history.replaceState(null, "", newUrl);
    } else {
      const queryParams = new URLSearchParams(window.location.search);
      const allQueryParams = queryParams.getAll(queryTemplate.slice(1, -1));
      const newQueryParams = allQueryParams.filter(
        (query: any) => query !== String(item.id),
      );
      queryParams.delete(queryTemplate.slice(1, -1));
      newQueryParams.forEach((param: string) => {
        queryParams.append(queryTemplate.slice(1, -1), param);
      });
      const newUrl = window.location.pathname + "?" + queryParams.toString();
      window.history.replaceState(null, "", newUrl);
    }
  };
  if (data)
    return (
      <div className="">
        <div
          onClick={() => {
            if (FilterRef.current) {
              FilterRef.current.classList.toggle("hidden");
              setOpen(!open);
            }
          }}
          className="ml-0 flex w-full justify-between border-b border-b-gray-300 p-6 sm:hover:bg-gray-200"
        >
          <p className=" font-light">
            {label}&nbsp;
            {/* {localCheckedItems.length > 0 && (
              <span className="rounded-full bg-gray-400 text-white font-semibold py-2 px-3">
                {localCheckedItems.length}
              </span> */}
            {/* )} */}
          </p>

          <span className={`${open ? "" : "hidden"}`}>
            <CaretUp size={32} weight="thin" />
          </span>
          <span className={`${open ? "hidden" : ""}`}>
            <CaretDown size={32} weight="thin" />
          </span>
        </div>
        <ul ref={FilterRef} className="hidden">
          {data.data.map((item: any) => {
            return (
              <li
                key={item.attributes[property]}
                className="my-2 flex gap-4 px-6"
              >
                <input
                  id={item.attributes[property]}
                  type="checkbox"
                  onChange={() => handleCheckboxChange(item)}
                  checked={checkboxStates[item.attributes[property]] || false}
                  className="size-6 cursor-pointer rounded-sm"
                />
                <label
                  htmlFor={item.attributes[property]}
                  className="w-full text-sm"
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
