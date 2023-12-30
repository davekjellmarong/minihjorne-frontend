import { ColorsRQ, SizesRQ, TagsRQ } from "@/utils/types";
import { fetchColors, fetchSizes, fetchTags } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { CaretDown, CaretRight } from "@phosphor-icons/react";
import { SelectedFilter } from "./page";
interface FilterProps {
  data: any;
  property: string;
  label: string;
  setFilter: any;
  filter: any;
  queryTemplate: string;
}
const Filter = ({
  data,
  property,
  label,
  setFilter,
  filter,
  queryTemplate,
}: FilterProps) => {
  const FilterRef = useRef<HTMLUListElement | null>(null);
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
                  onChange={(e) => {
                    if (e.target.checked) {
                      const currentQueryTemplate = queryTemplate + item.id;
                      console.log({ filter });
                      setFilter([
                        ...filter,
                        {
                          query: currentQueryTemplate,
                          key: item.id,
                          name: item.attributes[property],
                        },
                      ]);
                    } else if (!e.target.checked) {
                      const removedQuery = filter.filter(
                        (query: any) => query.key != item.id
                      );

                      setFilter(removedQuery);
                      console.log(removedQuery);
                    }
                  }}
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
