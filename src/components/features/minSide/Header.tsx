"use client";
import { UserQueries } from "@/queryFactory/User";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { useCookies } from "react-cookie";
import AvatarLetter from "./AvatarLetter";

const Header = () => {
  const [cookies] = useCookies(["Token"]);
  const { data: user } = useSuspenseQuery(UserQueries.me(cookies.Token));
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
