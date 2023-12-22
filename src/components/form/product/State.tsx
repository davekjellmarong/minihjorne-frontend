import React from "react";

interface SexProps {
  formik: any;
}
export const State = ({ formik }: SexProps) => {
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
    <div className="flex justify-start gap-4">
      {states.map((state) => {
        return (
          <div key={state.id} className="flex flex-col w-20 overflow-visible">
            <label className="font-light text-sm">{state.title}</label>
            <input
              type="radio"
              name="state"
              className="h-8 w-8"
              value={state.id}
              onChange={formik.handleChange}
            />
          </div>
        );
      })}
    </div>
  );
};
