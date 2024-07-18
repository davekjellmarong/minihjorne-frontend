import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { navItems } from "../NavItems";

interface SideMenuProps {
  setOpen?: any;
}

const SideMenu = ({ setOpen }: SideMenuProps) => {
  const path = usePathname();

  return (
    <div className="relative h-full bg-gray-100">
      {setOpen && <button onClick={() => setOpen(false)}>Close</button>}
      <div
        className={` "w-72" 
         overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-8 pt-2">
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className={`p-4 pl-10  sm:hover:bg-gray-400 ${
                item.path === path && "bg-gray-400"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
