import Products from "@/components/features/admin/Products";
import { ProductsMethods } from "@/queryFactory/Product";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

const page = async () => {
  const token = cookies().get("Token")?.value;
  const products = await ProductsMethods.adminGetAllProducts(token);

  return <Products products={products} />;
};

export default page;
