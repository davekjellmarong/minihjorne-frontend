"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { UserQueries } from "@/reactQuery/UserQueryFactory";
import { useCookies } from "react-cookie";
import AvatarLetter from "@/components/features/minSide/AvatarLetter";
import Menu from "@/components/features/minSide/Menu";

const MinSide = () => {
  const [cookies] = useCookies(["Token"]);
  const { data: user } = useSuspenseQuery(UserQueries.me(cookies.Token));

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 bg-brand-200 pb-24 pt-14">
        <div className="flex justify-center ">
          <AvatarLetter username={user.username} />
        </div>
        <div>
          <p className="text-center text-lg font-semibold">{user.username}</p>
          <p className="text-center text-sm">{user.email}</p>
        </div>
      </div>
      <Menu />
    </div>
  );
};
export default MinSide;
