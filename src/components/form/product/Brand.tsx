import InputHeader from "@/components/header/InputHeader";
import React from "react";

interface ColorProps {
  formik: any;
}
const Brand = ({ formik }: ColorProps) => {
  return (
    <div className="flex flex-wrap px-10">
      <div className="w-full ">
        <InputHeader center>Klesmerke</InputHeader>

        <input
          type="brand"
          id="brand"
          name="brand"
          className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
          placeholder=""
          required
          value={formik.values.brand}
          onChange={formik.handleChange}
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <button
          type="button"
          onClick={() => {
            formik.setFieldValue("brand", "Lille lam");
          }}
          className="border-2 border-gray-200 hover:bg-gray-400 text-gray-700 font-light py-2 px-4 rounded"
        >
          Lille lam
        </button>
        <button
          type="button"
          onClick={() => {
            formik.setFieldValue("brand", "H&M");
          }}
          className="border-2 border-gray-200 hover:bg-gray-400 text-gray-700 font-light py-2 px-4 rounded"
        >
          H&M
        </button>
        <button
          type="button"
          onClick={() => {
            formik.setFieldValue("brand", "Cubus");
          }}
          className="border-2 border-gray-200 hover:bg-gray-400 text-gray-700 font-light py-2 px-4 rounded"
        >
          Cubus
        </button>
        <button
          type="button"
          onClick={() => {
            formik.setFieldValue("brand", "Babyshop");
          }}
          className="border-2 border-gray-200 hover:bg-gray-400 text-gray-700 font-light py-2 px-4 rounded"
        >
          Babyshop
        </button>
        <button
          type="button"
          onClick={() => {
            formik.setFieldValue("brand", "Vet ikke");
          }}
          className="border-2 border-gray-200 hover:bg-gray-400 text-gray-700 font-light py-2 px-4 rounded"
        >
          Vet ikke
        </button>
      </div>
    </div>
  );
};

export default Brand;
