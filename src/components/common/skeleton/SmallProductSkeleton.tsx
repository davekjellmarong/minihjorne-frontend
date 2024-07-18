import React from "react";
import ImageSkeleton from "./ImageSkeleton";
import TextSkeleton from "./TextSkeleton";

const SmallProductSkeleton = () => {
  return (
    <div className="w-44 grid grid-rows-2 h-[385px] border-2 rounded border-gray-100">
      <div className="">
        <ImageSkeleton />
      </div>
      <div className="px-2">
        <div className="w-16 m-auto">
          <TextSkeleton heading />
        </div>
        <div className="">
          <TextSkeleton />
          <TextSkeleton />
          <TextSkeleton />
        </div>
      </div>
    </div>
  );
};

export default SmallProductSkeleton;
