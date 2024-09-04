import React from "react";
import clsx from "clsx";
import { Check, Question } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { getSteps } from "@/utils/serverUtils";
import { UserBackend } from "@/utils/types";
import StepsComplete from "./StepsComplete";

interface FullServiceStepsProps {
  user: UserBackend;
}

const FullServiceSteps = async ({ user }: FullServiceStepsProps) => {
  const { steps, currentStep } = getSteps(user);
  const colors = {
    completed: "border-teal-500 bg-teal-500 text-white shadow-lg",
    current: "border-teal-500 bg-teal-500 text-white shadow-lg",
    default: "border-grey-200 text-gray-700 shadow-sm text-sm",
  };
  if (steps.filter((step) => step.isCompleted).length === steps.length) {
    return <StepsComplete user={user} />;
  }
  return (
    <>
      <p className="pb-2 text-center text-xl text-gray-700">
        Full service pakke
      </p>
      <div className="flex w-full items-center justify-evenly px-4">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = step.isCompleted;
          const isCurrent = stepNumber === currentStep?.stepNumber;

          return (
            <div
              key={stepNumber}
              className="relative flex w-full max-w-[100px] flex-col items-center"
            >
              {currentStep?.menuId === step.menuId && (
                <Link
                  className="absolute right-0 top-[-30px]"
                  href={currentStep.helpUrl}
                >
                  <Question size={26} color="gray" />
                </Link>
              )}
              <Link
                href={step.nextStepUrl}
                className="flex w-full flex-col items-center"
              >
                <div
                  className={clsx(
                    "flex size-9 items-center justify-center rounded-full border-2 transition-all duration-300",
                    isCompleted ? colors.completed : "",
                    isCurrent ? colors.current : "",
                    !isCompleted && !isCurrent ? colors.default : "",
                    isCurrent && "size-12",
                  )}
                >
                  {isCompleted ? <Check size={24} weight="bold" /> : stepNumber}
                </div>
                <p className="mt-2 text-center text-sm">{step.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FullServiceSteps;
