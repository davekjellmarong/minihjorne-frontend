import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ActionsColoredBoxProps {
  header: string;
  children: React.ReactNode;
  button: string;
  path: string;
  color: "blue" | "yellow" | "green" | "red" | "purple" | "white";
  image?: boolean;
  headerWeight?: "bold" | "semi-bold";
  shadow?: boolean;
}

const ActionsColoredBox = ({
  header,
  children,
  button,
  path,
  color,
  image = false,
  headerWeight = "semi-bold",
  shadow = true,
}: ActionsColoredBoxProps) => {
  const colorClasses = {
    blue: {
      box: "bg-blue-100 text-blue-900",
      button: "bg-blue-300 text-blue-800 hover:bg-blue-400",
    },
    yellow: {
      box: "bg-yellow-100 text-yellow-800",
      button: "bg-yellow-300 text-yellow-700 hover:bg-yellow-400",
    },
    green: {
      box: "bg-green-100 text-green-800",
      button: "bg-green-300 text-green-700 hover:bg-green-400",
    },
    red: {
      box: "bg-red-100 text-red-900",
      button: "bg-red-300 text-red-800 hover:bg-red-400",
    },
    purple: {
      box: "bg-purple-100 text-purple-900",
      button: "bg-purple-300 text-purple-800 hover:bg-purple-400",
    },
    white: {
      box: "bg-white text-gray-600 border border-gray-200",
      button: "bg-brand-500 text-white hover:bg-brand-600",
    },
  };

  const { box, button: buttonClass } = colorClasses[color] || colorClasses.blue;
  const headerWeightClass =
    headerWeight === "bold" ? "font-bold" : "font-semibold";
  const boxShadow = shadow ? "shadow-lg" : "shadow-none";
  return (
    <div
      className={`flex flex-col items-center justify-end rounded-md ${box} px-6 py-6 ${boxShadow}`}
    >
      <div className="mb-4 text-center">
        <h2 className={`mb-2 text-lg ${headerWeightClass}`}>{header}</h2>
        {image && (
          <div className="flex justify-center">
            <Image
              src="/minihjørne-icon.svg"
              alt="Minihjørne Icon"
              width={150}
              height={150}
            />
          </div>
        )}
        <div className="text-base">{children}</div>
      </div>
      <Link href={path}>
        <button className={`rounded px-4 py-2  transition ${buttonClass}`}>
          {button}
        </button>
      </Link>
    </div>
  );
};

export default ActionsColoredBox;
