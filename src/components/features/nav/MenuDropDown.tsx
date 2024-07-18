import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MenuDropDown = () => {
  return (
    <div className="flex items-center gap-6 ">
      <Link href="/" className="mb-0   pb-0 ">
        <Image
          src="/minihjørne.png"
          alt="logo"
          width={150}
          height={150}
          className="mb-1"
          priority
        />
      </Link>
    </div>
  );
};
