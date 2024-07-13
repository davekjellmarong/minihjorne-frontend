"use client";
import { EmptyList } from "@/components/organisms/EmptyList";
import Loading from "@/components/molecules/loading/Loading";
import {
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import React, { Suspense } from "react";
import OrdersTable from "@/components/orders/OrdersTable";
import { AuthQueries } from "@/reactQuery/AuthQueryFactory";
import { UserQueries } from "@/reactQuery/UserQueryFactory";
import { OrderQueries } from "@/reactQuery/OrderQueryFactory";

const Ordre = () => {
  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: user } = useSuspenseQuery(UserQueries.me(jwt));
  const { data: orders } = useSuspenseQuery(
    OrderQueries.myOrders(user.id, jwt),
  );

  if (orders.length === 0)
    return (
      <EmptyList
        text="Du har ingen ordre"
        path="/produkter"
        buttonLabel="Se produkter"
      />
    );
  return (
    <div>
      <h2 className="mb-4 text-center text-2xl font-light">Mine ordre</h2>
      <Suspense fallback={<Loading />}>
        <OrdersTable orders={orders} />
      </Suspense>
    </div>
  );
};

export default Ordre;
