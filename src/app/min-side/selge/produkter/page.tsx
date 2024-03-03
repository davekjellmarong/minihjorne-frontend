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
  if (!products)
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
      <ProductTable products={me} />
    </div>
  );
};

export default Produkter;
