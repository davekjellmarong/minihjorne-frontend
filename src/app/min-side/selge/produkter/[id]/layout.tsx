import { ProductQueries } from "@/reactQuery/ProductQueryFactory";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React from "react";

const layout = async ({
  children,
  params,
}: {
  params: { id: string };
  children: any;
}) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(ProductQueries.detail(params.id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default layout;
