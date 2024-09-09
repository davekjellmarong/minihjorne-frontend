import Products from "@/components/features/admin/Delivery/Products";
import { ProductsMethods } from "@/queryFactory/Product";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const token = cookies().get("Token")?.value;
  const products1 = await ProductsMethods.adminGetAllProducts(token, 1, 100);
  const products2 = await ProductsMethods.adminGetAllProducts(token, 2, 100);
  const products3 = await ProductsMethods.adminGetAllProducts(token, 3, 100);
  const products4 = await ProductsMethods.adminGetAllProducts(token, 4, 100);
  const products5 = await ProductsMethods.adminGetAllProducts(token, 5, 100);
  const products6 = await ProductsMethods.adminGetAllProducts(token, 6, 100);
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
