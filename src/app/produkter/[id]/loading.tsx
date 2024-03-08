import LargeProductSkeleton from "@/components/skeleton/LargeProductSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex w-full justify-center">
      <LargeProductSkeleton />
    </div>
  );
};

export default loading;
