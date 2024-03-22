import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "../NavItems";

interface SideMenuProps {
  setOpen?: any;
}

const SideMenu = ({ setOpen }: SideMenuProps) => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative h-full bg-gray-100">
      {setOpen && <button onClick={() => setOpen(false)}>Close</button>}
      {/* <div className="absolute flex items-center justify-end p-4 sm:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div> */}

      {/* <div
        className={` sm:w-72 ${
          isMenuOpen ? "w-72" : "w-0"
        } transition-all ease-in-out duration-300 overflow-hidden`}
      > */}
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
