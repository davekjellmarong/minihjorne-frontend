"use client";
import { tailwindColors } from "@/utils/constants";
import { Color } from "@/utils/types";
import React from "react";
interface ColorSquaresProps {
  colors: Color[];
  size?: "small" | "medium" | "large";
}
const ColorSquares = ({ colors }: ColorSquaresProps) => {
  return (
    <div className="flex justify-between">
      <ul className="flex flex-col gap-2 ">
        {colors.map((color) => {
          const colorClass = tailwindColors.find(
            (item) => item.title === color.attributes.name,
          );
          return (
            <li key={color.id} className="flex items-center gap-2">
              <div
                className={`${colorClass?.tailwind} size-7 rounded border-2 border-gray-200`}
              ></div>
              <p className="text-sm text-gray-700">{color.attributes.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorSquares;
