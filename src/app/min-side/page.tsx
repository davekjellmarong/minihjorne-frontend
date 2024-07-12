"use client";
import {
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import React from "react";
import AvatarLetter from "@/components/molecules/AvatarLetter";
import Menu from "../../components/organisms/minSide/Menu";
import { UserQueries } from "@/reactQuery/UserQueryFactory";
import { useCookies } from "react-cookie";

const MinSide = () => {
  const [cookies] = useCookies(["Token"]);
  const { data: user } = useSuspenseQuery(UserQueries.me(cookies.Token));
  console.log(user);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 bg-brand-200 pb-24 pt-14">
        <div className="flex justify-center ">
          <AvatarLetter username={user.username} />
        </div>
        <p className="text-center text-lg font-semibold">{user.username}</p>
      </div>
      <Menu />
    </div>
  );
};
export default MinSide;
