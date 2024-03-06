"use client";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import { ProductBackend, User } from "@/utils/types";
import { ProductsMethods } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductTable from "./ProductTable";
import { ProductQueries } from "@/queryFactory/ProductQueryFactory";
import Link from "next/link";
import { EmptyList } from "@/components/empty/EmptyList";
import { DataTable } from "@/components/table/ProductsTable/Table";
import { columns } from "@/components/table/ProductsTable/Columns";

const Produkter = () => {
  const { data: jwt } = useQuery<string>({
    queryKey: ["jwt"],
  });
  const { data: me } = useQuery(ProductQueries.me_all(jwt));
  if (!me)
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
      {/* <DataTable columns={columns} data={me} /> */}
      <ProductTable products={me} />
    </div>
  );
};

export default Produkter;
