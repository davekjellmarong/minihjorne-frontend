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
}: FilterProps) => {
  // When inside this component, use the Label to check if there are any searchParams for this Label. If there are, loop through thoose and set the checkboxStates to true for each of them. and also set the setFilter data as well
  console.log(label);
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

  const handleCheckboxChange = (item: any) => {
    handleFilterData(item);
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

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);

    // const searchParams = new URLSearchParams(window.location.search);
    // console.log(searchParams);
    // console.log(param);
    // if (param) {
    //   searchParams.delete(item.attributes[property]);
    // } else {
    //   router.push(window.location.pathname + "?" + searchParams.toString());

    //   searchParams.append(item.attributes[property], item.id);
    // }
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
                  // onChange={() => handleFilterData(item)}
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

// const handleCheckboxChange = (item: any) => {
//   handleFilterData(item);
//   const isChecked = !checkboxStates[item.attributes[property]];
//   setCheckboxStates((prevStates: any) => ({
//     ...prevStates,
//     [item.attributes[property]]: isChecked,
//   }));

//   const currentQueryTemplate = queryTemplate + item.id;

//   if (isChecked) {
//     // setLocalCheckedItems((prevState: number[]) => [...prevState, item.id]);
//     setFilter((prevFilter: any) => [
//       ...prevFilter,
//       {
//         query: currentQueryTemplate,
//         key: item.id,
//         name: item.attributes[property],
//       },
//     ]);
//   } else {
//     // setLocalCheckedItems((prevState: number[]) =>
//     //   prevState.filter((id: number) => id !== item.id)
//     // );
//     const removedQuery = filter.filter((query: any) => query.key !== item.id);
//     setFilter(removedQuery);
//   }
// };
