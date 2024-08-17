"use client";
import {
  FloppyDisk,
  Trash,
  ArrowLeft,
  ArrowRight,
  Plus,
} from "@phosphor-icons/react";
import React from "react";

interface ButtonProps {
  icon?: "save" | "trash" | "arrowLeft" | "arrowRight" | "plus";
  children: React.ReactNode;
  type?: "brand" | "danger" | "outline" | "flat";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  submit?: boolean;
  size?: "small" | "medium" | "large";
}
const Button = ({
  icon,
  children,
  type = "brand",
  onClick,
  disabled,
  className = "",
  submit = false,
  size = "medium",
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
      outline: "bg-brand-300 text-gray-500 border-2 border-brand-300",
      flat: "bg-white text-gray-500",
    };
  } else {
    colors = {
      brand: "bg-brand-500 text-white active:bg-brand-700",
      danger: "bg-red-500 text-white active:bg-red-700",
      outline:
        "bg-white text-black border-2 border-brand-300 active:bg-brand-100",
      flat: "bg-white text-brand-600 active:bg-gray-100",
    };
  }
  let sizeClass;
  if (size === "small") {
    sizeClass = "p-3 px-5 text-sm";
  } else if (size === "medium") {
    sizeClass = "p-4 px-6";
  } else if (size === "large") {
    sizeClass = "p-6 px-8 text-lg";
  }
  return (
    <button
      type={submit ? "submit" : "button"}
      onClick={onClick}
      disabled={disabled}
      className={`${colors[type]} flex items-center justify-center gap-2 rounded ${sizeClass} ${className}`}
    >
      {icon && <span>{iconElement[icon]}</span>}
      <p>{children}</p>
    </button>
  );
};

export default Button;
