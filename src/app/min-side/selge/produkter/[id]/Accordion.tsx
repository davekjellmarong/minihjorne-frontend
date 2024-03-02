import { ArrowDown, ArrowRight } from "@phosphor-icons/react";
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
    <div className="border border-gray-300 rounded-md mb-6">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p className="text-sm font-light">{label}</p>
        <p>{currentValue}</p>
        <div>{isOpen ? <ArrowDown size={24} /> : <ArrowRight size={24} />}</div>
      </div>
      <div className={`${height} transition-all duration-200`}>{children}</div>
    </div>
  );
};

export default Accordion;
