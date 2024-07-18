import Loading from "@/components/common/loading/Loading";
import { ProductQueries } from "@/reactQuery/ProductQueryFactory";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React, { Suspense } from "react";

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
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </HydrationBoundary>
  );
};

export default layout;
