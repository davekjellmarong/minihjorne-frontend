import { Input } from "postcss";
import React from "react";

interface InputHeaderProps {
  children: React.ReactNode;
}

const InputHeader = ({ children }: InputHeaderProps) => {
  return <div className="mb-2 font-thin text-xl">{children}</div>;
};

export default InputHeader;
