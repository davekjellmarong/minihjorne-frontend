"use client";
import HomeHeroImage from "@/components/common/HomeHeroImage";
import Card from "@/components/features/home/Card";
import QuickLinks from "@/components/features/home/QuickLinks";
import Products from "@/components/features/product/Products";
import { ProductQueries } from "@/reactQuery/ProductQueryFactory";
import { useQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";

const Home = () => {
  const { data: products } = useQuery(ProductQueries.filtered(""));
  return (
    <>
      <HomeHeroImage />
      <div className="px-3">
        <div className="my-3 flex flex-wrap items-center gap-6 py-5">
          <Card title="Hva er Minihjørne?" link="/om-oss/hva-er-minihjorne" />
          <Card title="Selge klær" link="/om-oss/hvordan-selge" />
          <Card title="Kjøpe klær" link="/om-oss/kjope" />
          <Card title="Priser?" link="/om-oss/priser" />
          <Card title="Levere klær" link="/om-oss/levering" />
        </div>
        <div>
          <h2 className="text-center text-lg">Se gjennom våre produkter</h2>
        </div>
        <div className="pt-4">
          <QuickLinks />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Products data={products?.data} />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
