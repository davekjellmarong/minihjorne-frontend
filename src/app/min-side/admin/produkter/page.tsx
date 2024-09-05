import Products from "@/components/features/admin/Products";
import { ProductsMethods } from "@/queryFactory/Product";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const token = cookies().get("Token")?.value;
  const products = await Promise.all([
    ProductsMethods.adminGetAllProducts(token, 1, 100),
    ProductsMethods.adminGetAllProducts(token, 101, 100),
    ProductsMethods.adminGetAllProducts(token, 201, 100),
    ProductsMethods.adminGetAllProducts(token, 301, 100),
    ProductsMethods.adminGetAllProducts(token, 401, 100),
    ProductsMethods.adminGetAllProducts(token, 501, 50),
  ]);

  const mergedProducts = products.flat();

  return <Products products={mergedProducts} />;
};

export default page;
