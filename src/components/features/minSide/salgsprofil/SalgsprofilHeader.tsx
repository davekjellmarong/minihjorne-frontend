import React from "react";
import { User } from "@phosphor-icons/react";
import { UserBackend } from "@/utils/types";

interface SalgsprofilHeaderProps {
  user: UserBackend;
  username: string;
}
const SalgsprofilHeader = ({ user, username }: SalgsprofilHeaderProps) => {
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
        <span>{username}</span>
      </p>
      <p className="max-w-[500px] px-6 text-sm">{description}</p>
    </>
  );
};

export default SalgsprofilHeader;
