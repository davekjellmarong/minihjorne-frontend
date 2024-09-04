import { UserMethods } from "@/queryFactory/User";
import React from "react";
import { cookies } from "next/headers";
import { UserStatus } from "@/utils/Enums";
import SellerHeader from "./Headers/SellerHeader";
import MemberHeader from "./Headers/MemberHeader";
import OnboardingSteps from "../onboarding/OnboardingSteps";

const Header = async () => {
  const token = cookies().get("Token")?.value;
  const user = await UserMethods.getMeFetch(token);
  const {
    user_status: { id },
  } = user;

  if (id === UserStatus.Seller) {
    return <SellerHeader user={user} />;
  } else if (id === UserStatus.Member) {
    return <MemberHeader />;
  } else if (
    id === UserStatus.Selvregistrering ||
    id === UserStatus.FullService
  ) {
    return <OnboardingSteps user={user} />;
  }
};

export default Header;
