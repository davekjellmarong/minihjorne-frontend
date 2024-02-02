import InputHeader from "@/components/header/InputHeader";
import React from "react";

interface SexProps {
  formik: any;
}
const Price = ({ formik }: SexProps) => {
  return (
    <div className="flex flex-wrap px-10 ">
      <div className="w-full ">
        <InputHeader>Pris</InputHeader>
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
      </div>
      <div className="flex flex-wrap gap-2 mt-2 ">
        <button
          type="button"
          onClick={() => {
            formik.setFieldValue("price", "99");
          }}
          className="border-2 border-gray-200 hover:bg-gray-400 text-gray-700 font-light py-2 px-4 rounded"
        >
          99kr
        </button>
        <button
          type="button"
          onClick={() => {
            formik.setFieldValue("price", "125");
          }}
          className="border-2 border-gray-200 hover:bg-gray-400 text-gray-700 font-light py-2 px-4 rounded"
        >
          125kr
        </button>
        <button
          type="button"
          onClick={() => {
            formik.setFieldValue("price", "175");
          }}
          className="border-2 border-gray-200 hover:bg-gray-400 text-gray-700 font-light py-2 px-4 rounded"
        >
          175kr
        </button>
        <button
          type="button"
          onClick={() => {
            formik.setFieldValue("price", "225");
          }}
          className="border-2 border-gray-200 hover:bg-gray-400 text-gray-700 font-light py-2 px-4 rounded"
        >
          225kr
        </button>
        <button
          type="button"
          onClick={() => {
            formik.setFieldValue("price", "275");
          }}
          className="border-2 border-gray-200 hover:bg-gray-400 text-gray-700 font-light py-2 px-4 rounded"
        >
          275kr
        </button>
      </div>
    </div>
  );
};

export default Price;
