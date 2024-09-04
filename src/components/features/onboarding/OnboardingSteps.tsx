import React from "react";
import { cookies } from "next/headers";
import { UserMethods } from "@/queryFactory/User";
import { UserStatus } from "@/utils/Enums";
import SelvregistreringSteps from "./SelvregistreringSteps";
import FullServiceSteps from "./FullServiceSteps";

const OnboardingSteps = async () => {
  const token = cookies().get("Token")?.value;
  const user = await UserMethods.getMeFetch(token);
  if (user.user_status.id === UserStatus.Member) {
    return <div>Velg en salgsplan!</div>;
  } else if (user.user_status.id === UserStatus.Selvregistrering) {
    return <SelvregistreringSteps user={user} />;
  } else if (user.user_status.id === UserStatus.FullService) {
    return <FullServiceSteps user={user} />;
  }
};

export default OnboardingSteps;
