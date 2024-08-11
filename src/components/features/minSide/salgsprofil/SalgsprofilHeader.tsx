"use client";
import React from "react";
import { User } from "@phosphor-icons/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { UserQueries } from "@/queryFactory/User";
import { useParams } from "next/navigation";
interface SalgsprofilHeaderProps {
  userId?: number;
}
const SalgsprofilHeader = ({ userId }: SalgsprofilHeaderProps) => {
  const { id } = useParams();
  let userIdNumber = id ? id : userId;
  const { data: user } = useSuspenseQuery(UserQueries.detail(userIdNumber));
  const description = user.description?.split("\n").map((item, index) => {
    if (item === "") {
      return (
        <React.Fragment key={index}>
          <br />
        </React.Fragment>
      );
    } else {
      return <p key={index}>{item}</p>;
    }
  });
  return (
    <>
      <div className="flex items-center gap-14">
        <p className="text-lg font-semibold">{user.header}</p>
      </div>
      <p className="flex items-center gap-1 text-gray-500">
        <User size={28} />
        <span>{user.username}</span>
      </p>
      <p className="max-w-[500px] px-6 text-sm">{description}</p>
    </>
  );
};

export default SalgsprofilHeader;
