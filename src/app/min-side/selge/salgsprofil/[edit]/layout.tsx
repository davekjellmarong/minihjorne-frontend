import { FilterQueries } from "@/queryFactory/Filter";
import { SellerQueries } from "@/queryFactory/Seller";
import { UserQueries } from "@/queryFactory/User";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import React from "react";

const layout = async ({ children }: any) => {
  const queryClient = new QueryClient();
  const cookieStore: any = cookies();

  const token = cookieStore.get("Token");
  await queryClient.prefetchQuery(SellerQueries.me(token.value));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default layout;
