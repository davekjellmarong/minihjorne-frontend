import { UserMethods } from "@/queryFactory/User";
import React from "react";
import AvatarLetter from "./AvatarLetter";
import { cookies } from "next/headers";

const Header = async () => {
  const token = cookies().get("Token")?.value;
  const user = await UserMethods.getMe(token)
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

export default Header;
