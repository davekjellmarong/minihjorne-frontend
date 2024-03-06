import React from "react";
import { navItems } from "./NavItems";
import Link from "next/link";
const TopMenu = () => {
  return (
    <div className="flex flex-col items-center gap-10 sm:flex-row sm:gap-4 ">
      {navItems.map((item) => (
        <Link
          href={item.path}
          key={item.id}
          className="flex w-96 flex-col justify-center gap-2 rounded border-2 border-gray-200 p-8 sm:hover:border-gray-300 sm:hover:bg-gray-100"
        >
          <p className="text-lg font-bold">{item.title}</p>
          <p className="text-gray-500">{item.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default TopMenu;
