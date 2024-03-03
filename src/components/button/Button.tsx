import { File, FloppyDisk, Trash } from "@phosphor-icons/react";
import { on } from "events";
import React from "react";

interface ButtonProps {
  icon?: "save" | "trash" | "none";
  children: React.ReactNode;
  type?: "brand" | "danger" | "outline";
  onClick?: () => void;
}
const Button = ({
  icon = "none",
  children,
  type = "brand",
  onClick,
}: ButtonProps) => {
  const iconElement = {
    trash: <Trash size={24} />,
    save: <FloppyDisk size={24} />,
    none: null,
  };
  const colors = {
    brand: "bg-brand-500",
    danger: "bg-red-500",
    outline: "bg-white text-black border border-gray-300",
  };
  return (
    <button
      onClick={onClick}
      className={`${colors[type]} text-white p-4 px-6 rounded flex items-center gap-2`}
    >
      <span>{iconElement[icon]}</span>
      <p>{children}</p>
    </button>
  );
};

export default Button;
