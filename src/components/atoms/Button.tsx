import {
  File,
  FloppyDisk,
  Trash,
  ArrowLeft,
  ArrowRight,
  Plus,
} from "@phosphor-icons/react";
import { on } from "events";
import React from "react";

interface ButtonProps {
  icon?: "save" | "trash" | "arrowLeft" | "arrowRight" | "plus";
  children: React.ReactNode;
  type?: "brand" | "danger" | "outline" | "flat";
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
    plus: <Plus size={24} />,
  };
  let colors;
  if (disabled) {
    colors = {
      brand: "bg-brand-300 text-white",
      danger: "bg-red-300 text-white",
      outline: "bg-gray-300 text-gray-500 border border-gray-300",
      flat: "bg-white text-gray-500",
    };
  } else {
    colors = {
      brand: "bg-brand-500 text-white",
      danger: "bg-red-500 text-white",
      outline: "bg-white text-black border border-gray-300",
      flat: "bg-white text-brand-600",
    };
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${colors[type]}  flex items-center gap-2 rounded p-4 px-6 `}
    >
      {icon && <span>{iconElement[icon]}</span>}
      <p>{children}</p>
    </button>
  );
};

export default Button;
