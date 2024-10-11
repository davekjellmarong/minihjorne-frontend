import React from "react";
import { User } from "@phosphor-icons/react/dist/ssr";
import { SellerMethods } from "@/queryFactory/Seller";
interface SalgsprofilHeaderProps {
  id: string | number;
}
const SalgsprofilHeader = async ({ id }: SalgsprofilHeaderProps) => {
  const seller = await SellerMethods.getById(id);
  const description = seller.attributes.description
    ?.split("\n")
    .map((item, index) => {
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
      <div className="flex items-center justify-center gap-14">
        <p className="text-center text-lg font-semibold">
          {seller.attributes.header}
        </p>
      </div>
      <p className="flex items-center justify-center gap-1 text-center text-gray-500">
        <User size={28} />
        <span>{seller.attributes.username}</span>
      </p>
      <div className="max-w-[500px] px-6 text-sm">{description}</div>
    </>
  );
};

export default SalgsprofilHeader;
