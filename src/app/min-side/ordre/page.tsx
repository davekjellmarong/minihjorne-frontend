"use client";
import Loading from "@/components/loading/Loading";
import { ColorsRQ, LoginUser, OrdersRQ } from "@/utils/types";
import { OrderMethods } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
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
  return (
    <div>
      <h2 className="font-light text-2xl mb-4">Mine ordre</h2>
      <table className="w-full">
        <thead className="bg-gray-200 border-2 border-gray-100">
          <tr className="">
            <th className="text-xs text-left pl-4 py-4 font-normal">Nummer</th>
            <th className="text-xs text-left pl-4 py-4 font-normal">Dato</th>
            <th className="text-xs text-right pr-4 py-4 font-normal">Pris</th>
            <th className="text-xs text-left pl-4 py-4 font-normal">Antall</th>
            <th className="text-xs text-left pl-4 py-4 font-normal">Status</th>
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
              options
            );
            const formattedDateWithoutDot = formattedDate.replace(/\./g, "");

            return (
              <tr
                key={order.attributes.guid}
                onClick={() => {
                  router.push(`/min-side/ordre/${order.id}`);
                }}
                className="border-2 border-gray-100 hover:bg-gray-100 cursor-pointer"
              >
                <td className=" text-sm py-5 px-4 text-left">#{order.id}</td>
                <td className=" text-sm py-5 px-4 text-left font-semibold">
                  {formattedDateWithoutDot}
                </td>
                <td className="text-sm py-5 px-4 text-right text-gray-500">
                  kr {order.attributes.amount}
                </td>
                <td className="text-sm py-5 px-4 text-left text-gray-500">
                  {order.attributes.products?.data.length} stk
                </td>
                {/* <td className={` py-4 px-10 text-gray-500 ${color?.tailwind}`}> */}
                <td className={` py-3 px-4  `}>
                  <p
                    className={`text-blue-700 text-xs bg-blue-300 p-2 rounded ${color} text-center`}
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
