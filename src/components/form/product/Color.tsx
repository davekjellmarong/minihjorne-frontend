import { Color } from "@/utils/types";
import React from "react";

interface ColorProps {
  colors: Color[];
  formik: any;
}
const Color = ({ colors, formik }: ColorProps) => {
  return (
    <div className="flex gap-4">
      {colors.map((color) => {
        return (
          <div key={color.id} className="w-20 flex flex-col">
            <label className="font-light text-sm">
              {color.attributes.name}
            </label>
            <input
              className={`w-8 h-8 shadow-lg rounded bg-${color.attributes.tailwind} checked:bg-${color.attributes.tailwind} checked:hover:bg-${color.attributes.tailwind} checked:active:bg-${color.attributes.tailwind} checked:focus:bg-${color.attributes.tailwind} focus:bg-${color.attributes.tailwind} checked:outline checked:outline-4 checked:outline-green-500  focus:ring-1 focus:ring-emerald-400`}
              type="radio"
              name="colors"
              id="colors"
              value={color.id}
              onChange={formik.handleChange}
              // checked={formik.values.colorId === color.id}
            />
          </div>
        );
      })}
      {/* <div className="w-20 flex flex-col">
        <label className="font-light text-sm">Rød</label>
        <input
          className="w-8 h-8 shadow-lg rounded bg-red-500 checked:bg-red-500 checked:hover:bg-red-500 checked:active:bg-red-500 checked:focus:bg-red-500 focus:bg-red-500 checked:outline checked:outline-4 checked:outline-green-500  focus:ring-1 focus:ring-emerald-400"
          type="radio"
          name="color"
        />
      </div>
      <div className="w-20 flex flex-col">
        <label className="font-light text-sm">Blå</label>
        <input
          className="w-8 h-8 shadow-lg rounded checked:bg-blue-500 checked:active:bg-blue-500 checked:focus:bg-blue-500 bg-blue-500 checked:outline checked:outline-4 checked:outline-green-500"
          type="radio"
          name="color"
        />
      </div>
      <div className="w-20 flex flex-col">
        <label className="font-light text-sm">Grønn</label>
        <input
          className="w-8 h-8 shadow-lg rounded checked:bg-green-500 checked:active:bg-green-500 checked:focus:bg-green-500 bg-green-500 checked:outline checked:outline-4 checked:outline-green-500"
          type="radio"
          name="color"
        />
      </div>
      <div className="w-20 flex flex-col">
        <label className="font-light text-sm">Gul</label>
        <input
          className="w-8 h-8 shadow-lg rounded checked:bg-yellow-500 checked:active:bg-yellow-500 checked:focus:bg-yellow-500 bg-yellow-500 checked:outline checked:outline-4 checked:outline-green-500"
          type="radio"
          name="color"
        />
      </div>
      <div className="w-20 flex flex-col">
        <label className="font-light text-sm">Hvit</label>
        <input
          className="w-8 h-8 shadow-lg rounded checked:bg-white checked checked:active:bg-white checked checked:focus:bg-white checked bg-white checked:outline checked:outline-4 checked:outline-green-500"
          type="radio"
          name="color"
        />
      </div>
      <div className="w-20 flex flex-col">
        <label className="font-light text-sm">Svart</label>
        <input
          className="w-8 h-8 shadow-lg rounded checked:bg-black checked checked:active:bg-black checked checked:focus:bg-black checked bg-black checked:outline checked:outline-4 checked:outline-green-500"
          type="radio"
          name="color"
        />
      </div>
      <div className="w-20 flex flex-col">
        <label className="font-light text-sm">Grå</label>
        <input
          className="w-8 h-8 shadow-lg rounded checked:bg-gray-500 checked:active:bg-gray-500 checked:focus:bg-gray-500 bg-gray-500 checked:outline checked:outline-4 checked:outline-green-500"
          type="radio"
          name="color"
        />
      </div>
      <div className="w-20 flex flex-col">
        <label className="font-light text-sm">Brun</label>
        <input
          className="w-8 h-8 shadow-lg rounded checked:bg-amber-700 checked:active:bg-amber-700 checked:focus:bg-amber-700 bg-amber-700 checked:outline checked:outline-4 checked:outline-green-500"
          type="radio"
          name="color"
        />
      </div> */}
    </div>
  );
};

export default Color;
