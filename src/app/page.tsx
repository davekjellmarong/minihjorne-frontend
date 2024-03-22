"use client";
import HomeHeroImage from "@/components/organisms/HomeHeroImage";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  return (
    <div>
      <HomeHeroImage />
      <div className="flex justify-around bg-indigo-50 py-28">
        <Link href="/produkter?&filters[sex][name][$eq]=1">
          <div className="h-[250px] cursor-pointer rounded-lg bg-boyOutM bg-cover">
            <div className="flex h-full w-[175px] items-center justify-center backdrop-brightness-[0.7] sm:hover:backdrop-brightness-100">
              <h3 className="text-lg font-semibold text-white">Gutt</h3>
            </div>
          </div>
        </Link>
        <Link href="produkter?&filters[sex][name][$eq]=2">
          <div className="h-[250px] cursor-pointer rounded-lg bg-girlBackM bg-cover">
            <div className="flex h-full w-[175px] items-center justify-center backdrop-brightness-[0.7] sm:hover:backdrop-brightness-100">
              <h3 className="text-lg font-semibold text-white">Jente</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className=" py-28">
        <h3 className="mb-6 text-center  text-2xl">
          Hvordan selge klær på Minibruket.no?
        </h3>
        <ul className="flex list-disc flex-col gap-16 px-20 text-start font-light">
          <li className="flex flex-col items-center gap-4">
            <p className=" text-gray-600">1</p>
            {/* <User size={38} color="purple" weight="thin" /> */}
            <p className="font-semibold ">Opprett en bruker, helt gratis</p>
            <p className="text-gray-600">
              Registrer deg enkelt og opprett din egen profil
            </p>
          </li>
          <div className="flex justify-center">
            {/* <ArrowDown size={48} color="purple" weight="thin" /> */}
          </div>
          <li className="flex flex-col items-center gap-4">
            <p className=" text-gray-600">2</p>
            {/* <UploadSimple size={38} color="purple" weight="thin" /> */}
            <p className="font-semibold ">Forhåndsregistrer dine klær</p>
            <p className="text-gray-600">
              Dette gjør du her på Minibruket.no, ved å laste opp bilder, fylle
              inn produktinformasjon, pris osv.
            </p>
          </li>
          <div className="flex justify-center">
            {/* <ArrowDown size={48} color="purple" weight="thin" /> */}
          </div>
          <li className="flex flex-col items-center gap-4">
            <p className=" text-gray-600">3</p>
            {/* <Handshake size={38} color="purple" weight="thin" /> */}
            <p className="font-semibold ">Lever dine klær til oss</p>
            <p className="text-gray-600">
              Vårt lokalet finner du i Oslo. Etter at du har levert klærne dine
              hos oss, så vil alle dine klær legges ut til salgs på
              Minibruket.no
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
