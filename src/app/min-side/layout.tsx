"use client";
import React, { useState } from "react";
import SideMenu from "./SideMenu";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import FilterDialog from "../produkter/FilterDialog";
import Breadcrumb from "./Breadcrumb";

interface LayoutProps {
  children: any;
}
const Layout = ({ children }: LayoutProps) => {
  useAutoLogIn();
  const [open, setOpen] = useState(false);
  return (
    <>
    <Breadcrumb />
    <div className="relative sm:pt-14 sm:p-0 sm:flex">
      <div className="hidden sm:block sm:w-72">
        <SideMenu />
      </div>
      <div className="sm:hidden">
        <FilterDialog width="w-1/2" open={open} setOpen={setOpen}>
          <SideMenu setOpen={setOpen} />
        </FilterDialog>
      </div>
      <div className="z-10 absolute top-0 left-0 hidden">
        <div className="block sm:hidden">
          <button
            onClick={() => setOpen(true)}
            className="flex items-center px-3 py-2 rounded "
          >
            <svg
              className={`fill-current h-8 w-8 }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="">{children}</div>
    </div>
    </>

  );
};

export default Layout;
