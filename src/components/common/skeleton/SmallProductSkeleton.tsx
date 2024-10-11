import React from "react";
import ImageSkeleton from "./ImageSkeleton";
import TextSkeleton from "./TextSkeleton";

const SmallProductSkeleton = () => {
  return (
    // <li className="grid w-full grid-rows-2 rounded border-2 border-gray-100">
    <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-200 hover:scale-105">
      <ImageSkeleton size="small" />
      <div className="flex flex-col gap-4  p-6">
        <TextSkeleton />
        <TextSkeleton />
      </div>
    </div>
  );
};

export default SmallProductSkeleton;
