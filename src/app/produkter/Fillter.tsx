import { CaretDown, CaretRight, CaretUp } from "@phosphor-icons/react";
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
  const [localCheckedItems, setLocalCheckedItems] = useState<any>([]);
  const FilterRef = useRef<HTMLUListElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleCheckboxChange = (item: any) => {
    const isChecked = !checkboxStates[item.attributes[property]];
    setCheckboxStates((prevStates: any) => ({
      ...prevStates,
      [item.attributes[property]]: isChecked,
    }));

    const currentQueryTemplate = queryTemplate + item.id;

    if (isChecked) {
      setLocalCheckedItems((prevState: number[]) => [...prevState, item.id]);
      setFilter((prevFilter: any) => [
        ...prevFilter,
        {
          query: currentQueryTemplate,
          key: item.id,
          name: item.attributes[property],
        },
      ]);
    } else {
      setLocalCheckedItems((prevState: number[]) =>
        prevState.filter((id: number) => id !== item.id)
      );
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
