import React from "react";

interface ColorStepBoxProps {
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  skipCircle?: boolean;
}

const ColorStepBox = ({
  title,
  description,
  backgroundColor,
  textColor,
  skipCircle = false,
}: ColorStepBoxProps) => {
  let backgroundColorClass = "";
  let textColorClass = "";

  switch (backgroundColor) {
    case "blue":
      backgroundColorClass = "bg-blue-100";
      textColorClass = "text-blue-700";
      break;
    case "green":
      backgroundColorClass = "bg-green-100";
      textColorClass = "text-green-700";
      break;
    case "purple":
      backgroundColorClass = "bg-purple-100";
      textColorClass = "text-purple-700";
      break;
    case "yellow":
      backgroundColorClass = "bg-yellow-100";
      textColorClass = "text-yellow-700";
      break;
    case "red":
      backgroundColorClass = "bg-red-100";
      textColorClass = "text-red-700";
      break;
    default:
      backgroundColorClass = "bg-gray-100";
      textColorClass = "text-gray-700";
  }

  return (
    <>
      <div
        className={`rounded-md border border-gray-300 ${backgroundColorClass} ${textColorClass} p-6`}
      >
        <h2 className={`mb-2 text-xl font-semibold ${textColor}`}>{title}</h2>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      {!skipCircle && (
        <div className="flex h-12 items-center justify-center">
          <div className={`h-6 w-6 rounded-full ${backgroundColorClass}`}></div>
        </div>
      )}
    </>
  );
};
export default ColorStepBox;
