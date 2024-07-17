import React, { Suspense } from "react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { UserQueries } from "@/reactQuery/UserQueryFactory";
import Loading from "@/components/molecules/loading/Loading";
import { ProductQueries } from "@/reactQuery/ProductQueryFactory";
import { cookies } from "next/headers";

const Provider = async ({
  params,
  children,
}: {
  children: any;
  params: { id: string };
}) => {
  const queryClient = new QueryClient();
  const cookieStore: any = cookies();

  const token = cookieStore.get("Token");
  await queryClient.prefetchQuery(UserQueries.detail(params.id));
  await queryClient.prefetchQuery(ProductQueries.userId(params.id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </HydrationBoundary>
  );
};

export default Provider;
