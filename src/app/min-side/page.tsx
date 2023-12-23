"use client";
import Loading from "@/components/loading/Loading";
import { ProductsMethods, UserMethods } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";
import Products from "../produkter/Products";
import { productByIdOption } from "@/components/reactQuery/Options";
import SideMenu from "./SideMenu";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import { ProductBackend, ProductsData } from "@/utils/types";

interface UserData {
  username: string;
  id: number;
  email: string;
}
const MinSide = () => {
  const { data: userData } = useQuery<UserData>({
    queryKey: ["login-user"],
  });
  useAutoLogIn();

  const userId = userData?.id;

  const { data: products, isLoading } = useQuery<ProductBackend[]>({
    queryKey: ["product", 2],
    queryFn: () => {
      return ProductsMethods.getByUserId(userId);
    },
    enabled: !!userId,
  });
  console.log(products);
  return (
    <div>
      <p className="text-center font-semibold text-lg">{userData?.username}</p>
      <Products data={products} isLoading={isLoading} />
    </div>
  );
};

export default MinSide;
