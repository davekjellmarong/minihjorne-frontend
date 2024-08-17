"use client";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";
import NextSlideButton from "./NextSlideButton";
import { useSuspenseQuery } from "@tanstack/react-query";
import { FilterQueries } from "@/queryFactory/Filter";

interface ColorProps {
  formik: any;
  onChangeFunc?: () => void;
  initialId?: number | null;
  header?: string;
}
const Materials = ({
  formik,
  onChangeFunc,
  initialId,
  header = "Tekstil",
}: ColorProps) => {
  const { data: materials } = useSuspenseQuery(FilterQueries.materials());

  return (
    <>
      <FormFieldContainer optional header={header}>
        {materials.map((material) => {
          return (
            <div key={material.id} className="flex w-20 flex-col items-center">
              <label className={`text-sm font-light`}>
                {material.attributes.name}
              </label>
              <input
                className="h-8 w-8 rounded"
                type="radio"
                name="materials"
                id="materials"
                value={material.id}
                defaultChecked={material.id === initialId}
                // onChange={formik.handleChange}
                onChange={(e) => {
                  const materialId = e.target.value;
                  const materialName = material.attributes.name;

                  // Set both color ID and color name to Formik values
                  formik.setFieldValue("material", materialId);
                  formik.setFieldValue(`materialName`, materialName);
                  if (onChangeFunc) {
                    onChangeFunc();
                  }
                }}
              />
            </div>
          );
        })}
      </FormFieldContainer>
      <NextSlideButton onChangeFunc={onChangeFunc} />
    </>
  );
};

export default Materials;
