import {
  File,
  FloppyDisk,
  Trash,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react";
import { on } from "events";
import React from "react";

interface ButtonProps {
  icon?: "save" | "trash" | "arrowLeft" | "arrowRight";
  children: React.ReactNode;
  type?: "brand" | "danger" | "outline";
  onClick?: () => void;
  disabled?: boolean;
}
const Button = ({
  icon,
  children,
  type = "brand",
  onClick,
  disabled,
}: ButtonProps) => {
  const iconElement = {
    trash: <Trash size={24} />,
    save: <FloppyDisk size={24} />,
    arrowLeft: <ArrowLeft size={24} />,
    arrowRight: <ArrowRight size={24} />,
  };
  const colors = {
    brand: "bg-brand-500 text-white",
    danger: "bg-red-500 text-white",
    outline: "bg-white text-black border border-gray-300",
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${colors[type]}  flex items-center gap-2 rounded p-4 px-6`}
    >
      {icon && <span>{iconElement[icon]}</span>}
      <p>{children}</p>
    </button>
  );
};

export default Button;
