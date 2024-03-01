import InputHeader from "@/components/header/InputHeader";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";

interface SexProps {
  formik: any;
  onChangeFunc?: () => void;
  initialId?: number;
}
export const State = ({ formik, onChangeFunc, initialId }: SexProps) => {
  const states = [
    {
      title: "Ny",
      id: 1,
    },
    {
      title: "Lite brukt",
      id: 2,
    },
    {
      title: "Godt brukt",
      id: 3,
    },
  ];
  return (
    <FormFieldContainer header="Tilstand">
      {states.map((state) => {
        return (
          <div
            key={state.id}
            className="flex flex-col items-center w-20 overflow-visible"
          >
            <label className="font-light text-sm">{state.title}</label>
            <input
              type="radio"
              name="state"
              className="h-8 w-8"
              value={state.id}
              defaultChecked={state.id === initialId}
              onChange={(e) => {
                const stateId = e.target.value;
                const stateName = state.title;

                // Set both color ID and color name to Formik values
                formik.setFieldValue("state", stateId);
                formik.setFieldValue(`stateName`, stateName);
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
