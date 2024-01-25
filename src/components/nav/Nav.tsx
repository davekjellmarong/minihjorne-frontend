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
import Image from "next/image";
import UpperNav from "./UpperNav";
import { upperNavItems } from "./UpperNavItems";
const Nav = () => {
  const [navItems, setNavItems] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery({ queryKey: ["jwt"] });
  useEffect(() => {
    if (data) {
      setNavItems(true);
    }
  }, [data]);
  const icons: any = {
    minSide: <UserCircle size={26} weight="thin" />,
    lastOpp: <PlusCircle size={26} weight="thin" />,
    handlekurv: <ShoppingCart size={26} weight="thin" />,
    hjem: <House size={26} weight="thin" />,
  };
  return (
    <nav className="flex  bg-brand-500 items-center justify-between shadow flex-wrap p-2 px-6  lg:px-20">
      <div className="block sm:hidden w-1/3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded "
        >
          <svg
            className={`fill-current h-8 w-8 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-8 w-8 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      <Link href="/produkter" className="lg:w-52  pb-0 mb-0  w-1/3">
        <Image src="/logoo.png" alt="logo" width={250} height={250} />
      </Link>

      <div className="flex justify-end w-1/3">
        {navItems &&
          navItemsAuth.map((item) => {
            return (
              <Link key={item.path} href={item.path} className="w-500">
                <button
                  className={` p-2 flex items-center rounded hover:bg-gray-500 transition-colors duration-150`}
                  key={item.label}
                >
                  {icons[item.icon]} {item.label}
                </button>
              </Link>
            );
          })}
      </div>

      <div
        className={`w-full flex flex-col gap-6 mt-4 sm:flex-row sm:mt-0 sm:justify-end flex-grow sm:flex sm:items-center sm:w-auto ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {upperNavItems.map((item) => {
          return (
            <Link key={item.path} href={item.path} className="w-500">
              <button
                className={` p-4 text-sm text-brand-700 flex items-center rounded hover:bg-gray-300 transition-colors duration-150`}
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
