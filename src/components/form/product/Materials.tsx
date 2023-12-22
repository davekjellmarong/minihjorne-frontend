"use client";
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
    <div className="flex gap-4 flex-wrap">
      {materials.map((material) => {
        return (
          <div key={material.id} className="w-20 flex flex-col">
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
                formik.setFieldValue("materials", materialId);
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
  );
};

export default Materials;
