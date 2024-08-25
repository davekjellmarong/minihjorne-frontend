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
  const size = large ? "text w-40 my-6" : " py-3 px-0 text-sm w";
  return (
    <div className={`${size}`}>
      {!active && sold === false && (
        <div className="flex w-full min-w-20 items-center rounded border bg-red-200 p-2 text-red-800 ">
          <p className=" w-full text-center">Offline</p>
        </div>
      )}
      {active && sold === false && (
        <div className="flex min-w-20 items-center rounded border bg-orange-300 p-2 text-orange-800">
          <p className=" w-full text-center">Live</p>
        </div>
      )}
      {sold && (
        <div className="flex min-w-20 items-center rounded border bg-green-200 p-2 text-green-800">
          <p className=" w-full text-center">Solgt</p>
        </div>
      )}
    </div>
  );
};

export default ProductStatusChip;
