"use client";
import { OrderRQ, ProductsRQ } from "@/utils/types";
import { OrderMethods, ProductsMethods } from "@/utils/utils";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import OrderTable from "@/components/orders/OrderTable";

const Page = () => {
  const { id } = useParams();
  const { data: jwt } = useSuspenseQuery({ queryKey: ["jwt"] });
  const { data: order } = useSuspenseQuery<OrderRQ>({
    queryKey: ["order", id],
    queryFn: () => OrderMethods.getById(id, jwt),
  });
  const { data: products } = useSuspenseQuery<ProductsRQ>({
    queryKey: ["products", order?.data.id],
    queryFn: () => ProductsMethods.getByOrderId(order?.data.id, jwt),
  });
  return (
    <div>
      <OrderTable products={products.data} />
    </div>
  );
};

export default Page;
