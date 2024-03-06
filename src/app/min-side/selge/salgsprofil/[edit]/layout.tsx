import { FilterQueries } from "@/queryFactory/FilterQueryFactory";
import { UserQueries } from "@/queryFactory/UserQueryFactory";
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
  await queryClient.prefetchQuery(UserQueries.me(token.value));
  await queryClient.prefetchQuery(FilterQueries.colors());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default layout;
