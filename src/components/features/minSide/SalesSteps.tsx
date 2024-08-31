import React from "react";
import clsx from "clsx";
import { cookies } from "next/headers";
import { UserMethods } from "@/queryFactory/User";

const SalesStep = async () => {
  const token = cookies().get("Token")?.value;
  const user = await UserMethods.getMeFetch(token);
  const hasRegisteredProducts = user.products.length > 0;
  const hasSalesProfile = user.header.length > 4 && user.description.length > 5;
  const hasDelivery =
    user.products.filter((product) => !product.active).length > 0 &&
    hasSalesProfile;
  const steps = [
    {
      title: "Registrer produkter",
      isCompleted: hasRegisteredProducts,
    },
    {
      title: "Salgsprofil",
      isCompleted: hasSalesProfile,
    },
    {
      title: "Levering",
      isCompleted: hasDelivery,
    },
  ];
  const currentStep = steps.findIndex((step) => !step.isCompleted) + 1;
  console.log(steps);
  return (
    <div className="flex w-full items-center justify-around px-4">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = step.isCompleted && stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <div key={stepNumber} className="flex flex-col items-center">
            <div
              className={clsx(
                "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300",
                isCompleted && "border-green-500 bg-green-500 text-white",
                isCurrent &&
                  "h-12 w-12 border-brand-500 bg-brand-500 text-white",
                !isCompleted && !isCurrent && "border-gray-300 bg-gray-300",
              )}
            >
              {stepNumber}
            </div>
            <p className="mt-2 text-center text-sm">{step.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SalesStep;
