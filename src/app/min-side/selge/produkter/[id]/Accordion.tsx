import React, { useState } from "react";

interface AccordionProps {
  children: React.ReactNode;
  label: string;
  currentValue: any;
}

const Accordion = ({ children, label, currentValue }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const height = isOpen ? "h-auto" : "h-0 overflow-hidden";

  return (
    <div className="border border-gray-300 rounded-md">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p className="text-lg font-medium">{label}</p>
        <p>{currentValue}</p>
        <button
          className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
            isOpen
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
      <div className={`${height} transition-all duration-200 p-4`}>
        {children}
      </div>
    </div>
    // <div className="border border-gray-300 rounded-md">
    //   <div className="flex items-center justify-between p-4">
    //     <p className="text-lg font-medium">{label}</p>
    //     <button
    //       className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
    //       onClick={() => {
    //         setIsOpen(!isOpen);
    //       }}
    //     >
    //       {isOpen ? "Lukk" : "Åpne"}
    //     </button>
    //   </div>
    //   <div className={`${height} transition-all duration-200 p-4`}>
    //     {children}
    //   </div>
    // </div>
  );
};

export default Accordion;
