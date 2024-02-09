"use client";
import { CaretDown, CaretRight, CaretUp } from "@phosphor-icons/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";
interface FilterProps {
  data: any;
  property: string;
  label: string;
  setFilter: any;
  filter: any;
  queryTemplate: string;
  setCheckboxStates: any;
  checkboxStates: any;
  filterData: any;
  setFilterData: any;
  setSelectedFilters: any;
  selectedFilters: any;
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
  filterData,
  setFilterData,
  setSelectedFilters,
  selectedFilters,
}: FilterProps) => {
  // When inside this component, use the Label to check if there are any searchParams for this Label. If there are, loop through thoose and set the checkboxStates to true for each of them. and also set the setFilter data as well

  const FilterRef = useRef<HTMLUListElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleFilterData = (item: any) => {
    if (filterData?.[label]?.[item.id]) {
      delete filterData[label][item.id];
    } else {
      setFilterData({
        ...filterData,
        [label]: {
          ...filterData[label],
          [item.id]: item,
        },
      });
    }
  };

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    const path = current
      .toString()
      .split("&")
      .map((item) => decodeURIComponent(item));
    const filterValues = path.filter((item) => item.includes(label));
    const localSelectedFilters = filterValues.map((item) => item.split("=")[0]);
    const filtersObject = [...localSelectedFilters].reduce(
      (obj: any, filter) => {
        obj[filter] = true;
        return obj;
      },
      {}
    );
    console.log();
    setSelectedFilters((prevSelectedFilters: any) => [
      ...prevSelectedFilters,
      ...localSelectedFilters,
    ]);
    setCheckboxStates((prevCheckboxStates: any) => ({
      ...prevCheckboxStates,
      ...filtersObject,
    }));
    console.log({ checkboxStates });
    console.log({ selectedFilters });
  }, []);

  const handleCheckboxChange = (item: any) => {
    const isChecked = !checkboxStates[item.attributes[property]];
    setCheckboxStates((prevStates: any) => ({
      ...prevStates,
      [item.attributes[property]]: isChecked,
    }));
    const currentQueryTemplate = queryTemplate + item.id;

    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    const value = searchParams.get(item.attributes[property]);

    if (value) {
      current.delete(item.attributes[property]);
    } else {
      current.set(item.attributes[property], label);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    // router.push(`${pathname}${query}`);
    history.pushState(history.state, "", `${pathname}${query}`);

    // history.replaceState(null, "", `${pathname}${query}`);

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
      <div className="">
        <div
          onClick={() => {
            if (FilterRef.current) {
              FilterRef.current.classList.toggle("hidden");
              setOpen(!open);
            }
          }}
          className="flex justify-between w-full ml-0 p-6 hover:bg-gray-200 border-b border-b-gray-300"
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
                className="flex gap-4 px-6 my-2"
              >
                <input
                  id={item.attributes[property]}
                  type="checkbox"
                  // onChange={() => handleFilterData(item)}
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
