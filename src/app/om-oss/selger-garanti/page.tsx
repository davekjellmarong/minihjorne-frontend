import Header from "@/components/features/omOss/Header";
import InfoColoredBox from "@/components/UI/common/InfoColoredBox";
import React from "react";
export const metadata = {
  title: "Minihjørne - Selgergaranti",
  description:
    "Her finner du informasjon om Minihjørne sin selgergaranti og hvordan den fungerer.",
};
const SellerGuaranteePage = () => {
  return (
    <>
      <Header text="Selgergaranti" />
      <div className="flex flex-col gap-10 px-4 py-6">
        {/* <div className="mx-4 my-8 rounded-xl bg-yellow-300 p-4 text-center">
          <strong>Selgergaranti:</strong> Du betaler ingenting før du har solgt
          for mer enn 500 kr!
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Hva er selgergaranti?</h2>
          <p>
            Hos Minihjørne ønsker vi å gjøre det enkelt og risikofritt for deg å
            selge klær. Med vår selgergaranti betaler du ingen leieavgift før du
            har solgt for mer enn 500 kr. Dette betyr at du kan begynne å selge
            klærne dine uten å bekymre deg for kostnader før du faktisk tjener
            penger.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Hvordan fungerer det?</h2>
          <p>
            Når du registrerer deg som selger på Minihjørne, vil du få tilgang
            til vår plattform og muligheten til å legge ut klær for salg. Du vil
            ikke bli belastet for leieavgift før dine totale salg har passert
            500 kr. Etter at du har solgt for dette beløpet, vil vi trekke
            leieavgiften fra dine fremtidige salg.
          </p>
        </div> */}
        {/* <div>
          <h2 className="text-2xl font-semibold">Krav for å kvalifisere</h2>
          <p>
            For å dra nytte av vår selgergaranti må du oppfylle følgende krav:
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>Ha mer enn 10 produkter tilgjengelig for salg.</li>
            <li>Ha en total verdi av produktene som overstiger 700 kr.</li>
            <li>
              Være enig i at klærne vil bli oppbevart hos oss i minimum én
              måned.
            </li>
          </ul>
        </div> */}
        {/* <div>
          <h2 className="text-2xl font-semibold">Fordeler med selgergaranti</h2>
          <ul className="list-inside list-disc pl-4">
            <li>
              Ingen forhåndsbetaling - du betaler kun når du tjener penger.
            </li>
            <li>Redusert økonomisk risiko for deg som selger.</li>
            <li>Enkel tilgang til vår plattform uten oppstartskostnader.</li>
            <li>
              Mulighet til å selge klær uten umiddelbare kostnader og med
              langvarig eksponering.
            </li>
          </ul>
        </div> */}
        {/* <div>
          <h2 className="text-2xl font-semibold">Vilkår og betingelser</h2>
          <p>
            Selgergarantien gjelder kun for nye selgere som oppfyller de
            spesifiserte kravene. For å kvalifisere deg, må du registrere deg
            som selger og oppfylle minimumskravene for produkter og total verdi.
            Klærne må oppbevares hos oss i minimum én måned. Eventuelle gebyrer
            vil bli trukket fra dine fremtidige salg etter at du har nådd 500 kr
            i totalomsetning. Garantien gjelder ikke for andre avgifter som kan
            påløpe, som for eksempel fraktkostnader.
          </p>
        </div> */}
      </div>

      <InfoColoredBox color="blue" title="Selgergaranti - På vei!🚀">
        Vi jobber hardt med å utvikle en selgergaranti som sikrer at du som
        selger ikke taper penger. Selv om vi ennå ikke har de endelige detaljene
        klare, er vårt mål å tilby en løsning der du ikke betaler noe før du har
        solgt en viss verdi. Følg med for oppdateringer - vi er dedikert til å
        gjøre salgsopplevelsen din både trygg og lønnsom!
      </InfoColoredBox>
    </>
  );
};

export default SellerGuaranteePage;
