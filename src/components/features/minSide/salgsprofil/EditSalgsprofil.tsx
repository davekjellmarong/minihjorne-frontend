import React, { Suspense } from "react";
import { UserBackend } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { Globe, Pencil } from "@phosphor-icons/react";
import SalgsprofilHeader from "./SalgsprofilHeader";
import Link from "next/link";
import { ProductQueries } from "@/queryFactory/Product";
import { EmptyList } from "@/components/common/EmptyList";
import Products from "../../product/Products";
import ProductsSkeleton from "../../product/ProductsSkeleton";

interface EditSalgsprofilProps {
  user: UserBackend;
}
const EditSalgsprofil = ({ user }: EditSalgsprofilProps) => {
  const { data: products } = useQuery(ProductQueries.userId(String(user.id)));
  return (
    <div className={` relative flex h-full w-full items-center justify-center`}>
      <div className="m-3 flex w-full flex-col items-center gap-6 rounded bg-white px-4 py-10 text-center shadow-2xl">
        <div className="flex gap-5">
          <Link
            href="salgsprofil/rediger"
            className=" flex gap-2 rounded-lg border border-indigo-300  bg-brand-200 px-2 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-0 focus:ring-indigo-700 sm:hover:bg-indigo-700 sm:hover:text-white"
          >
            <Pencil size={20} color="indigo" />
            <p>Rediger</p>
          </Link>
          <Link
            href={`/profiler/${user.id}`}
            className=" flex gap-2 rounded-lg border border-indigo-300  bg-brand-200 px-2 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-0 focus:ring-indigo-700 sm:hover:bg-indigo-700 sm:hover:text-white"
          >
            <Globe size={20} color="indigo" />
            <p>Se live</p>
          </Link>
        </div>
        <Suspense>
          <SalgsprofilHeader userId={user.id} />
        </Suspense>
        {products?.length === 0 && (
          <div className="mt-20">
            <EmptyList
              text="Du har ingen produkter lagret"
              path="/min-side/selge/last-opp"
              buttonLabel="Registrer ditt første produkt"
            />
          </div>
        )}
        <Suspense fallback={<ProductsSkeleton />}>
          <div className="px-4">
            <Products />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default EditSalgsprofil;
