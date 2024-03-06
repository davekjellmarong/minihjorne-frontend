"use client";
import React, { useEffect, useState } from "react";
import { navItemsPublic, navItemsAuth } from "./NavItems";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import {
  House,
  PlusCircle,
  ShoppingCart,
  User,
  UserCircle,
} from "@phosphor-icons/react";
import { authUpperNavItems, upperNavItems } from "./UpperNavItems";
const Nav = () => {
  const { data } = useQuery({ queryKey: ["jwt"] });
  let navItemsRightEnd = navItemsPublic;
  let navItems = upperNavItems;
  if (data) {
    navItemsRightEnd = navItemsAuth;
    navItems = authUpperNavItems;
  }
  const [isOpen, setIsOpen] = useState(false);

  const icons: any = {
    minSide: <UserCircle size={26} weight="thin" />,
    lastOpp: <PlusCircle size={26} weight="thin" />,
    handlekurv: <ShoppingCart size={26} weight="thin" />,
    hjem: <House size={26} weight="thin" />,
  };
  return (
    <nav className="flex  flex-wrap items-center justify-between bg-white p-2 px-6 shadow  lg:px-20">
      <div className="block w-1/3 sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center rounded px-3 py-2 "
        >
          <svg
            className={`h-8 w-8 fill-current ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`h-8 w-8 fill-current ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      <Link href="/produkter" className="mb-0  w-1/3 pb-0  lg:w-52">
        {/* <Image src="/logoo.png" alt="logo" width={250} height={250} /> */}
        Mini Hjørne
      </Link>

      <div className="flex w-1/3 justify-end">
        {
          // navItems &&
          navItemsRightEnd.map((item) => {
            return (
              <Link key={item.path} href={item.path} className="w-500">
                <button
                  className={` flex items-center rounded p-2 transition-colors duration-150 sm:hover:bg-gray-500`}
                  key={item.label}
                >
                  {icons[item.icon]} {item.label}
                </button>
              </Link>
            );
          })
        }
      </div>

      <div
        className={`mt-4 flex w-full flex-grow flex-col gap-6 sm:mt-0 sm:flex sm:w-auto sm:flex-row sm:items-center sm:justify-end ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {navItems.map((item) => {
          return (
            <Link key={item.path} href={item.path} className="w-500">
              <button
                className={` flex items-center rounded p-4 text-sm text-brand-700 transition-colors duration-150 sm:hover:bg-gray-300`}
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
export default Nav;
