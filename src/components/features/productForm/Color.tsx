"use client";
import { tailwindColorsObject } from "@/utils/constants";
import { Color as ColorType } from "@/utils/types";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";
import Button from "@/components/common/buttons/Button";
import NextSlideButton from "./NextSlideButton";
import { useSuspenseQuery } from "@tanstack/react-query";
import { FilterQueries } from "@/queryFactory/Filter";

interface ColorProps {
  formik: any;
  formName?: string;
  onChangeFunc?: () => void;
  initialId?: number;
  width?: string;
  padding?: boolean;
  header?: string;
}

const Color = ({
  formik,
  formName = "colors",
  onChangeFunc,
  initialId,
  padding = true,
  header = "Farge",
}: ColorProps) => {
  const { data: colors } = useSuspenseQuery(FilterQueries.colors());

  return (
    <>
      <FormFieldContainer header={header} padding={padding}>
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
      {formName === "color2" && <NextSlideButton onChangeFunc={onChangeFunc} />}
    </>
  );
};

export default Color;
