import { tailwindColors } from "@/utils/constants";
import { Color } from "@/utils/types";
import React from "react";
interface ColorSquaresProps {
  colors: Color[];
}
const ColorSquares = ({ colors }: ColorSquaresProps) => {
  return (
    <div className="flex justify-between">
      <ul className="flex gap-2 ">
        {colors.map((color) => {
          const colorClass = tailwindColors.find(
            (item) => item.title === color.attributes.name,
          );
          return (
            <li key={color.id} className="flex flex-col items-center">
              <p>{color.attributes.name}</p>
              <div
                className={`${colorClass?.tailwind} h-6 w-6 rounded border-2 border-gray-200`}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorSquares;
