import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React from "react";
import ProductPage from "./ProductPage";
import { ProductQueries } from "@/queryFactory/ProductQueryFactory";

const ProductProvider = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(ProductQueries.filtered(""));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductPage />
    </HydrationBoundary>
  );
};

export default ProductProvider;
