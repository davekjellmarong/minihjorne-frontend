import Header from "@/components/common/OmOss/Header";
import Step from "@/components/common/OmOss/Step";
import React from "react";

const page = () => {
  return (
    <>
      <Header text="Hvordan selge klær hos Minihjørne" />
      {/* <p className="pb-6 text-center text-2xl">
        Hvordan selger jeg klær hos dere?
      </p> */}
      <div className="flex flex-col gap-8">
        <div>
          <Step header="Steg 1" description="" />
          <p>Du registrer en bruker på minihjørne.no, helt gratis selvsagt</p>
        </div>
        <div>
          <Step header="Steg 2" description="" />
          <p>Ta bilde av alle produktene dine. Et enkelt bilde er ofte nok.</p>
        </div>
        <div>
          <Step header="Steg 3" description="" />
          <p>
            Last opp bildene og produkt informasjon. Vi vet dette kan ta lang
            tid og har derfor lagt opp produkt registreringen så rask og enkel
            som mulig
          </p>
        </div>
        <div>
          <Step header="Steg 4" description="" />
          <p>
            Kjøp et abonnement. Vi har tre forskjellige abonnementer, så du kan
            velge det som passer deg best.
          </p>
        </div>
        <div>
          <Step header="Steg 5" description="" />
          <p>
            Du leverer klærne til oss. Du kan enten komme til oss i Oslo eller
            sende via posten. Skal du levere klærne fysisk, så kom til1 Løren,
            ved Peer Gynt parken:
          </p>
          <p className="my-4 text-center font-bold">
            Kanonhallveien 12A, 0585 Oslo.
          </p>
          <p className="my-4 ">Vi tar imot klær på følgende tidspunkt:</p>
          <p>Onsdag 17:00-19:00</p>
          <p>Fredag 17:00-19:00</p>
          <p className="my-4">
            Du kan også sende oss klærne i posten. Disse sendes da til:
          </p>
          <p className="my-4 text-center font-bold">
            Minihjørnet, Kanonhallveien 12A, 0585 Oslo.
          </p>
        </div>
        <div>
          <Step header="Steg 6" description="" />
          <p>
            Thats it! Under hele perioden din, kan du følge med på statistikk
            over dine salg og produkter. Når ditt abbonoment er over, overfører
            vi pengene til din konto.
          </p>
        </div>
      </div>
    </>
  );
};
export default page;
