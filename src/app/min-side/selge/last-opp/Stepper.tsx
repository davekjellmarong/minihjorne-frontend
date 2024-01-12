import React from "react";

interface StepperProps {
  stepper: number;
  setStepper: React.Dispatch<React.SetStateAction<number>>;
}

const Stepper = ({ stepper, setStepper }: StepperProps) => {
  const stepperNumber = [1, 2, 3, 4];
  return (
    <div className="hidden sm:flex gap-14 items-center">
      {stepperNumber.map((step, index) => {
        return (
          <div
            key={step}
            className={`size-10 rounded-full border-2 border-gray-700 text-center ${
              stepper === step ? "bg-gray-700 border-green-500 text-white" : ""
            }`}
            onClick={() => {
              setStepper(step);
            }}
          >
            <p>{step}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
