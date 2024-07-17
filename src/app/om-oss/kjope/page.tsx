import Header from "@/components/common/OmOss/Header";
import Step from "@/components/common/OmOss/Step";
import React from "react";

const page = () => {
  return (
    <>
      <Header text="Hvorfor kjøpe klær hos Minihjørne?" />
      {/* <Step header="Hvorfor kjøpe via Minihjørnet?" description="Finn.no" /> */}
      <p className="pb-6 text-center text-2xl">
        Finn.no, Loppeliten eller Minihjørne?
      </p>
      <p>
        Når det kommer til kjøp av brukte barneklær, så har man hovedsaklig 2
        metoder å kjøpe på. Den ene er en online kjøp og salg platform, slik som
        Finn.no og Tise. Den andre er fysiske butikker som tar imot klærne til
        selgere og som får sin egen stand i buttikken. Begge disse metodene har
        mange fantastiske sider, og noen litt mindre gode sider. La oss ta en
        titt.
      </p>
      <div className="my-4">
        <Step header="Finn.no og Tise" description="" />
        <p>
          Dette har lenge vært hvordan de fleste kjøper brukte barneklær, og er
          meget populært. Men det er noen poenger å tenke på ved disse
          løsningen:{" "}
        </p>
        <ul className="mt-6 flex list-inside list-disc flex-col gap-4">
          <li>
            <b>Kommunikasjon med selgere.</b>
          </li>
          <li>
            <b>Samle småkjøp:</b> Kundene kan samle småkjøp i en bestilling, som
            gjør at fler kunder kjøper flere plagg.
          </li>
          <li>
            <b>Filtrering og søking: </b> Ikke designet for barneklær. Eks,
            plagg som Body og vinterdress har ofte ingen kategori og kan ikke
            filtreres og søkes etter.
          </li>
        </ul>
        <p className="my-4">
          Og husk at alle disse stegene må gjøres fort hvert plagg du vil kjøpe.
          Skal du kjøpe 10 plagg, blir det fort tidskrevende.
        </p>
      </div>
      <div className="my-4">
        <Step header="Fysiske butikker (eks: Loppeliten)" description="" />
        <p>
          Dette er en nyere trend som har kommet til Norge, hvor en fysisk
          butikk som tar imot klærne fra hvem som helst og selger de for dem i
          butikken. Dette er en fantastisk tjeneste som fikset flere av {"'"}
          problemene{"'"} med online platformer, men det er her også noen ting å
          tenke på:
        </p>
        <ul className="mt-6 flex list-inside list-disc flex-col gap-4">
          <li>
            <b>Begrenset antall plagg</b>. De fleste butikker tar kun imot 20-30
            plagg, så utvalget blir begrenset.
          </li>
          <li>
            <b>Sortering av plagg</b> i butikken. Hvis du skal til butikken for
            å kjøpe vinterdress i strl 90, så må du lete gjennom hele butikken.{" "}
          </li>
          <li>
            <b>Rekkevidde:</b> Butikken har kun kunder i nærheten av butikken,
            som begresner utvalget.
          </li>
        </ul>
      </div>
      <div>
        <Step header="Minihjørne" description="" />
        <p>
          Minihjørne er en kombinasjon av disse to metodene. Vi er en online
          plattform som tar imot klærne dine og selger de for deg. La oss se på
          alle punktene over:
        </p>
        <ul className="mt-6 flex list-inside list-disc flex-col gap-4">
          <li>
            <b>Kommunikasjon med selgere.</b> Vi tar oss av dette, så du slipper
            å tenke på dette
          </li>

          <li>
            <b>Filtrering og søking. </b> Vi har kategorier for alle barneklær
            som kan søkes og filtreres etter
          </li>
          <li>
            <b>Samle småkjøp:</b> Du kan samle alle dine småkjøp i en
            bestilling.
          </li>
          <li>
            <b>Ubegrenset antall plagg.</b> Vi tar et ubregrenset antall plagg
            fra våre selgere, slik at utvalget blir bedre
          </li>
          <li>
            <b>Sortering av plagg i butikken.</b> Vi har en søkefunksjon og
            filtrering, så du enkelt kan finne det de leter etter.
          </li>
          <li>
            <b>Rekkevidde.</b> Vi har selgere fra hele Norge, slik at utvalget
            blir større.
          </li>
        </ul>
      </div>
    </>
  );
};
export default page;
