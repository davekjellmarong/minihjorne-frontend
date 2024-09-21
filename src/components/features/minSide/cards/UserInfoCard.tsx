import { Separator } from "@radix-ui/react-dropdown-menu";
import React from "react";
import AvatarLetter from "../AvatarLetter";
import { SellerGetMe } from "@/utils/types";
interface UserInfoCardProps {
  user: SellerGetMe;
}
const UserInfoCard = ({ user }: UserInfoCardProps) => {
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-4">
        <AvatarLetter username={user.username} admin={user.admin} />
        <div>
          <div className="text-xl font-bold">{user.username}</div>
          <div className="text-sm text-[#666666]">{user.email}</div>
        </div>
      </div>
      <Separator className="border-[#e5e5e5]" />
      <div className="grid gap-2">
        <div className="grid grid-cols-[120px_1fr] items-center gap-2">
          <div className="text-sm text-[#666666]">Kontoype</div>
          <div className="text-sm">{user.seller ? "Selger" : "Medlem"}</div>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-2">
          <div className="text-sm text-[#666666]">Registrert</div>
          <div className="text-sm">{user.createdAt.slice(0, 10)}</div>
        </div>
        {/* <div className="grid grid-cols-[120px_1fr] items-center gap-2">
          <div className="text-sm text-[#666666]">Abonnement</div>
          <div className="text-sm">Bedrift</div>
        </div> */}
      </div>
    </div>
  );
};

export default UserInfoCard;
