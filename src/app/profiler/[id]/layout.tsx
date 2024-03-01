import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { UserMethods, UserQueries } from "@/query/user/QueryFactory";

const Provider = async ({
  params,
  children,
}: {
  children: any;
  params: { id: string };
}) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(UserQueries.detail(params.id));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default Provider;
