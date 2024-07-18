import { Size as SizeType } from "@/utils/types";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";
import Størrelse from "../minSide/lastOpp/Tips/Størrelse";

interface SizeProps {
  sizes: SizeType[];
  formik: any;
  onChangeFunc?: () => void;
  initialId?: number;
}
const Size = ({ sizes, formik, onChangeFunc, initialId }: SizeProps) => {
  return (
    <FormFieldContainer header="Størrelse" Tips={Størrelse}>
      {sizes.map((size) => {
        return (
          <div key={size.id} className="flex w-14 flex-col items-center">
            <label className="text-sm font-light">
              {size.attributes.number}
            </label>
            <input
              type="radio"
              name="size"
              className="h-8 w-8 rounded"
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
