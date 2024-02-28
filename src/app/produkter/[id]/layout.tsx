import React from "react";
import ProductDetail from "../../../components/productDetail/ProductDetail";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import {
  ServerProductMethods,
  fetchProductsFiltered,
} from "@/utils/serverUtils";
import LargeProductSkeleton from "@/components/skeleton/LargeProductSkeleton";

const Provider = async ({
  children,
  params,
}: {
  params: { id: string };
  children: any;
}) => {
  const queryClient = new QueryClient();
  console.log(params.id);
  await queryClient.prefetchQuery({
    queryKey: ["product", params.id],
    queryFn: () => {
      return ServerProductMethods.getById(params.id);
    },
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default Provider;
