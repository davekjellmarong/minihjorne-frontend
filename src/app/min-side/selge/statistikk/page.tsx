"use client";
import LineReChart from "@/components/features/minSide/statistikk/LineChart";
import StatsCard from "@/components/features/minSide/statistikk/StatsCard";
import { getProductsStats } from "@/components/features/minSide/statistikk/utils";
import { AuthQueries } from "@/queryFactory/Auth";
import { ProductQueries } from "@/queryFactory/Product";
import { UserQueries } from "@/queryFactory/User";
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

        <LineReChart user={user} products={products} />
      </div>
    </div>
  );
};

export default Page;
