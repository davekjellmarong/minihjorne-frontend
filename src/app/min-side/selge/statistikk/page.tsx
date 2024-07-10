"use client";
import LineReChart from "@/components/organisms/minSide/statistikk/LineChart";
import ProgressBar from "@/components/organisms/minSide/statistikk/ProgressBar";
import { getProductsStats } from "@/components/organisms/minSide/statistikk/utils";
import { AuthQueries } from "@/reactQuery/AuthQueryFactory";
import { ProductQueries } from "@/reactQuery/ProductQueryFactory";
import { UserQueries } from "@/reactQuery/UserQueryFactory";
import { CurrencyDollar, TShirt } from "@phosphor-icons/react";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import React from "react";

const Page = () => {
  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: products } = useSuspenseQuery(ProductQueries.me_all(jwt));
  const { data: user } = useSuspenseQuery(UserQueries.me(jwt));

  const {
    revenue,
    revenuePercentage,
    remainingRevenue,
    productsSoldPercentage,
    productsSold,
    remainingProducts,
  } = getProductsStats(products);
  return (
    <div className="flex flex-col justify-evenly p-4">
      <div className="flex flex-col gap-10">
        <div className=" rounded p-6 shadow">
          <ProgressBar percentage={revenuePercentage} />
          <div className="flex flex-col gap-2 pt-3">
            <div className="flex items-center">
              <CurrencyDollar size={22} color="gray" />
              <p className="text-sm text-gray-400">&nbsp;Penger tjent</p>
            </div>
            <p className="text-3xl ">{revenue} kr</p>
            <p className="text-xs italic text-gray-400">
              {remainingRevenue} kr resterende
            </p>
          </div>
        </div>
        <div className=" rounded p-6 shadow">
          <ProgressBar percentage={productsSoldPercentage} />
          <div className="flex flex-col gap-2 pt-3">
            <div className="flex items-center">
              <TShirt size={22} color="gray" />
              <p className="text-sm text-gray-400">&nbsp;Produkter solgt</p>
            </div>
            <p className="text-3xl">{productsSold.length}</p>
            <p className="text-xs italic text-gray-400">
              {remainingProducts.length} produkter igjen
            </p>
          </div>
        </div>
        <LineReChart user={user} products={products} />
      </div>
    </div>
  );
};

export default Page;
