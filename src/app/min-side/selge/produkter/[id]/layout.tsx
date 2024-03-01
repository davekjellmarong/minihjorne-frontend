import { ProductMethods } from "@/utils/serverUtils";
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
  await queryClient.prefetchQuery({
    queryKey: ["product", params.id],
    queryFn: () => {
      return ProductMethods.getById(params.id);
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default layout;
