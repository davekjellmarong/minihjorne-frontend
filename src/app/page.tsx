"use client";
import useAutoLogIn from "@/components/customHooks/useAutoLogIn";
import HomeHeroImage from "@/components/heroImage/HomeHeroImage";
import {
  ArrowDown,
  Handshake,
  Upload,
  UploadSimple,
  User,
  UserCircle,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function Home() {
  useAutoLogIn();

  return (
    <div>
      <HomeHeroImage />
      <div className="flex justify-around py-28 bg-brand-100">
        <Link href="/produkter?kjønn=gutt">
          <div className="bg-boyOutM h-[250px] bg-cover rounded-lg cursor-pointer">
            <div className="backdrop-brightness-[0.7] h-full w-[175px] flex items-center justify-center hover:backdrop-brightness-100">
              <h3 className="text-lg text-white font-semibold">Gutt</h3>
            </div>
          </div>
        </Link>
        <Link href="/produkter?kjønn=jente">
          <div className="bg-girlBackM h-[250px] bg-cover rounded-lg cursor-pointer">
            <div className="backdrop-brightness-[0.7] h-full w-[175px] flex items-center justify-center hover:backdrop-brightness-100">
              <h3 className="text-lg text-white font-semibold">Jente</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className=" py-28">
        <h3 className="text-center text-2xl  mb-6">
          Hvordan selge klær på Minibruket.no?
        </h3>
        <ul className="font-light text-start list-disc px-20 flex flex-col gap-16">
          <li className="flex flex-col items-center gap-4">
            <p className=" text-gray-600">1</p>
            <User size={38} color="purple" weight="thin" />
            <p className="font-semibold ">Opprett en bruker, helt gratis</p>
            <p className="text-gray-600">
              Registrer deg enkelt og opprett din egen profil
            </p>
          </li>
          <div className="flex justify-center">
            <ArrowDown size={48} color="purple" weight="thin" />
          </div>
          <li className="flex flex-col items-center gap-4">
            <p className=" text-gray-600">2</p>
            <UploadSimple size={38} color="purple" weight="thin" />
            <p className="font-semibold ">Forhåndsregistrer dine klær</p>
            <p className="text-gray-600">
              Dette gjør du her på Minibruket.no, ved å laste opp bilder, fylle
              inn produktinformasjon, pris osv.
            </p>
          </li>
          <div className="flex justify-center">
            <ArrowDown size={48} color="purple" weight="thin" />
          </div>
          <li className="flex flex-col items-center gap-4">
            <p className=" text-gray-600">3</p>
            <Handshake size={38} color="purple" weight="thin" />
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
