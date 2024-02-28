import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React from "react";
import ProductPage from "./ProductPage";
import { fetchProductsFiltered } from "@/utils/serverUtils";
import ProductSkeleton from "@/components/skeleton/SmallProductSkeleton";

const ProductProvider = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["product", ""],
    queryFn: async () => fetchProductsFiltered(""),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductPage />
    </HydrationBoundary>
  );
};

export default ProductProvider;
