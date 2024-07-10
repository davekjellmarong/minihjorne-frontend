"use client";
import React, { useEffect, useState } from "react";
import { authUpperNavItems, upperNavItems } from "./UpperNavItems";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { AuthQueries } from "@/reactQuery/AuthQueryFactory";

const UpperNav = () => {
  const [navItems, setNavItems] = useState(upperNavItems);
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery(AuthQueries.jwt());
  console.log(data);

  useEffect(() => {
    console.log(data);
    if (data) {
      console.log("done");
      setNavItems(authUpperNavItems);
    }
  }, [data]);
  return (
    <nav className="flex flex-wrap items-center justify-between bg-brand-300 p-2 px-6 shadow  lg:px-20">
      <div
        className={`mt-0  flex w-auto flex-grow flex-row items-center justify-end gap-6`}
      >
        {navItems.map((item) => {
          return (
            <Link key={item.path} href={item.path} className="w-500">
              <button
                className={` flex items-center rounded p-2 text-sm text-brand-700 transition-colors duration-150 sm:hover:bg-gray-300`}
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
