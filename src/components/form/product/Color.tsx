"use client";
import { tailwindColorsObject } from "@/utils/constants";
import { Color } from "@/utils/types";
import React from "react";

interface ColorProps {
  colors: Color[];
  formik: any;
  formName?: string;
}

const Color = ({ colors, formik, formName = "colors" }: ColorProps) => {
  return (
    <div className="flex flex-wrap justify-start gap-4">
      {colors.map((color) => {
        const tailwindColor = tailwindColorsObject[color.attributes.tailwind];
        return (
          <div key={color.id} className="w-20 flex flex-col">
            <label className={`font-light text-sm`}>
              {color.attributes.name}
            </label>
            <input
              className={`w-8 h-8 rounded ${tailwindColor}  checked:outline checked:outline-4 checked:outline-green-500  focus:ring-1 focus:ring-emerald-400`}
              type="radio"
              name={formName}
              id={formName}
              value={color.id}
              onChange={(e) => {
                const colorId = e.target.value;
                const colorName = color.attributes.tailwind;

                // Set both color ID and color name to Formik values
                formik.setFieldValue(`${formName}`, colorId);
                formik.setFieldValue(`${formName}Name`, colorName);
                formik.setFieldValue(
                  `${formName}NorwegianName`,
                  color.attributes.name
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Color;
