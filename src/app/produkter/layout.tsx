import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React, { Suspense } from "react";
import { ProductQueries } from "@/queryFactory/Product";
import { FilterQueries } from "@/queryFactory/Filter";

interface LayoutProps {
  children: any;
}

const layout = async ({ children }: LayoutProps) => {
  const queryClient = new QueryClient();
  // to-do group featch or prefetch and cache infitite somewere
  await queryClient.prefetchQuery(ProductQueries.filtered(""));
  await queryClient.prefetchQuery(FilterQueries.categories());
  await queryClient.prefetchQuery(FilterQueries.colors());
  await queryClient.prefetchQuery(FilterQueries.sizes());
  await queryClient.prefetchQuery(FilterQueries.tags());
  await queryClient.prefetchQuery(FilterQueries.materials());
  await queryClient.prefetchQuery(FilterQueries.sexes());
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default layout;
