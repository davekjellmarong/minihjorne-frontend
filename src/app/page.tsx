import OpeningSoon from "@/components/UI/heroImage/OpeningSoon";
import QuickLinks from "@/components/features/home/QuickLinks";
import ProductsSkeleton from "@/components/features/product/ProductsSkeleton";
import React, { Suspense } from "react";
import Link from "next/link";
import HomepageProducts from "@/components/features/productList/HomepageProducts";
import HowToSell_Summary from "@/components/UI/omOss/HowToSell_Summary";
import AboutUsAccordions from "@/components/UI/omOss/AboutUsAccordions";
import QuickList from "@/components/features/salgsprofil/QuickList";
const Home = () => {
  return (
    <>
      <OpeningSoon />
      <div className="px-4">
        <div className="my-6">
          <QuickList />
        </div>
        <div className="py-3">
          <AboutUsAccordions />
        </div>
        <div className="pt-4">
          <QuickLinks />
        </div>
        <Suspense fallback={<ProductsSkeleton number={20} />}>
          <HomepageProducts />
        </Suspense>

        <div className="my-6 flex justify-center ">
          <Link
            href="/brukte-barne-klaer?pagination[page]=1"
            className=" flex w-60 justify-center rounded-lg bg-brand-400 px-4 py-4 text-white"
          >
            Se mer brukte barneklær
          </Link>
        </div>
      </div>
      <div className=" bg-secondary-200 py-4">
        <HowToSell_Summary />
      </div>
    </>
  );
};

export default Home;
