"use client";
import ColorSquares from "@/components/organisms/filters/color/ColorSquares";
import Loading from "@/components/molecules/loading/Loading";
import { baseUrl, tailwindColors } from "@/utils/constants";
import { OrderRQ, ProductsRQ } from "@/utils/types";
import { OrderMethods, ProductsMethods } from "@/utils/utils";
import { ArrowArcLeft, ArrowCircleLeft } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data: jwt } = useQuery({ queryKey: ["jwt"] });
  const { data: order, isPending } = useQuery<OrderRQ>({
    queryKey: ["order", id],
    queryFn: () => OrderMethods.getById(id, jwt),
    enabled: !!jwt,
  });
  const { data: products } = useQuery<ProductsRQ>({
    queryKey: ["products", order?.data.id],
    queryFn: () => ProductsMethods.getByOrderId(order?.data.id, jwt),
    enabled: !!order?.data.id,
  });
  if (isPending) return <Loading />;
  return (
    <div>
      {id}
      {order?.data.attributes.address}
      {order?.data.attributes.amount}
      {order?.data.attributes.city}
      {order?.data.attributes.postalCode}
      <table className="w-full">
        <thead className="border-2 border-gray-100 bg-gray-100">
          <tr>
            <th className="py-4 pl-10 text-left text-sm font-normal">
              Kategori
            </th>
            <th className="py-4 pl-10 text-left text-sm font-normal">Str</th>
            <th className="py-4 pl-10 text-left text-sm font-normal">Farger</th>
            <th className="py-4 pr-10 text-right text-sm font-normal">Pris</th>
            <th className="py-4 pl-10 text-left text-sm font-normal">Bilde</th>
          </tr>
        </thead>
        <tbody>
          {products?.data?.map((product) => {
            return (
              <tr
                className="cursor-pointer border-2 border-gray-100 sm:hover:bg-gray-100"
                onClick={() => {
                  router.push(`/produkter/${product.id}`);
                }}
                key={product.id}
              >
                <td className="px-10 py-5 text-left">
                  {product.attributes.category.data.attributes.name}
                </td>
                <td className="px-10 py-5 text-left text-gray-500">
                  {product.attributes.size.data.attributes.number}
                </td>
                <td className="px-10 py-5 text-left">
                  <ColorSquares colors={product.attributes.colors.data} />
                </td>
                <td className="px-10 py-5 text-right text-gray-500">
                  {product.attributes.price}
                </td>
                <td className=" px-10 text-left">
                  <img
                    className="h-14 w-14 shadow-sm"
                    src={`${product.attributes.image.data?.[0].attributes.url}`}
                    height={200}
                    width={200}
                    alt=""
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {order?.data.attributes.status.data.attributes.name}
    </div>
  );
};

export default Page;
