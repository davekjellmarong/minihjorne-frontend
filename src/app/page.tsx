"use client";
import Card from "@/components/home/Card";
import QuickLinks from "@/components/home/QuickLinks";
import SearchField from "@/components/home/SearchField";
import Products from "@/components/organisms/product/Products";
import { ProductQueries } from "@/reactQuery/ProductQueryFactory";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Home = () => {
  const { data: products } = useQuery(ProductQueries.filtered(""));
  console.log(products);
  return (
    <div className="px-3">
      <div>
        <SearchField />
      </div>
      <div className="pt-4">
        <QuickLinks />
      </div>
      <div className="flex flex-col items-center gap-7 px-3 py-6">
        <Card
          title="Hva er Minibruket?"
          description="MiniBruket er en tjeneste som lar deg kjøpe og selge barneklær."
        />
        <Card
          title="Priser?"
          description="Se abbonoment prise for deg som vil selge klær"
        />
        <Card
          title="Hvordan funker det?"
          description="Registrer en bruker, last opp bilder og lever klærne til oss. Så legger vi de ut for salg."
        />
      </div>
      <div className="">
        <Products data={products?.data} />
      </div>
    </div>
  );
};

export default Home;
