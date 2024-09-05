import React from "react";
import { cookies } from "next/headers";
import { UserMethods } from "@/queryFactory/User";
import { UserBackend } from "@/utils/types";
import { getSteps } from "@/utils/serverUtils";
import { Check } from "@phosphor-icons/react/dist/ssr"; // Using only the Check icon
import clsx from "clsx";
import Link from "next/link";
import StepsComplete from "./StepsComplete";

interface OnboardingStepsProps {
  user: UserBackend;
}

const OnboardingSteps = async ({ user }: OnboardingStepsProps) => {
  const token = cookies().get("Token")?.value;
  const currentDelivery = user.deliveries.find(
    (delivery) => delivery.inProgress,
  );
  const deliveryDetails = await UserMethods.getDelivery(
    currentDelivery?.id,
    token,
  );
  const { steps } = getSteps(user, deliveryDetails);

  const colors = {
    completed: "bg-green-500 text-white",
    default: "bg-blue-400 text-white border-blue-300", // Updated default color to blue
  };
  if (steps.filter((step) => step.isCompleted).length === steps.length) {
    return <StepsComplete user={user} />;
  }
  return (
    <div className="p-4">
      <div className="flex flex-col items-stretch gap-4">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <p className="pb-4 text-center text-xl  text-gray-700">
            {deliveryDetails.attributes.sales_method.data.attributes.name}
          </p>
          <div className="flex flex-col gap-4">
            {steps.map((step) => {
              const isCompleted = step.isCompleted;

              return (
                <Link
                  key={step.menuId}
                  href={step.nextStepUrl} // Link to the step completion page
                  className={clsx(
                    "flex items-center justify-between rounded-lg border p-4 transition-colors duration-300",
                    isCompleted ? colors.completed : colors.default,
                    "hover:bg-gray-100",
                  )}
                >
                  <div className="flex items-center">
                    <div
                      className={clsx(
                        "flex h-8 w-8 items-center justify-center rounded-full",
                        isCompleted ? "bg-green-600" : "border",
                        !isCompleted && "bg-blue-50", // Add background color for default steps
                      )}
                    >
                      {isCompleted && (
                        <Check size={24} weight="bold" color="white" />
                      )}
                    </div>
                    <p className="ml-4 text-lg font-medium">{step.title}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSteps;
