"use client";
import Button from "@/components/atoms/Button";
import Card from "@/components/home/Card";
import QuickLinks from "@/components/home/QuickLinks";
import SearchField from "@/components/home/SearchField";
import HomeHeroImage from "@/components/organisms/HomeHeroImage";
import Products from "@/components/organisms/product/Products";
import { ProductQueries } from "@/reactQuery/ProductQueryFactory";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Home = () => {
  const { data: products } = useQuery(ProductQueries.filtered(""));
  return (
    <>
      <HomeHeroImage />
      <div className="px-3">
        <div className="my-3 flex flex-wrap items-center gap-6 py-5">
          <Card
            title="Hva er Minihjørne?"
            description="MiniHjørne er en tjeneste som lar deg kjøpe og selge barneklær."
            link="/hva-er-minihjorne"
            image="/what.svg"
          />
          <Card
            title="Hvordan funker Minihjørne?"
            description="Registrer en bruker, last opp bilder og lever klærne til oss. Så legger vi de ut for salg."
            link="/hvordan-funker-minihjorne"
            image="/how.svg"
          />
          <Card
            title="Hvorfor bruke oss?"
            description="Vi gjør det enkelt for deg å selge klærne du ikke trenger lenger."
            link="/hvorfor-bruke-minihjorne"
            image="/how.svg"
          />
          <Card
            title="Priser?"
            description="Se abbonoment prise for deg som vil selge klær på MiniBruket."
            link="/priser"
            image="/price.svg"
          />
          <Card
            title="Levere klær"
            description="Hvordan levere klær til oss."
            link="/levering"
            image="/price.svg"
          />
          {/* <div className="flex gap-7">
          <Button>Kjøp klær</Button>
          <Button>Selge klær</Button>
        </div> */}
        </div>
        <div>
          <h2 className="text-center text-lg">Se gjennom våre produkter</h2>
        </div>
        <div className="pt-4">
          <QuickLinks />
        </div>
        <Products data={products?.data} />
      </div>
    </>
  );
};

export default Home;
