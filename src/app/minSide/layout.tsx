import React from "react";
import SideMenu from "./SideMenu";

interface LayoutProps {
  children: any;
}
const layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex justify-center">
      <div className="w-72">
        <SideMenu />
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
