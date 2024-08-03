"use client";
import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import {
  House,
  PlusCircle,
  ShoppingCart,
  TShirt,
  UserCircle,
} from "@phosphor-icons/react";
import { AuthQueries } from "@/queryFactory/Auth";
import { usePathname } from "next/navigation";
import { useStore } from "@/stateManagment/ZustandStore";
import Image from "next/image";
type NavItem = {
  label: string;
  path: string;
  color: string;
  icon: string;
};

interface NavProps {
  navItemsPublic: NavItem[];
  navItemsAuth: NavItem[];
}
const Nav = ({ navItemsPublic, navItemsAuth }: NavProps) => {
  // TO-DO: Fix Nav messy components
  const { data } = useQuery(AuthQueries.jwt());
  // FIGURE OUT NAV RERENDERING AND AUTH AND IF WE CAN MOVE PUBLIC/AUTH UP TO PARENT
  const navVisible = useStore((state) => state.navVisible);
  let navItemsRightEnd = navItemsPublic;
  if (data) {
    navItemsRightEnd = navItemsAuth;
  }
  const path = usePathname();
  const icons: any = {
    minSide: <UserCircle size={30} weight="thin" color="gray" />,
    lastOpp: <PlusCircle size={30} weight="thin" color="gray" />,
    handlekurv: <ShoppingCart size={30} weight="thin" color="gray" />,
    hjem: <House size={30} weight="thin" color="gray" />,
    tShirt: <TShirt size={30} weight="thin" color="gray" />,
  };
  if (!navVisible) return null;
  return (
    <header className="mb-2  h-[56px] w-full">
      <nav className="fixed z-20 flex w-full justify-center border-b bg-white px-4">
        <div className="flex w-full max-w-[978px] flex-wrap items-center justify-between py-2">
          <Link href="/" className="mb-0   pb-0 ">
            <Image
              src="/minihjørne-logo.png"
              alt="logo"
              width={150}
              height={150}
              // className="mb-1"
              priority
            />
          </Link>
          <div className={`flex justify-end gap-0 sm:gap-3`}>
            {navItemsRightEnd.map((item) => {
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="w-500 flex items-center "
                >
                  <button
                    className={`flex items-center rounded p-2 transition-colors duration-150 ${item.color === "brand" ? "rounded border border-brand-300 px-2 text-sm text-brand-800 " : ""} ${path === item.path ? "bg-brand-100" : ""}  active:bg-brand-200`}
                    key={item.label}
                  >
                    {icons[item.icon]} {item.label}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
