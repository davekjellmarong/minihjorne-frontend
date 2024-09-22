import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";
import LesMer from "@/components/common/buttons/LesMer";
import Link from "next/link";

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

      <AccordionItem value="item-6">
        <AccordionTrigger>Selge klær - Selvregistrering</AccordionTrigger>
        <AccordionContent>
          Selvregistrering innebærer at du selv registrerer dine brukte
          barneklær her på minihjorne.no.
          <LesMer href="/om-oss/selvregistrering" />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Registrere klær</AccordionTrigger>
        <AccordionContent>
          Å registrere klær på Minihjørne er enkelt og kan gjøres direkte fra
          mobilen. Følg stegene på vår nettside, så hjelper vi deg gjennom
          prosessen.
          <LesMer href="/om-oss/registrering" />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger>Selge klær - Fullservice pakke</AccordionTrigger>
        <AccordionContent>
          Full service-pakke innebærer at du sender klærne dine til oss, og vi
          tar oss av resten.
          <LesMer href="/om-oss/full-service-pakke" />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Salgsprofil</AccordionTrigger>
        <AccordionContent>
          Du får en personlig salgsprofil der alle klærne dine blir samlet, slik
          at kjøpere enkelt kan se hva du tilbyr. Du kan også legge til en
          beskrivelse om deg selv og klærne du selger.
          <LesMer href="/om-oss/salgsprofil" />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Levere klær</AccordionTrigger>
        <AccordionContent>
          Du kan enten levere klærne direkte til oss, eller sende dem med
          posten. Vår adresse er:
          <br />
          <b>Kanonhallveien 12A, 0585 Oslo.</b>
          <LesMer href="/om-oss/levering" />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Priser</AccordionTrigger>
        <AccordionContent>
          Vi tar 30% eller 60% provisjon per salg, avhenging av om du velger
          <Link href="om-oss/selvregistrering" className="text-brand-500">
            {" "}
            Selgregistrering{" "}
          </Link>
          eller
          <Link href="om-oss/full-service-pakke" className="text-brand-500">
            {" "}
            Full service pakke
          </Link>
          . Det betyr at du kun betaler når du selger noe, så det er ikke mulig
          å tape penger på Minihjørne.
          <LesMer href="/om-oss/priser" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AboutUsAccordions;
