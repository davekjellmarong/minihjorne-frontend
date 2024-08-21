import Header from "@/components/features/omOss/Header";
import Step from "@/components/features/omOss/Step";
import React from "react";
export const metadata = {
  title: "Minihjørne - Kjøpe brukte barneklær hos Minihjørne",
  description:
    "Her kommer litt nytting informasjon til deg som skal handle brukte barneklær i nettbuttikken vår.",
};
const page = () => {
  return (
    <>
      <Header text="Kjøpe klær hos Minihjørne" />
      <p>
        Her kommer litt nytting informasjon til deg som skal handle i
        nettbuttikken vår.
      </p>

      <div className="my-4 flex flex-col gap-4">
        <p className="text-2xl">Frakt</p>

        <p>
          Vi har fast fraktkostnad på 99 kr og sender til alle adresser i Norge.
        </p>
        <p className="text-2xl">Hente selv?</p>

        <p>
          Du kan selv hente bestillingen sentralt på Løren, Oslo. Dette
          leveringsalternativet er gratis og bestillingen må hentes innen 10
          dager. Etter at bestillingen er bekreftet til vi sende en sms til deg
          for å avtale hentetidspunkt.
        </p>
        <p className="text-2xl">Betaling</p>

        <p>Vi bruker Stripe betalingsløsning.</p>
        <p className="text-2xl">Bortall av angrerett</p>
        <p>
          Hos Minihjørne er det privatpersoner som selger klær. Kjøpet ansees
          derfor som salg mellom privatpersoner og angreretten bortfaller. Vi
          vil likevel at du som handler brukte barneklær hos oss skal være
          fornøyd! Dersom du skulle være så uheldig å motta et plagg som er i
          dårligere stand enn hva annonsen sier, ber vi deg ta kontakt på
          kontakt@minihjorne.no slik at vi får ordnet opp!
        </p>
        <p className="text-2xl">Plaggets tilstand</p>
        <p>
          Husk at hos oss selges det hovedsaklig barneklær som allerede har levd
          et liv før det kommer hjem til deg. Det vil si at standarden på
          plagget ikke kan forventes å være likt som om du handler fra en
          ordinær klesforhandler. Plaggenes tilstand vil variere fra å være helt
          ny med lappen fremdeles på, til godt brukt hvor det er synlig
          bruksslitasje. MEN plaggene skal være hele og brukbare. Og alle avvik
          skal være dokumentert.
        </p>
        <p className="pt-4 text-2xl">Fire kategorier</p>
        <p>
          Vi har laget en mal på hvordan selgerne skal klassifisere standarden
          på klærne de selger:
        </p>
        <ul className="mt-6 flex list-inside list-disc flex-col gap-4">
          <li>
            <b>Ny:</b> plagget er ubrukt. I noen tilfeller er lappen fremdeles
            på.
          </li>
          <li>
            <b>Pent brukt:</b> plagget har ingen slitasje eller bruksmerker
          </li>
          <li>
            <b>Brukt:</b> plagget har noe slitasje eller enkelte bruksmerker
          </li>
          <li>
            <b>Godt brukt:</b> plagget har en del slitasje eller bruksmerker
          </li>
        </ul>
        <div className="flex flex-col gap-4">
          <p className="pt-4">
            Har plagget flekk, hull/rift, mangler knapp skal denne informasjon
            komme i tillegg.
          </p>
          <p>
            Husk at plaggets farge på bilde kan avvike noe fra virkeligheten pga
            lysforhold, bakgrunn og kamera. Vi ber våre selgere om å unngå
            filter på bildene sine.{" "}
          </p>
        </div>
        {/* <div>
          <p className="pb-2 pt-4 text-2xl">Retur/klager</p>
          <p>
            Opplever du som kjøper å motta et plagg som tydelig avviker fra
            annonsen ber vi deg sende oss en mail på kontakt@minihjorne.no så
            hjelper vi deg.
          </p>
        </div> */}
        <div>
          <p className="pb-2 pt-4 text-2xl">Størrelse</p>
          <p>
            Størrelsene hos oss vil naturligvis variere noe etter hvilke merke
            klærne er fra. Dersom et plagg er oppført med en dobbel størrelse,
            feks 74/80, ber vi selgerne om å alltid føre opp den minste
            størrelsen. Det er som oftes bedre med litt for stort enn litt for
            smått.
          </p>
        </div>
        <div>
          <p className="pb-2 pt-4 text-2xl">Hjemmelaget</p>
          <p>
            Når det gjelder hjemmestrikk og hjemmesydde plagg ber vi selgerne
            sammenligne plagget med et tilsvarende plagg fra et velkjent
            merke,(feks h&m, Lindex, KappAhl) og føre opp den størrelsen som
            ligner mest. Hjemmelagde plagg kan derfor ha enda større variajson
            på størrelser, noe vi synes at du som kjøper bør være klar over på
            forhånd.
          </p>
        </div>
      </div>
    </>
  );
};
export default page;
