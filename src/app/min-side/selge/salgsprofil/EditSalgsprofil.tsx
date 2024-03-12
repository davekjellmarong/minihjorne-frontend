import React, { useState } from "react";
import { UserBackend, User as UserType } from "@/utils/types";
import {
  tailwindColorsObject,
  tailwindColorsUserButton,
} from "@/utils/constants";
import Products from "@/components/products/Products";
import { useQuery } from "@tanstack/react-query";
import { ProductsMethods } from "@/utils/utils";
import EditSalgsprofilHeader from "./EditSalgsprofilHeader";
import {
  Baby,
  Bird,
  HeartStraight,
  Leaf,
  Pen,
  Pencil,
  Rainbow,
  Star,
  User,
  UserCircle,
} from "@phosphor-icons/react";
import SalgsprofilHeader from "./SalgsprofilHeader";
import Link from "next/link";
import { ProductQueries } from "@/queryFactory/ProductQueryFactory";

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
      <div className="m-3 flex flex-col items-center gap-6 rounded bg-white py-10 text-center shadow-2xl">
        <Link
          href="salgsprofil/rediger"
          // type="button"
          className=" flex gap-2 rounded-lg border border-indigo-300  bg-brand-200 px-2 py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-0 focus:ring-indigo-700 sm:hover:bg-indigo-700 sm:hover:text-white"
        >
          <Pencil size={20} color="indigo" />
          <p>Rediger</p>
        </Link>
        <SalgsprofilHeader user={formik.values} username={user.username} />
        <div>
          <Products data={products} />
        </div>
      </div>
    </div>
  );
};

export default EditSalgsprofil;
