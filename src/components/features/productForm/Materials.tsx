"use client";
import { Material } from "@/utils/types";
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
    <FormFieldContainer optional header="Materiale">
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
  );
};

export default Materials;
