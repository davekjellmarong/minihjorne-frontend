import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React from "react";
import ProductPage from "./ProductPage";
import { ProductQueries } from "@/queryFactory/ProductQueryFactory";
import { FilterQueries } from "@/queryFactory/FilterQueryFactory";

const ProductProvider = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(ProductQueries.filtered("", 1));
  await queryClient.prefetchQuery(FilterQueries.categories());
  await queryClient.prefetchQuery(FilterQueries.colors());
  await queryClient.prefetchQuery(FilterQueries.sizes());
  await queryClient.prefetchQuery(FilterQueries.tags());
  await queryClient.prefetchQuery(FilterQueries.materials());
  await queryClient.prefetchQuery(FilterQueries.sexes());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductPage />
    </HydrationBoundary>
  );
};

export default ProductProvider;
