import Products from "@/components/features/admin/Products";
import { ProductsMethods } from "@/queryFactory/Product";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const token = cookies().get("Token")?.value;
  const products1 = await ProductsMethods.adminGetAllProducts(token, 1, 100);
  const products2 = await ProductsMethods.adminGetAllProducts(token, 101, 100);
  const products3 = await ProductsMethods.adminGetAllProducts(token, 201, 100);
  const products4 = await ProductsMethods.adminGetAllProducts(token, 301, 100);
  const products5 = await ProductsMethods.adminGetAllProducts(token, 401, 100);
  const products6 = await ProductsMethods.adminGetAllProducts(token, 501, 50);
  const mergedProducts = [
    ...products1,
    ...products2,
    ...products3,
    ...products4,
    ...products5,
    ...products6,
  ];
  return <Products products={mergedProducts} />;
};

export default page;
