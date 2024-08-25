"use client";
import LineReChart from "@/components/features/minSide/statistikk/LineChart";
import ProgressBar from "@/components/features/minSide/statistikk/ProgressBar";
import StatsCard from "@/components/features/minSide/statistikk/StatsCard";
import { getProductsStats } from "@/components/features/minSide/statistikk/utils";
import { AuthQueries } from "@/queryFactory/Auth";
import { ProductQueries } from "@/queryFactory/Product";
import { UserQueries } from "@/queryFactory/User";
import {
  CurrencyDollar,
  Eye,
  ShoppingCart,
  TShirt,
  User,
} from "@phosphor-icons/react";
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
    productViews,
    productsAddedToCarts,
  } = getProductsStats(products);
  return (
    <div className="flex flex-col justify-evenly p-4">
      <div className="flex flex-col gap-10">
        <StatsCard
          percentage={revenuePercentage}
          result={revenue}
          icon="CurrencyDollar"
          header="Penger tjent"
          krLabel
        >
          {remainingRevenue} kr resterende
        </StatsCard>
        <StatsCard
          percentage={productsSoldPercentage}
          result={productsSold.length}
          icon="TShirt"
          header="Produkter solgt"
        >
          {remainingProducts.length} produkter igjen
        </StatsCard>
        <StatsCard result={productViews} icon="Eye" header="Produkter vist">
          Totalt antall visninger av dine produkter
        </StatsCard>
        <StatsCard
          result={productsAddedToCarts}
          header="Lagt til i handlevogn"
          icon="ShoppingCart"
        >
          Produktene dine er lagt til i handlevogner så mange ganger
        </StatsCard>
        <StatsCard result={user.views} header="Profilvisninger" icon="User">
          Totalt antall visninger av din brukerprofil
        </StatsCard>

        {/* <div className="rounded p-6 shadow">
          <div className="flex flex-col gap-2 pt-3">
            <div className="flex items-center">
              <Eye size={22} color="gray" />
              <p className="text-sm text-gray-400">&nbsp;Produkter vist</p>
            </div>
            <p className="text-3xl font-semibold text-green-500">
              {productViews} visninger
            </p>
            <p className="text-xs italic text-gray-400">
              Totalt antall visninger av dine produkter
            </p>
          </div>
        </div>
        <div className="rounded p-6 shadow">
          <div className="flex flex-col gap-2 pt-3">
            <div className="flex items-center">
              <ShoppingCart size={22} color="gray" />
              <p className="text-sm text-gray-400">
                &nbsp;Lagt til i handlevogn
              </p>
            </div>
            <p className="text-3xl font-semibold text-green-500">
              {productsAddedToCarts} ganger
            </p>
            <p className="text-xs italic text-gray-400">
              Produktene dine er lagt til i handlevogner så mange ganger
            </p>
          </div>
        </div>
        <div className="rounded p-6 shadow">
          <div className="flex flex-col gap-2 pt-3">
            <div className="flex items-center">
              <User size={22} color="gray" />
              <p className="text-sm text-gray-400">&nbsp;Profilvisninger</p>
            </div>
            <p className="text-3xl font-semibold text-green-500">
              {user.views} visninger
            </p>
            <p className="text-xs italic text-gray-400">
              Totalt antall visninger av din brukerprofil
            </p>
          </div>
        </div>
        <div className=" rounded p-6 shadow">
          <ProgressBar percentage={revenuePercentage} />
          <div className="flex flex-col gap-2 pt-3">
            <div className="flex items-center">
              <CurrencyDollar size={22} color="gray" />
              <p className="text-sm text-gray-400">&nbsp;Penger tjent</p>
            </div>
            <p className="text-3xl font-semibold text-green-500 ">
              {revenue} kr
            </p>
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
            <p className="text-3xl font-semibold text-green-500">
              {productsSold.length}
            </p>
            <p className="text-xs italic text-gray-400">
              {remainingProducts.length} produkter igjen
            </p>
          </div>
        </div> */}
        <LineReChart user={user} products={products} />
      </div>
    </div>
  );
};

export default Page;
