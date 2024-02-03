import InputHeader from "@/components/header/InputHeader";
import { Size } from "@/utils/types";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";

interface SizeProps {
  sizes: Size[];
  formik: any;
}
const Size = ({ sizes, formik }: SizeProps) => {
  return (
    <FormFieldContainer header="Størrelse">
      {sizes.map((size) => {
        return (
          <div key={size.id} className="flex flex-col items-center w-20">
            <label className="font-light text-sm">
              {size.attributes.number}
            </label>
            {/* {iconsList[size.attributes.icon]} */}
            <input
              type="radio"
              name="size"
              className="h-8 w-8"
              value={size.id}
              onChange={(e) => {
                const sizeId = e.target.value;
                const sizeName = size.attributes.number;

                // Set both color ID and color name to Formik values
                formik.setFieldValue("size", sizeId);
                formik.setFieldValue(`sizeName`, sizeName);
              }}
            />
          </div>
        );
      })}
    </FormFieldContainer>
  );
};

export default Size;
