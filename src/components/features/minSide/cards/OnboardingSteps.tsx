import { Button } from "@/components/UI/button";
import { getSteps } from "@/utils/serverUtils";
import { SellerGetMe } from "@/utils/types";
import { CheckIcon } from "lucide-react";
import React from "react";
import StepsComplete from "../../onboarding/StepsComplete";
import Card from "./Card";
interface OnboardingStepsProps {
  user: SellerGetMe;
}
const OnboardingSteps = ({ user }: OnboardingStepsProps) => {
  const currentDelivery = user.seller?.deliveries?.find(
    (delivery) => delivery.inProgress,
  );
  const { steps } = getSteps(user, currentDelivery);

  if (steps.filter((step) => step.isCompleted).length === steps.length) {
    return <StepsComplete user={user} />;
  }
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4">
      <h2 className="text-xl font-bold text-[#7d6adf]">Neste steg</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {steps.map((step) => {
          return (
            <Card
              key={step.menuId}
              header={step.title}
              description={step.description}
              button={step.title}
              isCompleted={step.isCompleted}
              href={step.nextStepUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OnboardingSteps;
