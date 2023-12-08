"use client";
import Loading from "@/components/loading/Loading";
import { ProductsMethods, UserMethods } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";
import Products from "../produkter/Products";
import { productByIdOption } from "@/components/reactQuery/Options";

interface UserData {
  username: string;
  id: number;
  email: string;
}
const MinSide = () => {
  const { data: userData } = useQuery<UserData>({
    queryKey: ["login-user"],
  });
  const userId = userData?.id;

  const { data, isLoading } = useQuery(productByIdOption(userId));

  if (isLoading) return <Loading />;
  if (data) {
    return (
      <div>
        {/* <Suspense> */}
        <p className="text-center font-semibold text-lg">
          {userData?.username}
        </p>
        <Products data={data.data} />
        {/* </Suspense> */}
      </div>
    );
  }
};

export default MinSide;
