import React from "react";
import AvatarLetter from "../AvatarLetter";
import { UserBackend } from "@/utils/types";
interface SellerHeaderProps {
  user: UserBackend;
}
const SellerHeader = ({ user }: SellerHeaderProps) => {
  return (
    <>
      <div className="flex justify-center ">
        <AvatarLetter username={user.username} admin={user.admin} />
      </div>
      <div>
        <p className="text-center text-lg font-semibold">{user.username}</p>
        <p className="text-center text-sm">{user.email}</p>
      </div>
    </>
  );
};

export default SellerHeader;
