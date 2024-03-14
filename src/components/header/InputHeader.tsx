import { Input } from "postcss";
import React from "react";

interface InputHeaderProps {
  children: React.ReactNode;
  center?: boolean;
  optional: boolean;
}

const InputHeader = ({ children, center, optional }: InputHeaderProps) => {
  const centerClass = center ? "text-center" : "";
  const required = optional ? "Valgfri" : "Påkrevd";
  return (
    <div className={`mb-2 text-2xl font-thin ${centerClass}`}>
      <p className="text-center text-sm font-thin text-gray-500">{required}</p>
      {children}
    </div>
  );
};

export default InputHeader;
