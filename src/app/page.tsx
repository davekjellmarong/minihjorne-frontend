import OpeningSoon from "@/components/UI/heroImage/OpeningSoon";
import QuickLinks from "@/components/features/home/QuickLinks";
import ProductsSkeleton from "@/components/features/product/ProductsSkeleton";
import React, { Suspense } from "react";
import Link from "next/link";
import HomepageProducts from "@/components/features/productList/HomepageProducts";
import HowToSell_Summary from "@/components/UI/omOss/HowToSell_Summary";
import ActionsColoredBox from "@/components/UI/common/ActionColoredBox";
import AboutUsAccordions from "@/components/UI/omOss/AboutUsAccordions";
const Home = () => {
  return (
    <>
      <OpeningSoon />
      <div className="px-3">
        <HowToSell_Summary />
        <div className="py-6">
          <AboutUsAccordions />
        </div>
        <div className="pb-6 pt-4">
          <ActionsColoredBox
            header="Full Service Pakke"
            button="Les mer"
            color="green"
            path="/om-oss/full-service-pakke"
          >
            Vi tilbyr en full service pakke for deg som ønsker å selge brukte
            barneklær, men som ikke har tid til å gjøre det selv. Du sender oss
            klærne, så tar vi bilder, regisrerer og publiserer dem for deg.
          </ActionsColoredBox>
        </div>

        <div>
          <h2 className="text-center text-lg">
            Se gjennom våre brukte barneklær
          </h2>
        </div>
        <div className="pt-4">
          <QuickLinks />
        </div>
        <Suspense fallback={<ProductsSkeleton number={20} />}>
          <HomepageProducts />
        </Suspense>
        <div className="flex justify-center ">
          <Link
            href="/brukte-barne-klaer"
            className="mt-4 flex w-60 justify-center rounded-lg bg-brand-400 px-4 py-4 text-white"
          >
            Se mer brukte barneklær
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
