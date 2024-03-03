import { Product, ProductBackend } from "@/utils/types";
import React from "react";

const ProductStatusChip = ({
  active,
  sold,
  large,
}: {
  active: boolean;
  sold: boolean;
  large?: boolean;
}) => {
  const size = large ? "text w-40 my-6" : " py-3 px-4 text-sm w";
  return (
    <td className={`${size}`}>
      {!active && sold === false && (
        <div className="flex w-full text-red-800 items-center bg-red-200 border p-2 min-w-20 ">
          <p className=" w-full text-center">Offline</p>
        </div>
      )}
      {active && sold === false && (
        <div className="flex text-orange-800 items-center bg-orange-300 border p-2 min-w-20">
          <p className=" w-full text-center">Live</p>
        </div>
      )}
      {sold && (
        <div className="flex text-green-800 items-center bg-green-200 border p-2 min-w-20">
          <p className=" w-full text-center">Solgt</p>
        </div>
      )}
    </td>
  );
};

export default ProductStatusChip;
