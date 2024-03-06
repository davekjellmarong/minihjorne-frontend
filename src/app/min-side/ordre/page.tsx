"use client";
import { EmptyList } from "@/components/empty/EmptyList";
import Loading from "@/components/loading/Loading";
import { LoginUser, OrdersRQ } from "@/utils/types";
import { OrderMethods } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

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
  if (orders?.data.length === 0)
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
      <table className="w-full">
        <thead className="border-2 border-gray-100 bg-gray-200">
          <tr className="">
            <th className="py-4 pl-4 text-left text-xs font-normal">Nummer</th>
            <th className="py-4 pl-4 text-left text-xs font-normal">Dato</th>
            <th className="py-4 pr-4 text-right text-xs font-normal">Pris</th>
            <th className="py-4 pl-4 text-left text-xs font-normal">Antall</th>
            <th className="py-4 pl-4 text-left text-xs font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders?.data.map((order) => {
            const color =
              tailwindColors[order.attributes.status.data?.attributes.farge];

            const dateObject = new Date(order.attributes.createdAt);

            const options: any = {
              year: "numeric",
              month: "short",
              day: "numeric",
            };
            const formattedDate = dateObject.toLocaleDateString(
              "no-NO",
              options,
            );
            const formattedDateWithoutDot = formattedDate.replace(/\./g, "");

            return (
              <tr
                key={order.attributes.guid}
                onClick={() => {
                  router.push(`/min-side/ordre/${order.id}`);
                }}
                className="cursor-pointer border-2 border-gray-100 sm:hover:bg-gray-100"
              >
                <td className=" px-4 py-5 text-left text-sm">#{order.id}</td>
                <td className=" px-4 py-5 text-left text-sm font-semibold">
                  {formattedDateWithoutDot}
                </td>
                <td className="px-4 py-5 text-right text-sm text-gray-500">
                  kr {order.attributes.amount}
                </td>
                <td className="px-4 py-5 text-left text-sm text-gray-500">
                  {order.attributes.products?.data.length} stk
                </td>
                {/* <td className={` py-4 px-10 text-gray-500 ${color?.tailwind}`}> */}
                <td className={` px-4 py-3  `}>
                  <p
                    className={`rounded bg-blue-300 p-2 text-xs text-blue-700 ${color} text-center`}
                  >
                    {order.attributes.status.data?.attributes.name}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Ordre;
