import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large"; // Add size prop with hardcoded values
}

const LinkButton = ({
  to,
  className,
  children,
  size = "medium",
}: LinkButtonProps) => {
  let buttonSizeClass = ""; // Initialize buttonSizeClass variable

  // Set buttonSizeClass based on the size prop value
  if (size === "small") {
    buttonSizeClass = "py-2 text-sm";
  } else if (size === "medium") {
    buttonSizeClass = "py-3 text-base";
  } else if (size === "large") {
    buttonSizeClass = "py-4 text-lg";
  }

  return (
    <div className="flex justify-center">
      <Link
        className={`mt-4 flex justify-center rounded-lg bg-brand-400 px-4 text-white ${buttonSizeClass} ${className}`}
        href={to}
      >
        {children}
      </Link>
    </div>
  );
};

export default LinkButton;
