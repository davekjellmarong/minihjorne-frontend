import { GenderFemale, GenderMale, GenderNeuter } from "@phosphor-icons/react";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";
interface SexProps {
  formik: any;
  onChangeFunc?: () => void;
  initialId?: number;
}
const Sex = ({ formik, onChangeFunc, initialId }: SexProps) => {
  //  TO-DO - Fetch sexes from API
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
    <FormFieldContainer header="Kjønn">
      {sexes.map((sex) => {
        return (
          <div key={sex.id} className="flex w-20 flex-col items-center">
            <label className="text-sm font-light">{sex.title}</label>
            {sex.icon}
            <input
              type="radio"
              name="sex"
              className="h-8 w-8 rounded"
              value={sex.id}
              defaultChecked={sex.id === initialId}
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
    </FormFieldContainer>
  );
};

export default Sex;
