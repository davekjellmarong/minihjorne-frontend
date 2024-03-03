import { File, FloppyDisk, Trash } from "@phosphor-icons/react";
import { on } from "events";
import React from "react";

interface ButtonProps {
  icon?: "save" | "trash";
  children: React.ReactNode;
  type?: "brand" | "danger" | "outline";
  onClick?: () => void;
}
const Button = ({ icon, children, type = "brand", onClick }: ButtonProps) => {
  const iconElement = {
    trash: <Trash size={24} />,
    save: <FloppyDisk size={24} />,
  };
  const colors = {
    brand: "bg-brand-500 text-white",
    danger: "bg-red-500 text-white",
    outline: "bg-white text-black border border-gray-300",
  };
  return (
    <button
      onClick={onClick}
      className={`${colors[type]}  flex items-center gap-2 rounded p-4 px-6`}
    >
      {icon && <span>{iconElement[icon]}</span>}
      <p>{children}</p>
    </button>
  );
};

export default Button;
