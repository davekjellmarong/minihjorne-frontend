"use client";
import { addQueryParam, removeQueryParam } from "@/utils/QueryParamUtils";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";
import FilterChipsInner from "./FilterChipsInner";
import { usePostHog } from "posthog-js/react";
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
  const FilterRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const posthog = usePostHog();

  // Sync checkbox states with URL query parameters
  useEffect(() => {
    const localFilters = queryParams[filter];
    const filtersObject = localFilters?.reduce((prev: any, curr: any) => {
      const value = curr.attributes[property];
      prev[value] = true;
      return prev;
    }, {});
    setCheckboxStates(filtersObject);
  }, [queryParams]);

  const handleCheckboxChange = async (item: any) => {
    const isChecked = !checkboxStates[item.attributes[property]];
    setCheckboxStates((prevStates: any) => ({
      ...prevStates,
      [item.attributes[property]]: isChecked,
    }));
    if (isChecked) {
      posthog.capture("filter_applied", {
        filter_type: filter,
        filter_value: item.attributes[property],
        location: "modal_checkbox_filter",
      });
      addQueryParam(router, queryTemplate, item.id);
    } else {
      removeQueryParam(router, queryTemplate, item.id);
    }
  };
  if (data)
    return (
      <div className="">
        <div className="ml-0 flex w-full flex-col justify-between border-b border-b-gray-300 p-6 sm:hover:bg-gray-200">
          <div className="flex justify-between">
            <div className="flex gap-2 ">
              <p className="font-light">{label}&nbsp;</p>
              <FilterChipsInner
                checkboxStates={checkboxStates}
                queryParams={queryParams}
                filter={filter}
                property={property}
                queryTemplate={queryTemplate}
              />
            </div>

            <div
              onClick={() => {
                if (FilterRef.current) {
                  FilterRef.current.classList.toggle("hidden");
                  setOpen(!open);
                }
              }}
            >
              <span className={`${open ? "" : "hidden"}`}>
                <CaretUp size={32} weight="thin" />
              </span>
              <span className={`${open ? "hidden" : ""}`}>
                <CaretDown size={32} weight="thin" />
              </span>
            </div>
          </div>

          <div ref={FilterRef} className="hidden">
            <ul className="grid grid-cols-3 gap-2 py-6">
              {data.map((item: any) => {
                const isChecked =
                  checkboxStates[item.attributes[property]] || false;
                return (
                  <li
                    key={item.attributes[property]}
                    className="my-2 flex w-full items-center"
                  >
                    <label
                      htmlFor={item.attributes[property]}
                      className={`flex h-12 w-full cursor-pointer items-center gap-2 rounded-lg border border-gray-300 p-2 text-center text-sm transition-colors duration-200 ${
                        isChecked
                          ? "bg-blue-400 text-white"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      <input
                        id={item.attributes[property]}
                        type="checkbox"
                        onChange={() => handleCheckboxChange(item)}
                        checked={isChecked}
                        className="hidden"
                      />
                      <span className="flex-1">
                        {item.attributes[property]}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Filter;
