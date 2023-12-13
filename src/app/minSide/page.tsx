"use client";
import Loading from "@/components/loading/Loading";
import { ProductsMethods, UserMethods } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";
import Products from "../produkter/Products";
import { productByIdOption } from "@/components/reactQuery/Options";
import SideMenu from "./SideMenu";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";

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

  const { data, isLoading } = useQuery(productByIdOption(userId));

  if (isLoading) return <Loading />;
  if (data) {
    return (
      <div>
        <p className="text-center font-semibold text-lg">
          {userData?.username}
        </p>
        <Products data={data.data} />
      </div>
    );
  }
};

export default MinSide;
