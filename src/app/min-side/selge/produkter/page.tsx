"use client";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import { ProductBackend, User } from "@/utils/types";
import { ProductsMethods } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductTable from "../../../../components/organisms/minSide/produkter/ProductTable";
import { ProductQueries } from "@/reactQuery/ProductQueryFactory";
import Link from "next/link";
import { EmptyList } from "@/components/organisms/EmptyList";
import { DataTable } from "@/components/organisms/table/ProductsTable/Table";
import { columns } from "@/components/organisms/table/ProductsTable/Columns";
import Button from "@/components/atoms/Button";
import { Plus, PlusCircle } from "@phosphor-icons/react";

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
      <div className="flex justify-end pb-2 pr-6">
        <Link
          href="/min-side/selge/last-opp"
          className="block text-center text-brand-700"
        >
          <PlusCircle size={36} color="green" />
        </Link>
      </div>
      {/* <DataTable columns={columns} data={me} /> */}
      <ProductTable products={me} />
    </div>
  );
};

export default Produkter;
