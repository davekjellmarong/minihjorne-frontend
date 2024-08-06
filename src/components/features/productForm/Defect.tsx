import { Defect as DefectType } from "@/utils/types";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";
import NextSlideButton from "./NextSlideButton";

interface DefectProps {
  defects: DefectType[];
  formik: any;
  onChangeFunc?: () => void;
  initialId?: number;
  header?: string;
}
const Defect = ({
  defects,
  formik,
  onChangeFunc,
  initialId,
  header = "Avvik",
}: DefectProps) => {
  return (
    <>
      <FormFieldContainer optional header={header}>
        {defects.map((defect) => {
          return (
            <div key={defect.id} className="flex w-20 flex-col items-center">
              <label className="text-sm font-light">
                {defect.attributes.type}
              </label>
              <input
                type="radio"
                name="defect"
                className="h-8 w-8 rounded"
                value={defect.id}
                defaultChecked={defect.id === initialId}
                onChange={(e) => {
                  const defectId = e.target.value;

                  // Set both color ID and color name to Formik values
                  formik.setFieldValue("defects", defectId);
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

export default Defect;
