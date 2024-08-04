"use client";
import { addQueryParam, removeQueryParam } from "@/utils/QueryParamUtils";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

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
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({});
  const FilterRef = useRef<HTMLUListElement | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Sync checkbox states with URL query parameters
  useEffect(() => {
    const localFilters = queryParams[filter];
    const filtersObject = localFilters?.reduce((prev: any, curr: any) => {
      const value = curr.attributes[property];
      prev[value] = true;
      return prev;
    }, {});
    setCheckboxStates(filtersObject);
  }, [data, queryParams, filter, property]);

  const handleCheckboxChange = (item: any) => {
    const isChecked = !checkboxStates[item.attributes[property]];
    setCheckboxStates((prevStates: any) => ({
      ...prevStates,
      [item.attributes[property]]: isChecked,
    }));
    if (isChecked) {
      addQueryParam(router, queryTemplate, item.id);
    } else {
      removeQueryParam(router, queryTemplate, item.id);
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
          <p className=" font-light">{label}&nbsp;</p>
          <span className={`${open ? "" : "hidden"}`}>
            <CaretUp size={32} weight="thin" />
          </span>
          <span className={`${open ? "hidden" : ""}`}>
            <CaretDown size={32} weight="thin" />
          </span>
        </div>
        <ul ref={FilterRef} className="hidden">
          {data.map((item: any) => {
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
