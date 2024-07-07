import InputHeader from "@/components/atoms/InputHeader";
import React from "react";
import FormFieldContainer from "./FormFieldContainer";

interface ColorProps {
  formik: any;
  nextSlide?: () => void;
}
const Brand = ({ formik, nextSlide }: ColorProps) => {
  const brands = [
    "Cubus",
    "Gullkorn",
    "H&M",
    "Hust & Claire",
    "Joha",
    "KappAhl",
    "Lindex",
    "NameIt",
    "Newbe",
    "Reflex",
    "Zara",
  ];
  return (
    <FormFieldContainer header="Klesmerke">
      <div className="mt-2 flex flex-wrap gap-2">
        <input
          type="brand"
          id="brand"
          name="brand"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
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
                if (nextSlide) {
                  nextSlide();
                }
              }}
              className="rounded border-2 border-gray-200 px-4 py-2 font-light text-gray-700 sm:hover:bg-gray-400"
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
