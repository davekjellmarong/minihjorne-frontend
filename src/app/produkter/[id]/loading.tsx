import LargeProductSkeleton from "@/components/skeleton/LargeProductSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center w-full">
      <LargeProductSkeleton />
    </div>
  );
};

export default loading;
