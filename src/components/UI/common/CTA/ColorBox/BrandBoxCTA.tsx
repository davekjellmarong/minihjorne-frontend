import Link from "next/link";
import React from "react";
interface BrandBoxCTAProps {
  header: string;
  description: string;
  button: string;
  path: string;
}
const BrandBoxCTA = ({
  header,
  description,
  button,
  path,
}: BrandBoxCTAProps) => {
  return (
    <div className="m-4 flex flex-col items-center justify-end rounded-md bg-brand-200 px-6 py-6 text-brand-900 shadow-lg">
      <div className="mb-4 text-center">
        <h2 className="mb-2 text-lg font-bold text-brand-900">{header}</h2>
        <p className="text-base text-brand-900">{description}</p>
      </div>
      <Link href={path}>
        <button className="rounded bg-brand-500 px-4 py-2 font-semibold text-white">
          {button}
        </button>
      </Link>
    </div>
  );
};

export default BrandBoxCTA;
