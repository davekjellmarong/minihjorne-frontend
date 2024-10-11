"use client";
import { Button } from "@/components/UI/button";
import { ProductQueries } from "@/queryFactory/Product";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";

const LastProductsPage = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const { data: products } = useSuspenseQuery(
    ProductQueries.searchParamsTest(params.toString()),
  );
  if (products.meta.pagination.pageCount === products.meta.pagination.page)
    return (
      <div>
        <Button>Se alle produkter</Button>
      </div>
    );
};

export default LastProductsPage;
