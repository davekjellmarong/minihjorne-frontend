import React from "react";

interface TextSkeletonProps {
  heading?: boolean;
}
const TextSkeleton = ({ heading = false }: TextSkeletonProps) => {
  const headingClass = heading ? "h-4" : "h-3";
  return (
    <div className="py-4">
      <div
        className={`${headingClass} animate-pulse bg-gray-400 rounded-full  w-full`}
      ></div>
    </div>
  );
};
export default TextSkeleton;
