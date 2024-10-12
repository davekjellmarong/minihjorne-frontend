"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import { incrementSellerViews } from "@/serverActions/ServerActions";
import { Seller } from "@/utils/types";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import React from "react";
interface QuickLinkProps {
  seller: { data: Seller };
}
const QuickLink = ({ seller }: QuickLinkProps) => {
  const posthog = usePostHog();

  return (
    <Link
      href={`/salgsprofiler/${seller.data.id}`}
      className="flex items-center gap-2"
      onClick={() => {
        incrementSellerViews(seller.data.id);
        posthog.capture("seller_view", {
          type: "quick_link",
          id: seller.data.id,
          username: seller.data.attributes.username,
        });
      }}
    >
      <Avatar className="size-10">
        <AvatarImage src="/placeholder-user.jpg" alt="Seller Name" />
        <AvatarFallback className="border border-gray-300 bg-transparent">
          {seller.data.attributes.username.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-semibold">{seller.data.attributes.header}</h3>
        <div className="text-[#7d6adf] ">{seller.data.attributes.username}</div>
      </div>
    </Link>
  );
};

export default QuickLink;
