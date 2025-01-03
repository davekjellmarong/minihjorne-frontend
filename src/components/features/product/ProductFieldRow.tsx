import Link from "next/link";
import React from "react";
interface ProductFieldRowProps {
  value: string | null | undefined | [];
  label: string;
  queryParam?: string;
}
const ProductFieldRow = ({
  value,
  label,
  queryParam,
}: ProductFieldRowProps) => {
  return (
    <div className="field_row flex w-full px-12 py-8">
      <p className="flex w-1/5 text-sm text-gray-500">{label}</p>
      {queryParam ? (
        <Link
          href={`/brukte-barne-klaer/?${queryParam}&pagination[page]=1`}
          className="grow text-center text-xl font-light"
        >
          {value}
        </Link>
      ) : (
        <p className="grow text-center text-xl font-light">{value}</p>
      )}
      <div className="w-1/5"></div>
    </div>
  );
};

export default ProductFieldRow;
