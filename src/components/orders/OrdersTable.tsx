"use client";
import ProductStatusChip from "@/components/organisms/ProductStatusChip";
import { Order, ProductBackend } from "@/utils/types";
import Image from "next/image";

import { useRouter } from "next/navigation";
import React from "react";

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable = ({ orders }: OrdersTableProps) => {
  const tailwindColors: any = {
    Blå: "text-blue-900 bg-blue-300",
    Grønn: "text-green-900 bg-green-300",
    Gul: "text-yellow-900 bg-yellow-300",
    Oransje: "text-orange-900 bg-orange-300",
  };
  const router = useRouter();
  return (
    <>
      <table className="m-auto w-full max-w-[700px]">
        <thead className="border-indigo-100  bg-indigo-400">
          <tr className="">
            <th className="py-4 pl-5 text-left text-xs font-normal text-white">
              Ordre nr
            </th>
            <th className="py-4 pl-4 text-left text-xs font-normal text-white">
              Dato
            </th>
            <th className="py-4 pr-4 text-right text-xs font-normal text-white">
              Pris
            </th>
            <th className="py-4 pl-4 text-left text-xs font-normal text-white">
              Antall
            </th>
            <th className="py-4 pl-4 text-left text-xs font-normal text-white">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
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
    </>
  );
};

export default OrdersTable;
