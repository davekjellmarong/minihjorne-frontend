import Link from "next/link";
import React from "react";
interface YellowBoxCTAProps {
  header: string;
  description: string;
  button: string;
  path: string;
}
const YellowBoxCTA = ({
  header,
  description,
  button,
  path,
}: YellowBoxCTAProps) => {
  return (
    <div className="m-4 flex flex-col items-center justify-end rounded-md bg-secondary-500 px-6 py-6 text-secondary-900 shadow-lg">
      <div className="mb-4 text-center">
        <h2 className="mb-2 text-lg font-bold text-secondary-900">{header}</h2>
        <p className="text-base text-secondary-900">{description}</p>
      </div>
      <Link href={path}>
        <button className="rounded bg-yellow-400 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-600">
          {button}
        </button>
      </Link>
    </div>
  );
};

export default YellowBoxCTA;
