import InputHeader from "@/components/header/InputHeader";
import { GenderFemale, GenderMale, GenderNeuter } from "@phosphor-icons/react";
import React from "react";
interface SexProps {
  formik: any;
  onChangeFunc?: () => void;
}
const Sex = ({ formik, onChangeFunc }: SexProps) => {
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
    <div>
      <InputHeader>Kjønn</InputHeader>
      <div className="flex justify-start gap-4">
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
                // onChange={formik.handleChange}
                onChange={(e) => {
                  const sexId = e.target.value;
                  const sexName = sex.title;

                  // Set both color ID and color name to Formik values
                  formik.setFieldValue("sex", sexId);
                  formik.setFieldValue(`sexName`, sexName);
                  if (onChangeFunc) {
                    onChangeFunc();
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sex;
