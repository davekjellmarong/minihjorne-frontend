"use client";
import React, { useEffect, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ProductQueries } from "@/queryFactory/Product";
import { useSearchParams } from "next/navigation";
import Product from "./Product";
import { useRouter } from "next/navigation";

interface ProductProps {
  initialParams?: any;
}
const Products = ({ initialParams }: ProductProps) => {
  const [firstRender, setFirstRender] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  let params = new URLSearchParams(searchParams.toString());
  useEffect(() => {
    if (
      firstRender &&
      initialParams &&
      initialParams.includes("first=true") &&
      params.toString().length === 0
    ) {
      // remove the first=true param
      const newParams = initialParams.replace("first=true", "");
      router.push(newParams);
    }
    setFirstRender(false);
  }, []);
  const { data: products } = useSuspenseQuery(
    ProductQueries.searchParamsTest(params.toString()),
  );
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.data.map((product) => (
        <React.Fragment key={product.id}>
          <Product product={product} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Products;
