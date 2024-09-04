import { UserMethods } from "@/queryFactory/User";
import React from "react";
import { cookies } from "next/headers";
import { UserStatus } from "@/utils/Enums";
import SelvregistreringSteps from "../onboarding/SelvregistreringSteps";
import FullServiceSteps from "../onboarding/FullServiceSteps";
import SellerHeader from "./Headers/SellerHeader";
import MemberHeader from "./Headers/MemberHeader";

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
  } else if (id === UserStatus.Selvregistrering) {
    return <SelvregistreringSteps user={user} />;
  } else if (id === UserStatus.FullService) {
    return <FullServiceSteps user={user} />;
  }
};

export default Header;
