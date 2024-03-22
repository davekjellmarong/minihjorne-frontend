import InputHeader from "@/components/atoms/InputHeader";
import { Size } from "@/utils/types";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";

interface SizeProps {
  sizes: Size[];
  formik: any;
  onChangeFunc?: () => void;
  initialId?: number;
}
const Size = ({ sizes, formik, onChangeFunc, initialId }: SizeProps) => {
  return (
    <FormFieldContainer header="Størrelse">
      {sizes.map((size) => {
        return (
          <div key={size.id} className="flex w-20 flex-col items-center">
            <label className="text-sm font-light">
              {size.attributes.number}
            </label>
            {/* {iconsList[size.attributes.icon]} */}
            <input
              type="radio"
              name="size"
              className="h-8 w-8"
              value={size.id}
              defaultChecked={size.id === initialId}
              onChange={(e) => {
                const sizeId = e.target.value;
                const sizeName = size.attributes.number;

                // Set both color ID and color name to Formik values
                formik.setFieldValue("size", sizeId);
                formik.setFieldValue(`sizeName`, sizeName);
                if (onChangeFunc) {
                  onChangeFunc();
                }
              }}
            />
          </div>
        );
      })}
    </FormFieldContainer>
  );
};

export default Size;
