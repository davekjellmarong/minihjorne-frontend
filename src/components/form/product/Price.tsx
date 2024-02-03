import InputHeader from "@/components/header/InputHeader";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";

interface SexProps {
  formik: any;
}
const Price = ({ formik }: SexProps) => {
  const priceArray = [
    {
      title: "50kr",
      id: 0,
    },
    {
      title: "99kr",
      id: 1,
    },
    {
      title: "125kr",
      id: 2,
    },
    {
      title: "150kr",
      id: 3,
    },
    {
      title: "175kr",
      id: 4,
    },
    {
      title: "225kr",
      id: 5,
    },
    {
      title: "250kr",
      id: 6,
    },
    {
      title: "275kr",
      id: 7,
    },
  ];
  return (
    <FormFieldContainer header="Pris">
      <div className="flex flex-wrap gap-y-4 gap-x-6 mt-2 ">
        <input
          type="text"
          id="price"
          name="price"
          className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
          placeholder=""
          required
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        {priceArray.map((price) => {
          return (
            <button
              key={price.id}
              type="button"
              onClick={() => {
                formik.setFieldValue("price", price.title);
              }}
              className="border-2 w-20 border-gray-200 hover:bg-gray-400 text-gray-700 font-light py-2 px-4 rounded"
            >
              {price.title}
            </button>
          );
        })}
      </div>
    </FormFieldContainer>
  );
};

export default Price;
