"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

interface ComingSoonProps {
  text: string;
}
const ComingSoon = ({ text }: ComingSoonProps) => {
  // const path = usePathname();
  // const page = path.slice(1);
  // const pageName = page.charAt(0).toUpperCase() + page.slice(1);
  return (
    <div
      className="flex w-full items-center justify-center bg-gray-100
      py-40"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="px-6 text-center text-3xl font-bold text-brand-400">
          {text}
        </div>
        <div className="">
          <Image
            src="/construction.svg"
            alt="construction"
            height={500}
            width={300}
            className="rounded-lg object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
