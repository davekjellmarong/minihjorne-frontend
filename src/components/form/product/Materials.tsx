"use client";
import InputHeader from "@/components/header/InputHeader";
import { tailwindColorsObject } from "@/utils/constants";
import { Color, Material } from "@/utils/types";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";

interface ColorProps {
  materials: Material[];
  formik: any;
  onChangeFunc?: () => void;
  initialId?: number;
}
const Materials = ({
  materials,
  formik,
  onChangeFunc,
  initialId,
}: ColorProps) => {
  return (
    <FormFieldContainer header="Materiale">
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
  );
};

export default Materials;
