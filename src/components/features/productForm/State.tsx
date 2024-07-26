import React from "react";
import FormFieldContainer from "./FormFieldContainer";
import Tilstand from "../minSide/lastOpp/Tips/Tilstand";

interface SexProps {
  formik: any;
  onChangeFunc?: () => void;
  initialId?: number;
}
export const State = ({ formik, onChangeFunc, initialId }: SexProps) => {
  //  TO-DO - Fetch states from API
  const states = [
    {
      title: "Ny/ubrukt",
      id: 1,
    },
    {
      title: "Pent brukt",
      id: 2,
    },
    {
      title: "Godt brukt",
      id: 3,
    },
    {
      title: "Brukt",
      id: 4,
    },
  ];
  return (
    <FormFieldContainer header="Tilstand">
      {states.map((state) => {
        return (
          <div
            key={state.id}
            className="flex w-20 flex-col items-center overflow-visible"
          >
            <label className="text-sm font-light">{state.title}</label>
            <input
              type="radio"
              name="state"
              className="h-8 w-8 rounded"
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
