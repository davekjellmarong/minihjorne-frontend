import { tailwindColors } from "@/utils/constants";
import { Product } from "@/utils/types";
import React from "react";
interface ColorSquaresProps {
  product: Product;
}
const ColorSquares = ({ product }: ColorSquaresProps) => {
  return (
    <div className="flex justify-between">
      <ul className="flex gap-2 ">
        {product.attributes.colors.data.map((color) => {
          const colorClass = tailwindColors.find(
            (item) => item.title === color.attributes.name
          );
          return (
            <li key={color.id} className="flex flex-col items-center">
              <p>{color.attributes.name}</p>
              <div
                className={`${colorClass?.tailwind} w-6 h-6 rounded border-gray-200 border-2`}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorSquares;
