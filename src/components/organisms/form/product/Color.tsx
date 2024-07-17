"use client";
import { tailwindColorsObject } from "@/utils/constants";
import { Color as ColorType } from "@/utils/types";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";

interface ColorProps {
  colors: ColorType[];
  formik: any;
  formName?: string;
  onChangeFunc?: () => void;
  initialId?: number;
  width?: string;
  padding?: boolean;
}

const Color = ({
  colors,
  formik,
  formName = "colors",
  onChangeFunc,
  initialId,
  padding = true,
}: ColorProps) => {
  return (
    <FormFieldContainer header="Farge" padding={padding}>
      {colors.map((color) => {
        const tailwindColor = tailwindColorsObject[color.attributes.tailwind];
        return (
          <div key={color.id} className={`flex w-12 flex-col items-center`}>
            <label className={`text-sm font-light`}>
              {color.attributes.name}
            </label>
            <input
              className={`h-8 w-8 rounded ${tailwindColor} checked:outline checked:outline-4 checked:outline-green-500 focus:ring-1 focus:ring-emerald-400`}
              type="radio"
              name={formName}
              id={formName}
              title="Velg farge"
              defaultChecked={color.id === initialId}
              value={color.id}
              onChange={(e) => {
                const colorId = e.target.value;
                const colorName = color.attributes.tailwind;

                // Set both color ID and color name to Formik values
                formik.setFieldValue(`${formName}`, colorId);
                formik.setFieldValue(`${formName}Name`, colorName);
                formik.setFieldValue(
                  `${formName}NorwegianName`,
                  color.attributes.name,
                );
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

export default Color;
