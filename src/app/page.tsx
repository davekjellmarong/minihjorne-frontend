"use client";
import ActionsColoredBox from "@/components/UI/common/ActionColoredBox";
import OpeningSoon from "@/components/UI/heroImage/OpeningSoon";
import Card from "@/components/features/home/Card";
import QuickLinks from "@/components/features/home/QuickLinks";
import Products from "@/components/features/product/Products";
import ProductsSkeleton from "@/components/features/product/ProductsSkeleton";
import React, { Suspense } from "react";

const Home = () => {
  return (
    <>
      <OpeningSoon />
      <ActionsColoredBox
        header="🎉 Gratis Leieperiode!"
        button="Kom i Gang"
        path="/min-side/selge/leie"
        color="purple"
      >
        Registrer deg nå og nyt gratis leie frem til oktober! Vi har nettopp
        lansert og ønsker å gi deg dette spesialtilbudet som velkomst.
      </ActionsColoredBox>
      <div className="px-3">
        <div className="my-3 flex flex-wrap items-center gap-6 py-5">
          <Card title="Hva er Minihjørne?" link="/om-oss/hva-er-minihjorne" />
          <Card title="Hvordan selge klær?" link="/om-oss/hvordan-selge" />
          <Card title="Kjøpe klær" link="/om-oss/kjope" />
          <Card title="Priser?" link="/om-oss/priser" />
          <Card title="Hvorfor bruke oss?" link="/om-oss/hvorfor-bruke-oss" />
        </div>
        <div>
          <h2 className="text-center text-lg">Se gjennom våre produkter</h2>
        </div>
        <div className="pt-4">
          <QuickLinks />
        </div>
        <Suspense fallback={<ProductsSkeleton number={20} />}>
          <Products />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
