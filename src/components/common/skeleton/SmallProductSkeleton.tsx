import React from "react";
import ImageSkeleton from "./ImageSkeleton";
import TextSkeleton from "./TextSkeleton";

const SmallProductSkeleton = () => {
  return (
    <li className="grid w-full grid-rows-2 rounded border-2 border-gray-100">
      <ImageSkeleton size="small" />
      <div className="flex flex-col gap-4  p-6">
        <TextSkeleton />
        <TextSkeleton />
      </div>
    </li>
  );
};

export default SmallProductSkeleton;
