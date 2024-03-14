import React from "react";
import Breadcrumb from "./Breadcrumb";

interface LayoutProps {
  children: any;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Breadcrumb />
      <div className="relative">
        <div className="absolute left-0 top-0 z-10 hidden">
          <div className="block">
            <button className="flex items-center rounded px-3 py-2 ">
              <svg
                className={`} h-8 w-8 fill-current`}
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
