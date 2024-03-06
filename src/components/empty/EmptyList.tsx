import Image from "next/image";
import Link from "next/link";
import React from "react";
interface EmptyListProps {
  path: string;
  text: string;
  buttonLabel: string;
}
export const EmptyList = ({ path, text, buttonLabel }: EmptyListProps) => {
  return (
    <div>
      {/* <h2 className="mb-4 text-center text-2xl font-light">Mine ordre</h2> */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/empty-files.svg"
            height={100}
            width={100}
            alt=""
            className="w-1/2"
          />
          <p className="mt-2 text-sm text-gray-400">{text}</p>
          <Link
            href={path}
            className="mt-4 rounded-md bg-indigo-500 px-4 py-2 text-white transition duration-200 ease-in-out sm:hover:bg-indigo-600"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};
