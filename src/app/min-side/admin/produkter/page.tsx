import FindProducts from "@/components/features/admin/AllProducts/FindProducts";
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
  const products7 = await ProductsMethods.adminGetAllProducts(token, 7, 100);
  const products8 = await ProductsMethods.adminGetAllProducts(token, 8, 100);
  const mergedProducts = [
    ...products1,
    ...products2,
    ...products3,
    ...products4,
    ...products5,
    ...products6,
    ...products7,
    ...products8,
  ];
  return <FindProducts products={mergedProducts} />;
};

export default page;
