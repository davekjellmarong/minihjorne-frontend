import React from "react";
import LeveringsDager from "@/components/common/leveringsDager/LeveringsDager";
import Header from "@/components/features/omOss/Header";
import HvordanBliSelger from "@/components/UI/omOss/HvordanBliSelger";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";

export const metadata = {
  title: "Minihjørne - Selge klær",
  description: "Her er alt du trenger å vite for å selge klær hos Minihjørne",
};

const SellPage = () => {
  return (
    <>
      <Header text="Selge klær hos Minihjørne" />
      <HvordanBliSelger />
      <div className="flex justify-center py-6">
        <Link
          className="rounded bg-brand-500 px-6 py-4 text-white"
          href="/auth"
        >
          Opprett en konto gratis!
        </Link>
      </div>
      <Accordion>
        <AccordionSummary>Levere klær til oss</AccordionSummary>
        <AccordionDetails>
          Du kan levere direkte til oss eller sende klærne med posten. Adresse:
          Kanonhallveien 12A, 0585 Oslo.
          <LeveringsDager />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Personlig salgsprofil</AccordionSummary>
        <AccordionDetails>
          Gå inn på din personlige salgsprofil og skriv litt om hva slags klær
          du selger. Kanskje er det en kjøper der ute som synes stilen din er
          ekstra fin, eller har barn i akkurat den størrelsen du selger mye av.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Etter produktregistrering</AccordionSummary>
        <AccordionDetails>
          I løpet av salgsperioden kan du følge med på salgstallene dine og
          sjekke statistikk. Når salgsperioden er over overfører vi 80% av
          salgssummen til din konto. Plaggene som eventuelt er igjen må hentes
          innen 5 dager etter salgsperioden er avsluttet. Vi kan også sende
          plaggene i retur dersom du betaler frakt. Send oss en mail dersom du
          ønsker at vi sender plaggene i retur. Ønsker du å donere resterende
          plagg til oss, send oss en mail! Plaggene vil bli solgt på nettsiden
          og inntekten går til å videreutvikle Minihjørne.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Hva kan jeg selge?</AccordionSummary>
        <AccordionDetails>
          <p>
            Nesten alle slags barneklær i str 44 til 140. Klærne skal være rene,
            hele og i brukbar stand, uten sjenerende lukt. Avvik som hull,
            flekk, manglende knapp skal dokumenteres synlig med et bilde av
            avviket samt at det skal hukes av for type avvik i selve
            registreringsprosessen.
          </p>
          <br />
          <p>
            Vi selger også vintage barneklær. Med det mener vi barneklær som er
            minst 20 år gamle.
          </p>
          <br />

          <p>
            Pr nå tar vi ikke i mot:
            <b> sko, sokker, hodeplagg, accessories, undertøy og badetøy.</b>
            Vi selger heller ikke klær fra nettsider som wish, shein og temu,
            piratkopier og falske varer, plagg med print av våpen, rusmidler og
            annet som kan oppfattes som støtende.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Priser</AccordionSummary>
        <AccordionDetails>
          Du bestemmer selv prisene på klærne du ønsker å selge. Tenk gjerne på
          hva plagget har kostet som nytt, samt om det har vært på tilbud, og
          legg deg gjerne litt under dette nivået igjen. Husk også at prisen
          avhenger plaggets tilstand, alder, popularitet og lignende.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Produktbilder</AccordionSummary>
        <AccordionDetails>
          <p>
            Vi vil at det skal være kort prosess å legge ut barneklær for salg.
            Samtidig vil vi at kjøper skal få så mye nødvendig informasjon om
            plagget som mulig. Får å få til dette har vi valgt at produktbildene
            på Minihjørne skal standardiseres, slik at de er både raske å ta men
            også gode å se på for kjøperne.
          </p>
          <ul className="mt-4 flex list-inside list-disc flex-col gap-4">
            <li>
              <b>Bruk en enkel, ren flate. </b>
              Feks et bord, gulvet eller en vegg (ta ned et veggbilde og bruk
              spikeren til å henge kleshengeren i). Bruk evt et ensfarget
              teppe/duk/laken til bakgrunn.
            </li>
            <li>
              <b>Legg ned eller heng opp plagget </b>
              og knips bilde. Sørg for at hele plagget kommer med.
            </li>
            <li>
              <b>Bildene pyntes ikke opp med rekvisitta og lignende. </b> Det er
              kun plagget som skal være med på bildet. Ikke legg på filter slik
              at plaggets farge blir feil.
            </li>
            <li>
              <b>Ett bilde pr annonse. </b>
              Unntak: dersom plagget har betydelige forskjeller på bak og
              fremsiden: da tar du bilder av begge sider. Og plagg med avvik: ta
              bilde, gjerne nærbilde, av avviket. En annonse kan ha opp til tre
              bilder.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Størrelse</AccordionSummary>
        <AccordionDetails>
          <div>
            <p>
              Dersom plagget viser en dobbel størrelse, feks 74-80, før opp den
              minste nevnte størrelsen.
            </p>
            <p>
              Dersom plagget har oppført størrelser som 50, 60, 70 etc, velger
              du den tilgjengelige størrelsen som er nærmest.
            </p>
            <p>
              Skal du selge hjemmestrikket eller hjemmesydde plagg og er usikker
              på størrelse? Sammenlign størrelse på plagget med et plagg fra er
              velkjent merke.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Plaggets tilstand</AccordionSummary>
        <AccordionDetails>
          <ul className="flex list-inside list-disc flex-col gap-4">
            <li>
              <b>Ny:</b> plagget er ubrukt. I noen tilfeller er lappen fremdeles
              på.
            </li>
            <li>
              <b>Pent brukt:</b> plagget har ingen slitasje eller bruksmerker.
            </li>
            <li>
              <b>Brukt:</b> plagget har noe slitasje eller enkelte bruksmerker.
            </li>
            <li>
              <b>Godt brukt:</b> plagget har en del slitasje eller bruksmerker.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Produktadministrasjon</AccordionSummary>
        <AccordionDetails>
          <ul className="flex list-inside list-disc flex-col gap-4">
            <li>
              <b>Legge til eller bytte bilde </b>i en allerede opprettet
              annonse? Det er pr nå ikke mulig. Du må da slette den opprinnelige
              annonsen og ladte opp riktige bilder og lage annonsen på nytt.
            </li>
            <li>
              <b> Det er mulig å redigere annonser i ettertid</b>, men ikke
              bytte bilde.
            </li>
            <li>
              <b>Det er ikke mulig å slette en annonse </b>
              etter at vi har mottatt plaggene.
            </li>
            <li>
              <b>Oppdager du en feil </b>
              eller noe som må rettes på med produktene dine som du ikke får til
              selv, send oss en mail på kontakt@minihjorne.no, så hjelper vi deg
              så fort vi har mulighet.
            </li>
            <li>
              <b>Om du selger sett:</b> bind/knyt eller legg i en gjennomsiktig
              pose plaggene som hører sammen i et sett.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <div className="py-6 text-center text-brand-600">
        <Link href="/om-oss/levering">Les mer om levering</Link>
      </div>
    </>
  );
};

export default SellPage;
