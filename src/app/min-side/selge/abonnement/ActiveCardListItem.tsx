import React from "react";

const ActiveCardListItem = ({ text }: { text: string }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
      <div className="flex space-x-4 items-center py-3 px-4 rounded-md bg-blue-200 ">
        <div
          className="icon-container icon-md text-blue-600"
          aria-hidden="true"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check-circle"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <path d="M22 4 12 14.01l-3-3"></path>
          </svg>
        </div>
        <p className="text-sm text-blue-800">{text}</p>
      </div>
    </div>
  );
};

export default ActiveCardListItem;
