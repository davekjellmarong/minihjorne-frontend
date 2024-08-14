import React, { use } from "react";
import { User } from "@phosphor-icons/react/dist/ssr";
import { UserMethods } from "@/queryFactory/User";
interface SalgsprofilHeaderProps {
  id: string | number;
}
const SalgsprofilHeader = async ({ id }: SalgsprofilHeaderProps) => {
  const userData = await UserMethods.getById(id);
  const description = userData.description?.split("\n").map((item, index) => {
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
        <p className="text-lg font-semibold">{userData.header}</p>
      </div>
      <p className="flex items-center gap-1 text-gray-500">
        <User size={28} />
        <span>{userData.username}</span>
      </p>
      <div className="max-w-[500px] px-6 text-sm">{description}</div>
    </>
  );
};

export default SalgsprofilHeader;
