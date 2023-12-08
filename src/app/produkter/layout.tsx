import React from "react";

interface LayoutProps {
  children: any;
}
const layout = ({ children }: LayoutProps) => {
  return <div className="flex">{children}</div>;
};

export default layout;
