import React from "react";
import ImageSkeleton from "./ImageSkeleton";
import TextSkeleton from "./TextSkeleton";
import RectangleSkeleton from "./RectangleSkeleton";

const LargeProductSkeleton = () => {
  return (
    <div className="w-full">
      <div className="h-[500px] w-full">
        <ImageSkeleton size="large" />
      </div>
      <div className="h-[105px]">
        <div className="w-32 m-auto">
          <TextSkeleton heading />
        </div>
        <div className="w-24 m-auto">
          <TextSkeleton />
        </div>
      </div>
      <RectangleSkeleton />
      <RectangleSkeleton dark />
      <RectangleSkeleton />
      <RectangleSkeleton dark />
    </div>
  );
};

export default LargeProductSkeleton;
