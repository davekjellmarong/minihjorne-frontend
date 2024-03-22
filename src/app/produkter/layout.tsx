import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React from "react";
import { ProductQueries } from "@/reactQuery/ProductQueryFactory";
import { FilterQueries } from "@/reactQuery/FilterQueryFactory";

interface LayoutProps {
  children: any;
}
const layout = async ({ children }: LayoutProps) => {
  const queryClient = new QueryClient();

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
