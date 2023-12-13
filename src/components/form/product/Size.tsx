import { Size } from "@/utils/types";
import React from "react";

interface SizeProps {
  sizes: Size[];
  formik: any;
}
const Size = ({ sizes, formik }: SizeProps) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {sizes.map((size) => {
        return (
          <div key={size.id} className="flex flex-col items-start w-20">
            <label className="font-light text-sm">
              {size.attributes.number}
            </label>
            {/* {iconsList[category.attributes.icon]} */}
            <input
              type="radio"
              name="size"
              className="h-8 w-8"
              value={size.id}
              onChange={formik.handleChange}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Size;
