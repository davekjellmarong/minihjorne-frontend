"use client";
import Loading from "@/components/common/loading/Loading";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import React, { Suspense, useEffect } from "react";
import OrdersTable from "@/components/features/orders/OrdersTable";
import { AuthQueries } from "@/queryFactory/Auth";
import { UserQueries } from "@/queryFactory/User";
import { OrderQueries } from "@/queryFactory/Order";
import { EmptyList } from "@/components/common/EmptyList";
import { useSearchParams } from "next/navigation";
import { clearCartInLocalStorage } from "@/utils/CartUtils";

const Ordre = () => {
  const queryClient = useQueryClient();

  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: user } = useSuspenseQuery(UserQueries.me(jwt));
  const { data: orders } = useSuspenseQuery(
    OrderQueries.myOrders(user.id, jwt),
  );
  const payment = useSearchParams().get("payment");
  useEffect(() => {
    if (payment === "success") {
      clearCartInLocalStorage();
    }
  }, [payment]);

  if (orders.length === 0)
    return (
      <EmptyList
        text="Du har ingen ordre"
        path="/produkter?pagination[page]=1"
        buttonLabel="Se produkter"
      />
    );
  return (
    <>
      <h2 className="mb-4 text-center text-2xl font-light">Mine ordre</h2>
      <Suspense fallback={<Loading />}>
        <OrdersTable orders={orders} />
      </Suspense>
    </>
  );
};

export default Ordre;
