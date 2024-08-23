"use client";
import { incrementUserViews } from "@/serverActions/ServerActions";
import { Product, User } from "@/utils/types";
import { User as UserIcon } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";
interface SalgsprofilCardProps {
  user: Product["attributes"]["user"];
}
const SalgsprofilCard = ({ user }: SalgsprofilCardProps) => {
  return (
    <Link
      href={`/profiler/${user.data.id}`}
      className="absolute right-4 top-4 z-10 flex rounded border-brand-400 bg-white px-4 py-2 shadow shadow-orange-200"
      onClick={() => incrementUserViews(user.data.id)}
    >
      <p className="text-sm text-purple-500">{user.data.attributes.username}</p>
      <UserIcon size={22} />
    </Link>
  );
};

export default SalgsprofilCard;
