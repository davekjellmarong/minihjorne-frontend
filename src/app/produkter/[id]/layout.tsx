import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { ProductQueries } from "@/query/product/QueryFactory";

const Provider = async ({
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

export default Provider;