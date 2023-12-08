import React from "react";

interface ColorProps {
  formik: any;
}
const Brand = ({ formik }: ColorProps) => {
  return (
    <div className="flex">
      <label
        htmlFor="brand"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Merke
      </label>
      <input
        type="brand"
        id="brand"
        name="brand"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder=""
        required
        value={formik.values.brand}
        onChange={formik.handleChange}
      />
    </div>
  );
};

export default Brand;
