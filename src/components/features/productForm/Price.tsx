import React from "react";
import FormFieldContainer from "./FormFieldContainer";

interface SexProps {
  formik: any;
  nextSlide?: () => void;
}
const Price = ({ formik, nextSlide }: SexProps) => {
  const priceArray = [
    {
      title: "25kr",
      price: 25,
      id: 13,
    },
    {
      title: "50kr",
      price: 50,
      id: 14,
    },
    {
      title: "75kr",
      price: 75,
      id: 15,
    },
    {
      title: "100kr",
      price: 100,
      id: 16,
    },
    {
      title: "125kr",
      price: 125,
      id: 17,
    },
    {
      title: "150kr",
      price: 150,
      id: 18,
    },
    {
      title: "175kr",
      price: 175,
      id: 19,
    },
    {
      title: "200kr",
      price: 200,
      id: 20,
    },
    {
      title: "225kr",
      price: 225,
      id: 21,
    },
    {
      title: "250kr",
      price: 250,
      id: 22,
    },
    {
      title: "275kr",
      price: 275,
      id: 23,
    },
    {
      title: "300kr",
      price: 300,
      id: 24,
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
                if (nextSlide) {
                  nextSlide();
                }
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
