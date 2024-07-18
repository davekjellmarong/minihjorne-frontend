"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import OrderTable from "@/components/features/orders/OrderTable";
import { AuthQueries } from "@/reactQuery/AuthQueryFactory";
import { ProductQueries } from "@/reactQuery/ProductQueryFactory";

const Page = () => {
  const { id } = useParams();
  const { data: jwt } = useSuspenseQuery(AuthQueries.jwt());
  const { data: products } = useSuspenseQuery(ProductQueries.orderId(id, jwt));
  return <OrderTable products={products} />;
};

export default Page;
