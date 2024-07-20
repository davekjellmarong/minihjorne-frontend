import Header from "@/components/features/omOss/Header";
import Step from "@/components/features/omOss/Step";
import React from "react";

const page = () => {
  return (
    <>
      <Header text="Hvorfor kjøpe klær hos Minihjørne?" />
      <p className="pb-6 text-center text-2xl">
        Finn.no, Loppeliten eller Minihjørne?
      </p>
      <p>
        Når det gjelder kjøp av brukte barneklær, har man hovedsakelig to
        metoder å velge mellom. Den ene er en online kjøp og salg plattform, som
        for eksempel Finn.no og Tise. Den andre er fysiske butikker som tar imot
        klærne fra selgere og tilbyr dem sin egen stand i butikken. Begge disse
        metodene har sine fordeler og ulemper. La oss se nærmere på det.
      </p>
      <div className="my-4">
        <Step header="Finn.no og Tise" description="" />
        <p>
          Dette har lenge vært hvordan de fleste kjøper brukte barneklær, og er
          meget populært. Men det er noen ting å huske på ved disse løsningene:
        </p>
        <ul className="mt-6 flex list-inside list-disc flex-col gap-4">
          <li>
            <b>Kommunikasjon med selgere:</b> Kommunikasjon med selgeren er ofte
            en del av prosessen.
          </li>
          <li>
            <b>Samle småkjøp:</b> Ved kjøp av enkeltplagg til lav pris kan
            fraktkostnadene raskt bli høye, da hver vare ofte har separate
            fraktkostnader.
          </li>
          <li>
            <b>Filtrering og søking:</b> Plattformene er ikke alltid optimalt
            tilpasset barneklær. For eksempel kan plagg som body og vinterdress
            mangle kategorier og være vanskelige å søke og filtrere etter.
          </li>
        </ul>
        <p className="my-4">
          Og husk at alle disse trinnene må gjentas for hvert plagg du vil
          kjøpe. Å kjøpe flere plagg kan derfor være tidkrevende.
        </p>
      </div>
      <div className="my-4">
        <Step header="Fysiske butikker (f.eks. Loppeliten)" description="" />
        <p>
          Dette er en nyere trend som har kommet til Norge, der fysiske butikker
          tar imot klærne fra hvem som helst og selger dem videre i butikken.
          Dette er en flott tjeneste som løser flere av utfordringene med online
          plattformer, men det er også noen ting å tenke på:
        </p>
        <ul className="mt-6 flex list-inside list-disc flex-col gap-4">
          <li>
            <b>Begrenset antall plagg:</b> Butikkene tar kun imot et begrenset
            antall plagg, noe som kan begrense utvalget.
          </li>
          <li>
            <b>Sortering av plagg i butikken:</b> Det kan være nødvendig å lete
            gjennom hele butikken for å finne spesifikke plagg, som for eksempel
            en vinterdress i størrelse 90.
          </li>
          <li>
            <b>Rekkevidde:</b> Butikken når kun kunder som er geografisk nær
            butikken, og dette begrenser også tilgangen til utvalget.
          </li>
        </ul>
      </div>
      <div>
        <Step header="Minihjørne" description="" />
        <p>
          Minihjørne kombinerer det beste fra begge verdener. Vi er en online
          plattform som tar imot klærne dine og selger dem videre for deg. La
          oss se nærmere på alle punktene ovenfor:
        </p>
        <ul className="mt-6 flex list-inside list-disc flex-col gap-4">
          <li>
            <b>Kommunikasjon med selgere:</b> Vi håndterer all kommunikasjon med
            selgere, slik at du slipper å tenke på dette.
          </li>
          <li>
            <b>Filtrering og søking:</b> Vi tilbyr kategorier for alle
            barneklær, slik at det er enkelt å søke og filtrere etter ønsket
            plagg.
          </li>
          <li>
            <b>Samle småkjøp:</b> Du kan samle alle dine småkjøp i én enkelt
            bestilling, noe som gjør det mer attraktivt å handle flere plagg.
          </li>
          <li>
            <b>Ubegrenset antall plagg:</b> Vi tar imot et ubegrenset antall
            plagg fra våre selgere, noe som sikrer et bredt utvalg for kundene.
          </li>
          <li>
            <b>Sortering av plagg i butikken:</b> Vi tilbyr søkefunksjoner og
            filtrering, slik at kundene enkelt kan finne det de leter etter.
          </li>
          <li>
            <b>Rekkevidde:</b> Vi når kunder over hele Norge, noe som gir et
            større utvalg og flere muligheter for kjøperne.
          </li>
        </ul>
      </div>
    </>
  );
};
export default page;
