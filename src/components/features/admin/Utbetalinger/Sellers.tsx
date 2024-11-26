import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import { SellerMethods } from "@/queryFactory/Seller";
import Link from "next/link";
import React from "react";

const Sellers = async () => {
  const sellers = await SellerMethods.getAll();
  return (
    <div>
      <div className="flex-1 p-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h2 className="text-xl font-bold text-[#333333] dark:text-[#f0f0f0]">
            Selgere
          </h2>
          <ul className="flex flex-col gap-6">
            {sellers.map((seller) => (
              <li
                key={seller.id}
                className={`cursor-pointer rounded-lg bg-[#f0f0f0] p-4 transition-colors hover:bg-[#e5e5e5] dark:bg-[#2c2c2c] dark:hover:bg-[#3c3c3c]`}
              >
                <Link href={`/min-side/admin/utbetalinger/selger/${seller.id}`}>
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt={seller.attributes.username}
                    />
                    <AvatarFallback>
                      {seller.attributes.username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-lg font-bold text-[#333333] dark:text-[#f0f0f0]">
                      {seller.attributes.username}
                    </div>
                    <div className="text-sm text-[#666666] dark:text-[#b0b0b0]">
                      {/* hei du */}
                      {/* {seller.attributes.user.data.attributes.email} */}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
