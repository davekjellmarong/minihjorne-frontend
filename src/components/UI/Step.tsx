import React from "react";
interface StepProps {
  number: string;
  title: string;
  children: React.ReactNode;
}
const Step = ({ number, title, children }: StepProps) => {
  return (
    <div className="flex flex-col items-start gap-2 pb-8">
      <div className="flex-shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 font-bold text-white">
          {number}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <div className=" text-gray-600">{children}</div>
      </div>
    </div>
  );
};

export default Step;
