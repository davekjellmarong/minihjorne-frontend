"use client";
import Products from "@/components/products/Products";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import Loading from "@/components/loading/Loading";
import { ProductBackend, User } from "@/utils/types";
import { ProductsMethods } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductTable from "./ProductTable";

const Produkter = () => {
  const { data: userData } = useQuery<User>({
    queryKey: ["login-user"],
  });
  const { data: jwt } = useQuery<string>({
    queryKey: ["jwt"],
  });
  useAutoLogIn();

  const userId = userData?.id;

  const { data: inactiveProducts, isLoading: inactiveIsLoading } = useQuery<
    ProductBackend[]
  >({
    queryKey: ["inactive-products", userId],
    queryFn: () => {
      return ProductsMethods.getInactive(userId, jwt);
    },
    enabled: !!userId,
  });
  const { data: products, isLoading } = useQuery<ProductBackend[]>({
    queryKey: ["products", userId],
    queryFn: () => {
      return ProductsMethods.getByUserId(userId);
    },
    enabled: !!userId,
  });
  return (
    <div>
      <div className="mb-28">
        <p className="text-center">Aktive produkter</p>
        <ProductTable products={products} />
      </div>
      <div className="">
        <p className="text-center">Inaktive produkter</p>
        <ProductTable products={inactiveProducts} />
      </div>
    </div>
  );
};

export default Produkter;
