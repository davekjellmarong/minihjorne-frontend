import React from "react";
import { upperNavItems } from "./UpperNavItems";
import Link from "next/link";

const UpperNav = () => {
  return (
    <nav className="flex bg-brand-300 items-center justify-between shadow flex-wrap p-2 px-6  lg:px-20">
      <div
        className={`flex  gap-6 flex-row mt-0 justify-end flex-grow items-center w-auto`}
      >
        {upperNavItems.map((item) => {
          return (
            <Link key={item.path} href={item.path} className="w-500">
              <button
                className={` p-2 text-sm text-brand-700 flex items-center rounded hover:bg-gray-300 transition-colors duration-150`}
                key={item.label}
              >
                {/* {icons[item.icon]} */}
                {item.label}
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default UpperNav;
