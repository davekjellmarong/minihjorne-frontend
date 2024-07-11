import { Defect as DefectType } from "@/utils/types";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";

interface DefectProps {
  defects: DefectType[];
  formik: any;
  onChangeFunc?: () => void;
  initialId?: number;
}
const Defect = ({ defects, formik, onChangeFunc, initialId }: DefectProps) => {
  return (
    <FormFieldContainer header="Avvik" optional={true}>
      {defects.map((defect) => {
        return (
          <div key={defect.id} className="flex w-20 flex-col items-center">
            <label className="text-sm font-light">
              {defect.attributes.type}
            </label>
            {/* {iconsList[defect.attributes.icon]} */}
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
            {/* { 

              <input
              type="text"
              name="defectDescription"
              className="w-48"
              placeholder="Beskrivelse"
              onChange={(e) => {
                const defectDescription = e.target.value;
                formik.setFieldValue("defectDescription", defectDescription);
              }}
              />
            } */}
          </div>
        );
      })}
    </FormFieldContainer>
  );
};

export default Defect;
