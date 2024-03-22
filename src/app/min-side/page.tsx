"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import AvatarLetter from "@/components/molecules/AvatarLetter";
import Menu from "../../components/organisms/minSide/Menu";

interface UserData {
  username: string;
  id: number;
  email: string;
}
const MinSide = () => {
  const { data: userData } = useQuery<UserData>({
    queryKey: ["login-user"],
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 bg-brand-200 pb-24 pt-14">
        <div className="flex justify-center ">
          <AvatarLetter username={userData?.username} />
        </div>
        <p className="text-center text-lg font-semibold">
          {userData?.username}
        </p>
      </div>

      <Menu />
    </div>
  );
};
export default MinSide;
