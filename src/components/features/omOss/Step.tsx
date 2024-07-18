import React from "react";

interface StepProps {
  header: string;
  description: string;
}
const Step = ({ header, description }: StepProps) => {
  return (
    <div>
      <p className="text-sm font-light text-purple-700">
        {header.toUpperCase()}
      </p>
      <h2 className="text-2xl">{description}</h2>
    </div>
  );
};
export default Step;
