"use client";
import InputHeader from "@/components/header/InputHeader";
import { tailwindColorsObject } from "@/utils/constants";
import { Color, Material } from "@/utils/types";
import React from "react";

interface ColorProps {
  materials: Material[];
  formik: any;
  onChangeFunc?: () => void;
}
const Materials = ({ materials, formik, onChangeFunc }: ColorProps) => {
  return (
    <div>
      <InputHeader center>Stoff</InputHeader>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4">
        {materials.map((material) => {
          return (
            <div key={material.id} className="w-20 flex flex-col items-center">
              <label className={`font-light text-sm`}>
                {material.attributes.name}
              </label>
              <input
                className={`w-8 h-8`}
                type="radio"
                name="materials"
                id="materials"
                value={material.id}
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
      </div>
    </div>
  );
};

export default Materials;
