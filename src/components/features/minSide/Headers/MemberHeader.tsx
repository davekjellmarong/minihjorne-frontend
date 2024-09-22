import React from "react";
import ActionsColoredBox from "@/components/UI/common/ActionColoredBox";
import UserInfoCard from "../cards/UserInfoCard";
import { SellerGetMe } from "@/utils/types";
import BecomeSeller from "../cards/BecomeSeller";
interface MemberHeaderProps {
  user: SellerGetMe;
}
const MemberHeader = ({ user }: MemberHeaderProps) => {
  return (
    <div className="space-y-6">
      <BecomeSeller />
      <UserInfoCard user={user} />
    </div>
  );
};

export default MemberHeader;
