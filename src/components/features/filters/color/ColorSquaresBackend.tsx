import { tailwindColors } from "@/utils/constants";
import { ColorBackend } from "@/utils/types";
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
            (item) => item.title === color.name,
          );
          return (
            <li key={color.id} className="flex flex-col items-center">
              <div
                className={`${colorClass?.tailwind} ${size} rounded border-2 border-gray-200`}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorSquaresBackend;
