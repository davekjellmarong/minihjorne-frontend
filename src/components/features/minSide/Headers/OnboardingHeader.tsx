import React from "react";
import UserInfoCard from "../cards/UserInfoCard";
import { SellerGetMe } from "@/utils/types";
import OnboardingSteps from "../cards/OnboardingSteps";
interface OnboardingHeaderProps {
  user: SellerGetMe;
}
const OnboardingHeader = ({ user }: OnboardingHeaderProps) => {
  return (
    <div className="space-y-6">
      <OnboardingSteps user={user} />
      <UserInfoCard user={user} />
    </div>
  );
};

export default OnboardingHeader;
