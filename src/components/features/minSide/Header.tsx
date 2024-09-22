import React from "react";
import { cookies } from "next/headers";
import SellerHeader from "./Headers/SellerHeader";
import MemberHeader from "./Headers/MemberHeader";
import { SellerMethods } from "@/queryFactory/Seller";
import OnboardingSteps from "./cards/OnboardingSteps";
import OnboardingHeader from "./Headers/OnboardingHeader";

const Header = async () => {
  const token = cookies().get("Token")?.value;
  // CHECK FOR DELIVERY INSTEAD OF USERSTATUS
  const user = await SellerMethods.getMe(token);
  if (!user.seller) {
    return <MemberHeader user={user} />;
  }

  const activeDelivery = user.seller?.deliveries?.find(
    (delivery) => delivery.inProgress,
  );

  if (activeDelivery) {
    return <OnboardingHeader user={user} />;
  } else return <SellerHeader user={user} />;
};

export default Header;
