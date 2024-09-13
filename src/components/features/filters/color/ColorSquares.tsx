"use client";
import { tailwindColors } from "@/utils/constants";
import { Color } from "@/utils/types";
import React from "react";
interface ColorSquaresProps {
  colors: Color[];
  size?: "small" | "medium" | "large";
  textColor?: "gray" | "black";
  direction?: "row" | "column";
}
const ColorSquares = ({
  colors,
  textColor = "gray",
  size = "medium",
  direction = "column",
}: ColorSquaresProps) => {
  const textColorClass =
    textColor === "gray" ? "text-gray-500" : "text-gray-700";
  const directionClass = direction === "column" ? "flex flex-col" : "flex";
  return (
    <div className="flex justify-between">
      <ul className={`flex ${directionClass} gap-2`}>
        {colors.map((color) => {
          const colorClass = tailwindColors.find(
            (item) => item.title === color.attributes.name,
          );
          return (
            <li key={color.id} className="flex items-center gap-2">
              <div
                className={`${colorClass?.tailwind}  size-7 rounded border-2 border-gray-200`}
              ></div>
              <p className={`${textColorClass} text-sm`}>
                {color.attributes.name}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorSquares;
