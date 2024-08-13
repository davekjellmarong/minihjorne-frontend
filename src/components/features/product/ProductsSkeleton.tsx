import SmallProductSkeleton from "@/components/common/skeleton/SmallProductSkeleton";
import React from "react";
interface ProductsSkeletonProps {
  number?: number;
}
const ProductsSkeleton = ({ number = 10 }: ProductsSkeletonProps) => {
  return (
    <ul className="mt-10 grid w-full grid-cols-2 justify-items-center gap-x-4 gap-y-16 sm:grid-cols-3 md:grid-cols-4">
      {Array(number)
        .fill(0)
        .map((_, i) => {
          return <SmallProductSkeleton key={i} />;
        })}
    </ul>
  );
};

export default ProductsSkeleton;