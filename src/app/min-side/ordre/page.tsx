"use client";
import { EmptyList } from "@/components/organisms/EmptyList";
import Loading from "@/components/molecules/loading/Loading";
import { LoginUser, OrdersRQ } from "@/utils/types";
import { OrderMethods } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import OrdersTable from "@/components/orders/OrdersTable";

const Ordre = () => {
  const router = useRouter();
  const { data: jwt } = useQuery({
    queryKey: ["jwt"],
  });
  const { data: userData } = useQuery<LoginUser>({
    queryKey: ["login-user"],
  });
  const { data: orders, isPending: loading } = useQuery<OrdersRQ>({
    queryKey: ["orders"],
    queryFn: () => OrderMethods.getByUserId(userData?.id, jwt),
    enabled: !!jwt && !!userData?.id,
  });
  const tailwindColors: any = {
    Blå: "text-blue-900 bg-blue-300",
    Grønn: "text-green-900 bg-green-300",
    Gul: "text-yellow-900 bg-yellow-300",
    Oransje: "text-orange-900 bg-orange-300",
  };
  if (loading) return <Loading />;
  if (!orders?.data)
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
      <OrdersTable orders={orders.data} />
    </div>
  );
};

export default Ordre;
