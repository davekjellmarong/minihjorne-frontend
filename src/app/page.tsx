import OpeningSoon from "@/components/UI/heroImage/OpeningSoon";
import QuickLinks from "@/components/features/home/QuickLinks";
import ProductsSkeleton from "@/components/features/product/ProductsSkeleton";
import React, { Suspense } from "react";
import Link from "next/link";
import HomepageProducts from "@/components/features/productList/HomepageProducts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import LesMer from "@/components/common/buttons/LesMer";
const Home = () => {
  return (
    <>
      <OpeningSoon />

      <div className="px-3">
        <div className="flex flex-col gap-8 py-6 text-center">
          <p className="text-center text-lg font-semibold text-brand-500">
            Vil du selge brukte barneklær på Minihjørne.no?
          </p>
          <div className="rounded-md border border-gray-300 bg-blue-50 p-6">
            <h2 className="mb-2 text-xl font-semibold text-blue-600">
              1. Lag en bruker
            </h2>
            <p className="text-sm text-gray-700">
              Lag deg en bruker hos oss, helt gratis.
            </p>
          </div>
          <div className="flex justify-center">
            <ArrowDown size={26} color="gray" />
          </div>
          <div className="rounded-md border border-gray-300 bg-green-50 p-6">
            <h2 className="mb-2 text-xl font-semibold text-green-600">
              2. Registrer klærne
            </h2>
            <p className="text-sm text-gray-700">
              Ta bilder av plaggene du vil selge, last opp og registrer dine
              klær.
            </p>
          </div>
          <div className="flex justify-center">
            <ArrowDown size={26} color="gray" />
          </div>
          <div className="rounded-md border border-gray-300 bg-yellow-50 p-6">
            <h2 className="mb-2 text-xl font-semibold text-yellow-600">
              3. Levering
            </h2>
            <p className="text-sm text-gray-700">
              Lever klærne direkte til oss eller send dem med posten. Når vi har
              mottatt dine produkter, publiserer vi dem på nettsiden.
            </p>
          </div>
          <LesMer href="/om-oss/hvordan-selge" />
        </div>
        <div className="py-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Hva er Minihjørne?</AccordionTrigger>
              <AccordionContent>
                Minihjørne er en platform hvor du kan både selge og kjøpe brukte
                barneklær.
                <LesMer href="/om-oss/hva-er-minihjorne" />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Priser</AccordionTrigger>
              <AccordionContent>
                Vi tar 20% provisjon per salg. Resten går til deg.
                <LesMer href="/om-oss/priser" />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Levere klær</AccordionTrigger>
              <AccordionContent>
                Du kan enten levere klærne direkte til oss eller sende dem til
                oss med posten. Adresse:
                <br />
                <br />
                <b>
                  Kanonhallveien 12A
                  <br />
                  0585 Oslo.
                </b>
                <LesMer href="/om-oss/levering" />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
