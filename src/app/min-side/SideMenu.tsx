import Link from "next/link";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { navItems } from "./NavItems";

const SideMenu = () => {
  const path = usePathname();

  return (
    <div className="bg-gray-100 h-full w-72">
      <ul className="flex flex-col gap-8 pt-10">
        {navItems.map((item) => {
          return (
            <Link
              href={item.path}
              key={item.id}
              className={`hover:bg-gray-400 pl-10  p-4 ${
                item.path === path && "bg-gray-400"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
