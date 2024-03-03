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
    <div className="mb-6 rounded-md border border-gray-300">
      <div
        className="flex cursor-pointer items-center justify-between p-4"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p className="text-sm font-light">{label}</p>
        <p>{currentValue}</p>
        <div>
          {isOpen ? (
            <ArrowRight color="indigo" size={24} />
          ) : (
            <ArrowDown color="indigo" size={24} />
          )}
        </div>
      </div>
      <div className={`${height} transition-all duration-200`}>{children}</div>
    </div>
  );
};

export default Accordion;
