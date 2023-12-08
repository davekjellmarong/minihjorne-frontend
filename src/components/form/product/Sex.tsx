import { GenderFemale, GenderMale, GenderNeuter } from "@phosphor-icons/react";
import React from "react";
interface SexProps {
  formik: any;
}
const Sex = ({ formik }: SexProps) => {
  const sexes = [
    {
      id: 1,
      title: "Gutt",
      icon: <GenderMale color="blue" size={28} />,
    },
    {
      id: 2,
      title: "Jente",
      icon: <GenderFemale color="red" size={28} />,
    },
    {
      id: 3,
      title: "Unisex",
      icon: <GenderNeuter size={28} />,
    },
  ];
  return (
    <div className="flex justify-center gap-4">
      {sexes.map((sex) => {
        return (
          <div key={sex.id} className="flex flex-col w-20">
            <label className="font-light text-sm">{sex.title}</label>
            {sex.icon}
            <input
              type="radio"
              name="sex"
              className="h-8 w-8"
              value={sex.id}
              onChange={formik.handleChange}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Sex;
