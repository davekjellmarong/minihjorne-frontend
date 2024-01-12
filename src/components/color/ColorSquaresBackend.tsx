import { tailwindColors } from "@/utils/constants";
import { Color, ColorBackend, Product } from "@/utils/types";
import React from "react";
interface ColorSquaresBackendProps {
  colors: ColorBackend[];
  size?: string;
}
const ColorSquaresBackend = ({
  colors,
  size = "size-6",
}: ColorSquaresBackendProps) => {
  return (
    <div className="flex justify-between">
      <ul className="flex gap-2 ">
        {colors.map((color) => {
          const colorClass = tailwindColors.find(
            (item) => item.title === color.name
          );
          return (
            <li key={color.id} className="flex flex-col items-center">
              {/* <p>{color.name}</p> */}
              <div
                className={`${colorClass?.tailwind} ${size} rounded border-gray-200 border-2`}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorSquaresBackend;
