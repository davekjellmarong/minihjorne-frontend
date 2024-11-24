import { SellerMethods } from "@/queryFactory/Seller";
import Link from "next/link";
import React from "react";

const page = async () => {
  const sellers = await SellerMethods.getAll();

    return <div>
      
        <div className="flex-1 p-4 space-y-4 bg-[#f0f4f8] dark:bg-[#1a1b1e]">
        <div className="bg-white dark:bg-[#2c2c2c] rounded-lg p-4 space-y-4 border border-[#e5e5e5] dark:border-[#2c2c2c]">
          <h2 className="text-xl font-bold text-[#333333] dark:text-[#f0f0f0]">Selgere</h2>
          <ul className="space-y-2">
            {sellers.map((seller) => (
                <Link
                    href={`/min-side/admin/utbetalinger/selger/${seller.id}`}
                key={seller.id}
                className={`bg-[#f0f0f0] dark:bg-[#2c2c2c] rounded-lg p-4 cursor-pointer transition-colors hover:bg-[#e5e5e5] dark:hover:bg-[#3c3c3c] ${
                  selectedSeller?.id === seller.id ? "bg-[#e5e5e5] dark:bg-[#3c3c3c]" : ""
                }`}
                onClick={() => setSelectedSeller(seller)}
              >
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder-user.jpg" alt={seller.name} />
                    <AvatarFallback>{seller.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-lg font-bold text-[#333333] dark:text-[#f0f0f0]">{seller.name}</div>
                    <div className="text-sm text-[#666666] dark:text-[#b0b0b0]">{seller.email}</div>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>

  </div>;
};

export default page;
