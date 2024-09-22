import React from "react";
import Image from "next/image";

interface InfoColoredBoxProps {
  title: string;
  children: React.ReactNode;
  image?: boolean;
  color:
    | "blue"
    | "yellow"
    | "green"
    | "red"
    | "purple"
    | "white"
    | "gray"
    | "secondary"
    | "tertiary";
}

const InfoColoredBox = ({
  title,
  children,
  color,
  image = false,
}: InfoColoredBoxProps) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-900 border-blue-200",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
    green: "bg-green-100 text-green-800 border-green-200",
    red: "bg-red-100 text-red-900 border-red-200",
    purple: "bg-purple-100 text-purple-900 border-purple-200",
    white: "bg-white bg-opacity-60 text-gray-900 border-gray-200", // Translucent white
    gray: "bg-gray-100 bg-opacity-60 text-gray-800 border-gray-200", // Translucent gray
    secondary: "bg-secondary-100 text-secondary-800 border-secondary-200",
    tertiary: "bg-tertiary-100 text-tertiary-800 border-tertiary-200",
  };

  const colorClass = colorClasses[color] || colorClasses.blue; // Default to blue if color is not found

  return (
    <div className={`rounded-lg text-center ${colorClass} border px-4 py-6`}>
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
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

      <div>{children}</div>
    </div>
  );
};

export default InfoColoredBox;
