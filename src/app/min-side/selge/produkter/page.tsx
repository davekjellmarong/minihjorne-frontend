"use client";
import Products from "@/components/products/Products";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import Loading from "@/components/loading/Loading";
import { ProductBackend, User } from "@/utils/types";
import { ProductsMethods, UserMethods } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductTable from "./ProductTable";
import { ProductQueries } from "@/queryFactory/ProductQueryFactory";

const Produkter = () => {
  const { data: userData } = useQuery<User>({
    queryKey: ["login-user"],
  });
  const { data: jwt } = useQuery<string>({
    queryKey: ["jwt"],
  });
  useAutoLogIn();

  const userId = userData?.id;

  // const { data: inactiveProducts, isLoading: inactiveIsLoading } = useQuery<
  //   ProductBackend[]
  // >({
  //   queryKey: ["inactive-products", userId, "dude"],
  //   queryFn: () => {
  //     return UserMethods.getMe(jwt);
  //   },
  //   enabled: !!userId,
  // });
  const { data: products, isLoading } = useQuery<ProductBackend[]>({
    queryKey: ["products", "me", "active"],
    queryFn: () => {
      return ProductsMethods.getByUserId(userId);
    },
    enabled: !!userId,
  });
  const { data: me } = useQuery(ProductQueries.me_all(jwt));
  console.log({ me });
  return (
    <div className="mb-28">
      <p className="text-center">Mine produkter</p>
      <ProductTable products={me} />
    </div>
  );
};

export default Produkter;
