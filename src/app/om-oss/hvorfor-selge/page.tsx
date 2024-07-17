import Header from "@/components/common/OmOss/Header";
import Step from "@/components/common/OmOss/Step";
import React from "react";

const page = () => {
  return (
    <>
      <Header text="Hvorfor selge klær hos Minihjørne" />
      <p className="pb-6 text-center text-2xl">
        Finn.no, Loppeliten eller Minihjørne?
      </p>
      <p>
        Når det kommer til salg av barneklær, så har man hovedsaklig hatt 2
        metoder å selge på. Den ene er en online kjøp og salg platform, slik som
        Finn.no og Tise. Den andre er fysiske butikker som tar imot klærne dine
        og du får din egen stand i butikken. Begge disse metodene har mange
        fantastiske sider, og noen litt mindre gode sider. La oss ta en titt.
      </p>
      <div className="my-4">
        <Step header="Finn.no og Tise" description="" />
        <p>
          Dette er slik de fleste selger sine klær, og de er begge meget poulære
          av en grunn. Det virker. Men noen poenger å tenke på:{" "}
        </p>
        <ul className="mt-6 flex list-inside list-disc flex-col gap-4">
          <li>
            <b>Prisforhandlinger.</b>
          </li>
          <li>
            <b>Betaling.</b>
          </li>
          <li>
            <b>Frakt.</b>
          </li>
          <li>
            <b>Returer og klager.</b>
          </li>
          <li>
            <b>Kommunikasjon med potensielle kjøpere.</b>
          </li>
          <li>
            <b>Samle småkjøp:</b>
            Hvis du vil selge et plagg til mindre enn 100 kr, så vil ofte en
            fraktpris på rundt 70-130kr gjøre handelen ulønnsom for kundene.
          </li>
          <li>
            <b>Filtrering og søking: </b> Ikke designet for barneklær. Eks,
            plagg som Body og vinterdress har ofte ingen kategori og kan ikke
            filtreres og søkes etter.
          </li>
        </ul>
        <p className="my-4">
          Og husk at alle disse stegene må gjøres fort hvert plagg du vil selge.
          Så har du 40 plagg ute, så kan dette fort bli krevende.
        </p>
      </div>
      <div className="my-4">
        <Step header="Fysiske butikker (eks: Loppeliten)" description="" />
        <p>
          Dette er en nyere trend som har kommet til Norge, hvor en fysisk
          butikk som tar imot klærne dine og selger de for deg. Dette er en
          fantastisk tjeneste som fikset flere av {"'"}problemene{"'"} med
          online platformer, men det er her også noen ting å tenke på:
        </p>
        <ul className="mt-6 flex list-inside list-disc flex-col gap-4">
          <li>
            <b>Kø.</b>
            Dette varierer, men for eks i Oslo kan det fort bli 1-2 mnd
          </li>
          <li>
            <b>Begrenset antall plagg</b>. De fleste butikker tar kun imot 20-30
            plagg
          </li>
          <li>
            <b>Sortering av plagg</b> i butikken. Hvis du skal til butikken for
            å kjøpe vinterdress i strl 90, så må du lete gjennom hele butikken.{" "}
          </li>
          <li>
            <b>Rekkevidde.</b>
            Butikken har kun kunder i geografisk nærheten av butikken.
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
            <b>Prisforhandlinger.</b> Vi har faste priser, så du slipper å
            forhandle
          </li>
          <li>
            <b>Betaling.</b> Vi tar oss av betalingen, så du slipper å tenke på
            dette
          </li>
          <li>
            <b>Frakt.</b> Vi tar oss av frakten, så du slipper å tenke på dette
          </li>
          <li>
            <b>Returer og klager.</b> Vi tar oss av dette, så du slipper å tenke
            på dette
          </li>
          <li>
            <b>Kommunikasjon med potensielle kjøpere.</b> Vi tar oss av dette,
            så du slipper å tenke på dette
          </li>
          <li>
            <b>Frakt.</b> Vi tar oss av frakten, så du slipper å tenke på dette
          </li>
          <li>
            <b>Filtrering og søking. </b> Vi har kategorier for alle barneklær
            som kan søkes og filtreres etter
          </li>
          <li>
            <b>Samle småkjøp:</b> Kundene kan samle småkjøp i en bestilling, som
            gjør at fler kunder kjøper flere plagg.
          </li>
          <li>
            <b>Kø.</b> Vi har ingen kø, så dine klær blir lagt ut for salg med
            en gang
          </li>
          <li>
            <b>Begrenset antall plagg.</b> Vi tar imot alle plagg du vil selge
          </li>
          <li>
            <b>Sortering av plagg i butikken.</b> Vi har en søkefunksjon, så
            kundene enkelt kan finne det de leter etter
          </li>
          <li>
            <b>Rekkevidde.</b> Vi har kunder over hele Norge
          </li>
        </ul>
      </div>
    </>
  );
};
export default page;
