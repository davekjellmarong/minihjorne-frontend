import React from "react";
import { XCircle } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { removeQueryParam } from "@/utils/QueryParamUtils";
interface FilterChipsInnerProps {
  checkboxStates: any;
  queryParams: any;
  filter: string;
  property: string;
  queryTemplate: string;
}
const FilterChipsInner = ({
  checkboxStates,
  queryParams,
  filter,
  property,
  queryTemplate,
}: FilterChipsInnerProps) => {
  const router = useRouter();

  // Filter out checked items
  const checkedKeys = Object.keys(checkboxStates).filter(
    (key) => checkboxStates[key],
  );

  // Handler for removing filters
  const handleRemoveFilter = (key: string) => {
    const filterId = queryParams[filter].find(
      (item: any) => item.attributes[property] === key,
    )?.id;
    removeQueryParam(router, queryTemplate, filterId);
  };

  return (
    <div className="max-w-40">
      {checkedKeys.length > 0 && (
        <div className="flex justify-end gap-2">
          {checkedKeys.length > 2 ? (
            <button
              className="flex h-8 items-center rounded border border-gray-200 p-1 text-xs font-light"
              // onClick={() => handleRemoveFilter(checkedKeys[0])}
            >
              <span className="mr-1">{checkedKeys.length} stk valgt</span>
              <span></span>
            </button>
          ) : (
            checkedKeys.map((key) => (
              <button
                key={key}
                className="flex h-8 items-center rounded border border-gray-200 p-1 text-xs font-light"
                onClick={() => handleRemoveFilter(key)}
              >
                <XCircle size={16} color="gray" />
                <span className="ml-1">{key}</span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default FilterChipsInner;
