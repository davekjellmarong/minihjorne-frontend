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
      price: 50,
      id: 0,
    },
    {
      title: "99kr",
      price: 99,
      id: 1,
    },
    {
      title: "125kr",
      price: 125,
      id: 2,
    },
    {
      title: "150kr",
      price: 150,
      id: 3,
    },
    {
      title: "175kr",
      price: 175,
      id: 4,
    },
    {
      title: "225kr",
      price: 225,
      id: 5,
    },
    {
      title: "250kr",
      price: 250,
      id: 6,
    },
    {
      title: "275kr",
      price: 275,
      id: 7,
    },
  ];
  return (
    <FormFieldContainer header="Pris">
      <div className="flex flex-wrap gap-y-4 gap-x-6 mt-2 ">
        <input
          type="number"
          id="price"
          name="price"
          className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
          placeholder=""
          required
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        {priceArray.map((item) => {
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                formik.setFieldValue("price", item.price);
              }}
              className="border-2 w-20 border-gray-200 hover:bg-gray-400 text-gray-700 font-light py-2 px-4 rounded"
            >
              {item.title}
            </button>
          );
        })}
      </div>
    </FormFieldContainer>
  );
};

export default Price;
