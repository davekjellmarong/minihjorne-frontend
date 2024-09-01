import React from "react";
import clsx from "clsx";
import { cookies } from "next/headers";
import { UserMethods } from "@/queryFactory/User";
import { Check, Question, QuestionMark } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { getStepsAndCurrentStep } from "@/utils/serverUtils";
import { UserStatus } from "@/utils/Enums";

const OnboardingSteps = async () => {
  const token = cookies().get("Token")?.value;
  const user = await UserMethods.getMeFetch(token);
  if (user.user_status.id === UserStatus.Member) {
    return <div>Velg en salgsplan!</div>;
  }
  const { steps, currentStep } = getStepsAndCurrentStep(user);
  const colors = {
    completed: "border-teal-500 bg-teal-500 text-white shadow-lg", // Teal for completed steps with shadow
    current: "border-teal-500 bg-teal-500 text-white shadow-lg", // Aqua for current step with shadow
    default: "border-grey-200 text-gray-700 shadow-sm text-sm", // Grey for default/uncompleted steps with lighter shadow
  };

  return (
    <div className="flex w-full items-center justify-between px-4">
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
  );
};

export default OnboardingSteps;
