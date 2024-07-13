"use client";
import React, { useState } from "react";
import { navItemsPublic, navItemsAuth } from "./NavItems";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import {
  House,
  PlusCircle,
  ShoppingCart,
  TShirt,
  UserCircle,
} from "@phosphor-icons/react";
import { authUpperNavItems, upperNavItems } from "./UpperNavItems";
import { MenuDropDown } from "./MenuDropDown";
import { AuthQueries } from "@/reactQuery/AuthQueryFactory";
import { usePathname } from "next/navigation";
const Nav = () => {
  const { data } = useQuery(AuthQueries.jwt());
  let navItemsRightEnd = navItemsPublic;
  let navItems = upperNavItems;
  if (data) {
    navItemsRightEnd = navItemsAuth;
    navItems = authUpperNavItems;
  }
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const icons: any = {
    minSide: <UserCircle size={30} weight="thin" color="gray" />,
    lastOpp: <PlusCircle size={30} weight="thin" color="gray" />,
    handlekurv: <ShoppingCart size={30} weight="thin" color="gray" />,
    hjem: <House size={30} weight="thin" color="gray" />,
    tShirt: <TShirt size={30} weight="thin" color="gray" />,
  };
  return (
    <nav className="fixed z-20 flex w-full justify-center border-b bg-white px-4">
      <div className="flex w-full max-w-[978px] flex-wrap items-center justify-between py-2">
        <MenuDropDown isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex justify-end gap-0 sm:gap-3">
          {navItemsRightEnd.map((item) => {
            return (
              <Link key={item.path} href={item.path} className="w-500">
                <button
                  className={`flex items-center rounded p-2 transition-colors duration-150 ${item.color === "brand" ? "rounded-lg bg-brand-400 px-4 text-white" : ""} ${path === item.path ? "bg-brand-100" : ""}  active:bg-brand-200`}
                  key={item.label}
                >
                  {icons[item.icon]} {item.label}
                </button>
              </Link>
            );
          })}
        </div>

        <div
          className={`mt-4 flex w-full flex-grow flex-col gap-6  ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {navItems.map((item) => {
            return (
              <Link key={item.path} href={item.path} className="w-500">
                <button
                  className={` flex items-center rounded p-4 text-sm text-brand-700 transition-colors duration-150 `}
                  key={item.label}
                >
                  {item.label}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
