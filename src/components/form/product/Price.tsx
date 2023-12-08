import React from "react";

interface SexProps {
  formik: any;
}
const Price = ({ formik }: SexProps) => {
  return (
    <div className="flex">
      <label
        htmlFor="price"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Pris
      </label>
      <input
        type="text"
        id="price"
        name="price"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder=""
        required
        value={formik.values.pris}
        onChange={formik.handleChange}
      />
    </div>
  );
};

export default Price;
