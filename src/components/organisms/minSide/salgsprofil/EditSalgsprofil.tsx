import React from "react";
import { UserBackend } from "@/utils/types";
import { tailwindColorsUserButton } from "@/utils/constants";
import Products from "@/components/organisms/product/Products";
import { useQuery } from "@tanstack/react-query";
import { Globe, Pencil } from "@phosphor-icons/react";
import SalgsprofilHeader from "./SalgsprofilHeader";
import Link from "next/link";
import { ProductQueries } from "@/reactQuery/ProductQueryFactory";
import Image from "next/image";
import { EmptyList } from "../../EmptyList";

interface EditSalgsprofilProps {
  formik: any;
  user: UserBackend;
}
const EditSalgsprofil = ({ formik, user }: EditSalgsprofilProps) => {
  const { data: products } = useQuery(ProductQueries.userId(String(user.id)));
  const tailwindColor = tailwindColorsUserButton[formik.values.colorName];
  return (
    <div
      className={`${tailwindColor} relative flex h-full w-full items-center justify-center`}
    >
      <div className="m-3 flex w-full flex-col items-center gap-6 rounded bg-white py-10 text-center shadow-2xl">
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
        <SalgsprofilHeader user={formik.values} username={user.username} />
        {products?.length === 0 && (
          <div className="mt-20">
            <EmptyList
              text="Du har ingen produkter lagret"
              path="/min-side/selge/last-opp"
              buttonLabel="Registrer ditt første produkt"
            />
          </div>
        )}
        <div className="px-4">
          <Products data={products} />
        </div>
      </div>
    </div>
  );
};

export default EditSalgsprofil;
