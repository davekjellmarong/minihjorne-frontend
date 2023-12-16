import { ColorsRQ, SizesRQ, TagsRQ } from "@/utils/types";
import { fetchColors, fetchSizes, fetchTags } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { CaretDown, CaretRight } from "@phosphor-icons/react";
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
  return (
    <div>
      <p
        className="w-72 font-semibold p-4 hover:bg-gray-200"
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
            <li key={item.id} className="flex gap-4 flex-wrap my-2">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    const currentQueryTemplate =
                      queryTemplate + item.attributes[property];
                    console.log({ filter });
                    setFilter([
                      ...filter,
                      {
                        query: currentQueryTemplate,
                        key: item.attributes[property],
                      },
                    ]);
                  } else if (!e.target.checked) {
                    const removedQuery = filter.filter(
                      (query: any) => query.key != item.attributes[property]
                    );
                    setFilter(removedQuery);
                    console.log(removedQuery);
                  }
                }}
                className="h-6 w-6 cursor-pointer"
              />
              <label className="text-sm">{item.attributes[property]}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
