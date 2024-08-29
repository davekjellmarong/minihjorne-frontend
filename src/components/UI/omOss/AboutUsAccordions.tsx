import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";
import LesMer from "@/components/common/buttons/LesMer";

const AboutUsAccordions = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Hva er Minihjørne?</AccordionTrigger>
        <AccordionContent>
          Minihjørne er en plattform hvor du kan selge og kjøpe brukte
          barneklær. Hver selger har sin egen side, som gjør det enkelt å finne
          de klærne du leter etter.
          <LesMer href="/om-oss/hva-er-minihjorne" />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Personlig Salgsprofil</AccordionTrigger>
        <AccordionContent>
          Du får en personlig salgsprofil der alle klærne dine blir samlet, slik
          at kjøpere enkelt kan se hva du tilbyr. Du kan også legge til en
          beskrivelse om deg selv og klærne du selger.
          <LesMer href="/om-oss/personlig-salgsprofil" />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Hvordan registrerer jeg klær?</AccordionTrigger>
        <AccordionContent>
          Å registrere klær på Minihjørne er enkelt og kan gjøres direkte fra
          mobilen. Følg stegene på vår nettside, så hjelper vi deg gjennom
          prosessen.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Hvordan leverer jeg klær?</AccordionTrigger>
        <AccordionContent>
          Du kan enten levere klærne direkte til oss, eller sende dem med
          posten. Vår adresse er:
          <br />
          <b>Kanonhallveien 12A, 0585 Oslo.</b>
          <LesMer href="/om-oss/levering" />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Hva koster det?</AccordionTrigger>
        <AccordionContent>
          Vi tar 20% provisjon per salg, og resten går til deg. Enkelt, rimelig,
          og rettferdig.
          <LesMer href="/om-oss/priser" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AboutUsAccordions;
