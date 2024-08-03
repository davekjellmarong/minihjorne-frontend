import React from "react";

interface InfoColoredBoxProps {
  title: string;
  children: React.ReactNode;
  color: "blue" | "yellow" | "green" | "red" | "purple";
}

const InfoColoredBox = ({ title, children, color }: InfoColoredBoxProps) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-900",
    yellow: "bg-yellow-100 text-yellow-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-900",
    purple: "bg-purple-100 text-purple-900",
  };

  const colorClass = colorClasses[color] || colorClasses.blue; // Default to blue if color is not found

  return (
    <div className={`rounded-lg ${colorClass} px-4 py-6 shadow-md`}>
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default InfoColoredBox;
