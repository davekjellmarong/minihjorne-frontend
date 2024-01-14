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
          className="flex flex-col justify-center gap-2 border-2 border-gray-200 p-8 rounded w-96 hover:bg-gray-100 hover:border-gray-300"
        >
          <p className="font-bold text-lg">{item.title}</p>
          <p className="text-gray-500">{item.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default TopMenu;
