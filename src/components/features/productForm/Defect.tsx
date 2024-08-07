import React from "react";
import FormFieldContainer from "./FormFieldContainer";
import NextSlideButton from "./NextSlideButton";
import { useSuspenseQuery } from "@tanstack/react-query";
import { FilterQueries } from "@/queryFactory/Filter";

interface DefectProps {
  formik: any;
  onChangeFunc?: () => void;
  initialId?: number;
  header?: string;
}
const Defect = ({
  formik,
  onChangeFunc,
  initialId,
  header = "Avvik",
}: DefectProps) => {
  const { data: defects } = useSuspenseQuery(FilterQueries.defects());

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
