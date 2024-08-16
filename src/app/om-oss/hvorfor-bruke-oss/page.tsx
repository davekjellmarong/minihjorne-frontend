import Header from "@/components/features/omOss/Header";
import Step from "@/components/features/omOss/Step";
import { shippingPrice } from "@/utils/constants";
import React from "react";

const page = () => {
  return (
    <>
      <Header text="Hvorfor bruke oss?" />
      <p className="pb-6 text-center text-2xl">
        Oppdag fordelene ved å bruke Minihjørne
      </p>
      <div className="my-4">
        <Step header="Når du skal handle klær hos oss får du:" description="" />
        <ul className="mt-6 flex list-inside list-disc flex-col gap-4">
          <li>
            <b>Utvalg:</b> Et bredt og variert utvalg fra flere ulike selgere
            samlet i samme nettbutikk.
          </li>
          <li>
            <b>Søkefunksjon:</b> Brukervennlig søkefunksjon i nettbutikken slik
            at du enkelt kan finne frem til bruktskattene akkurat du er ute
            etter.
          </li>
          <li>
            <b>Fraktkostnad:</b> Fast fraktkostnad på {shippingPrice} kr pr
            ordre.
          </li>
          <li>
            <b>Betaling:</b> Trygg og sikker betaling.
          </li>
          <li>
            <b>Kommunikasjon:</b> Slipper kommunikasjon med selgere.
          </li>
        </ul>
      </div>
      <div className="my-8">
        <Step header="Når du skal selge klær hos oss får du:" description="" />
        <ul className="mt-6 flex list-inside list-disc flex-col gap-4">
          <li>
            <b>Ventetid:</b> Ingen ventetid på salgsplass i nettbutikken. Vi er
            (nesten) alltid klare til å ta i mot dine klær (perioder som
            jul/nyttår, påske, sommer etc kan det oppstå kort ventetid pga
            ferieavvikling).
          </li>
          <li>
            <b>Kommunikasjon:</b> Slipper kommunikasjon med kjøpere.
          </li>
          <li>
            <b>Logistikk:</b> Slipper å tenke på betaling og sending av klær med
            posten.
          </li>
          <li>
            <b>Distribusjon:</b> Nettbutikk som sender varer til kunder i hele
            Norge.
          </li>
        </ul>
      </div>
    </>
  );
};

export default page;
