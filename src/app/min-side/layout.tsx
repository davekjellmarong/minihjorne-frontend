"use client";
import React from "react";
import SideMenu from "./SideMenu";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";

interface LayoutProps {
  children: any;
}
const Layout = ({ children }: LayoutProps) => {
  useAutoLogIn();
  return (
    <div className="flex justify-center">
      <div className="w-72">
        <SideMenu />
      </div>

      <div className="w-full m-14">{children}</div>
    </div>
  );
};

export default Layout;
