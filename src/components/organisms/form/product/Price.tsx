import InputHeader from "@/components/atoms/InputHeader";
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
      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-4 ">
        <input
          type="number"
          id="price"
          name="price"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500  focus:ring-blue-500 "
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
              className="w-20 rounded border-2 border-gray-200 px-4 py-2 font-light text-gray-700 sm:hover:bg-gray-400"
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
