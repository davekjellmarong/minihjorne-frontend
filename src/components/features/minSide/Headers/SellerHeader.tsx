import React from "react";
import { SellerGetMe } from "@/utils/types";
import NewDeliveryCard from "../levering/NewDeliveryCard";
import UserInfoCard from "../cards/UserInfoCard";
interface SellerHeaderProps {
  user: SellerGetMe;
}
const SellerHeader = ({ user }: SellerHeaderProps) => {
  return (
    <>
      <UserInfoCard user={user} />
      <NewDeliveryCard />
    </>
  );
};

export default SellerHeader;
