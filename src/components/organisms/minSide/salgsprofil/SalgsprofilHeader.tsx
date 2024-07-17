import React from "react";
import {
  Baby,
  Bird,
  HeartStraight,
  Leaf,
  Rainbow,
  Star,
  User,
} from "@phosphor-icons/react";
import { UserBackend } from "@/utils/types";

interface SalgsprofilHeaderProps {
  user: UserBackend;
  username: string;
}
const SalgsprofilHeader = ({ user, username }: SalgsprofilHeaderProps) => {
  const icons: any = {
    Star: {
      component: <Star size={52} weight="fill" color={user.color} />,
      title: "Star",
    },
    HeartStraight: {
      component: <HeartStraight size={52} weight="fill" color={user.color} />,
      title: "HeartStraight",
    },
    Baby: {
      component: <Baby size={52} weight="fill" color={user.color} />,
      title: "Baby",
    },
    Rainbow: {
      component: <Rainbow size={52} weight="fill" color={user.color} />,
      title: "Rainbow",
    },
    Leaf: {
      component: <Leaf size={52} weight="fill" color={user.color} />,
      title: "Leaf",
    },
    Bird: {
      component: <Bird size={52} weight="fill" color={user.color} />,
      title: "Bird",
    },
  };
  return (
    <>
      <div className="flex items-center gap-14">
        {/* {icons[user.icon]?.component} */}
        <p className="text-lg font-semibold">{user.header}</p>
        {/* {icons[user.icon]?.component} */}
      </div>
      <p className="flex items-center gap-1 text-gray-500">
        <User size={28} />
        <span>{username}</span>
      </p>
      <p className="max-w-[500px] px-6 text-sm">{user.description}</p>
    </>
  );
};

export default SalgsprofilHeader;
