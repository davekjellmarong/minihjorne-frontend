"use client";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { ProductQueries } from "@/queryFactory/Product";
import Link from "next/link";
import { PlusCircle } from "@phosphor-icons/react";
import { AuthQueries } from "@/queryFactory/Auth";
import { EmptyList } from "@/components/common/EmptyList";
import MyProductsTable from "@/components/features/minSide/produkter/MyProductsTable";

const Produkter = () => {
  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: products } = useSuspenseQuery(ProductQueries.me_all(jwt));
  if (products.length === 0)
    return (
      <EmptyList
        text="Du har ingen produkter lagret"
        path="/min-side/selge/last-opp"
        buttonLabel="Registrer ditt første produkt"
      />
    );
  return (
    <div className="mb-28">
      <p className="mb-4 mt-8 text-center">Mine produkter</p>
      <div className="flex justify-end pb-2 pr-6">
        <Link
          href="/min-side/selge/last-opp"
          className="block text-center text-brand-700"
        >
          <PlusCircle size={36} color="green" />
        </Link>
      </div>
      <div className="flex justify-center gap-6">
        <p className="pb-4 text-center italic">
          <b className="text-lg text-brand-500">
            {products.length} {products.length === 1 ? "produkt" : "produkter"}
          </b>
        </p>
      </div>
      <MyProductsTable products={products} />
    </div>
  );
};

export default Produkter;
