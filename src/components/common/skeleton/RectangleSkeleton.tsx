import React from "react";

interface RectangleSkeletonProps {
  dark?: boolean;
}
const RectangleSkeleton = ({ dark = false }: RectangleSkeletonProps) => {
  const color = dark ? "bg-gray-600" : "bg-gray-400";
  return <div className={`animate-pulse h-[80px] ${color} w-full`}></div>;
};

export default RectangleSkeleton;
