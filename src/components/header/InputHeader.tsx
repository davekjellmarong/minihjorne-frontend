import { Input } from "postcss";
import React from "react";

interface InputHeaderProps {
  children: React.ReactNode;
  center?: boolean;
}

const InputHeader = ({ children, center }: InputHeaderProps) => {
  const centerClass = center ? "text-center" : "";
  return (
    <div className={`mb-2 font-thin text-2xl ${centerClass}`}>{children}</div>
  );
};

export default InputHeader;
