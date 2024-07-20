import React from "react";
import { UserBackend } from "@/utils/types";
import { tailwindColorsUserButton } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { ProductQueries } from "@/queryFactory/Product";
import SalgsprofilHeader from "./SalgsprofilHeader";
import Products from "../../product/Products";
interface SalgsprofilProps {
  user: UserBackend;
}
const Salgsprofil = ({ user }: SalgsprofilProps) => {
  const { data: products } = useQuery(ProductQueries.userId(String(user.id)));
  const tailwindColor = tailwindColorsUserButton[user.color];
  return (
    <div
      className={`${tailwindColor} flex h-full w-full items-center justify-center`}
    >
      <div className="relative m-3 flex w-full flex-col items-center gap-6 rounded bg-white py-10 text-center shadow-2xl">
        <SalgsprofilHeader user={user} username={user.username} />
        <div className="w-5/6">
          <Products data={products} />
        </div>
      </div>
    </div>
  );
};

export default Salgsprofil;
