import React from "react";
interface SubHeaderProps {
  children: React.ReactNode;
}
const SubHeader = ({ children }: SubHeaderProps) => {
  return <h2 className="pt-4 text-2xl font-bold text-brand-500">{children}</h2>;
};

export default SubHeader;
