import React from "react";
import ProgressBar from "./ProgressBar";
import {
  CurrencyDollar,
  Eye,
  ShoppingCart,
  TShirt,
  User,
} from "@phosphor-icons/react";
interface StatsCardProps {
  percentage?: number;
  result: number;
  children: React.ReactNode;
  icon: "CurrencyDollar" | "Eye" | "ShoppingCart" | "TShirt" | "User";
  header: string;
  krLabel?: boolean;
}
const StatsCard = ({
  percentage,
  result,
  children,
  icon,
  header,
  krLabel = false,
}: StatsCardProps) => {
  const Icon = {
    CurrencyDollar: <CurrencyDollar size={22} color="gray" />,
    Eye: <Eye size={22} color="gray" />,
    ShoppingCart: <ShoppingCart size={22} color="gray" />,
    TShirt: <TShirt size={22} color="gray" />,
    User: <User size={22} color="gray" />,
  };
  return (
    <div className=" rounded p-6 shadow">
      {percentage && <ProgressBar percentage={percentage} />}
      <div className="flex flex-col gap-2 pt-3">
        <div className="flex items-center">
          {Icon[icon]}
          <p className="text-sm text-gray-400">&nbsp;{header}</p>
        </div>
        <p className="text-3xl font-semibold text-green-500 ">
          {result ? result : 0}
          {krLabel && " kr"}
        </p>
        <p className="text-xs italic text-gray-400">{children}</p>
      </div>
    </div>
  );
};

export default StatsCard;
