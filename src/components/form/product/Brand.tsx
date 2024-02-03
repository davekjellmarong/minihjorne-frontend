import InputHeader from "@/components/header/InputHeader";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";

interface ColorProps {
  formik: any;
}
const Brand = ({ formik }: ColorProps) => {
  const brands = ["Lille lam", "H&M", "Cubus", "Babyshop", "Vet ikke"];
  return (
    <FormFieldContainer header="Klesmerke">
      <div className="flex flex-wrap gap-2 mt-2">
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
        {brands.map((brand) => {
          return (
            <button
              key={brand}
              type="button"
              onClick={() => {
                formik.setFieldValue("brand", brand);
              }}
              className="border-2 border-gray-200 hover:bg-gray-400 text-gray-700 font-light py-2 px-4 rounded"
            >
              {brand}
            </button>
          );
        })}
      </div>
    </FormFieldContainer>
  );
};

export default Brand;
