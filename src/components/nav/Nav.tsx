"use client";
import React, { useEffect, useState } from "react";
import { navItemsPublic, navItemsAuth } from "./NavItems";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
const Nav = () => {
  const [navItems, setNavItems] = useState(navItemsPublic);
  const { data } = useQuery({ queryKey: ["jwt"] });
  useEffect(() => {
    if (data) {
      setNavItems(navItemsAuth);
    }
  }, [data]);
  return (
    <nav className="flex items-center justify-between flex-wrap p-2 px-6 bg-gray-700 lg:px-20 ">
      <Link href="/" className="w-36 lg:w-52 text-white pb-0 mb-0">
        Mini Bruket
      </Link>
      <div
        className={`w-full flex flex-col gap-6 mt-4 sm:flex-row sm:mt-0 sm:justify-end flex-grow sm:flex sm:items-center sm:w-auto`}
      >
        {navItems.map((item) => {
          return (
            <Link key={item.path} href={item.path} className="w-500">
              <button
                className={`text-white p-4 rounded hover:bg-gray-500 transition-colors duration-150`}
                key={item.label}
              >
                {item.label}
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Nav;
