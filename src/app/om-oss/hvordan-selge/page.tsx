import Header from "@/components/features/omOss/Header";
import Step from "@/components/features/omOss/Step";
import React from "react";

const page = () => {
  return (
    <>
      <Header text="Hvordan bli Minihjørne selger?" />
      {/* <p className="pb-6 text-center text-2xl">
        Hvordan selger jeg klær hos dere?
      </p> */}
      <div className="flex flex-col gap-8">
        <div>
          <Step header="Steg 1" description="" />
          <p>Du registrer en bruker på minihjørne.no, helt gratis.</p>
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
            Kjøp en leieplan. Velg blant våre tre forskjellige alternativer for
            leietid, slik at du kan finne den som passer best for deg.
          </p>
        </div>
        <div>
          <Step header="Steg 5" description="" />
          <p>
            Lever klærne til oss. Du kan enten komme til oss i Oslo eller sende
            dem med posten. Fysisk levering skjer på Løren, ved Peer Gynt
            parken:
          </p>
          <p className="my-4 text-center font-bold">
            Kanonhallveien 12A, 0585 Oslo.
          </p>
          <p className="my-4 ">Vi tar imot klær på følgende tidspunkter:</p>
          <p>Onsdag 17:00-19:00</p>
          <p>Fredag 17:00-19:00</p>
          <p className="my-4">
            Du kan også sende klærne med posten til oss på samme adresse.
          </p>
          <p className="my-4 text-center font-bold">
            Minihjørne, Kanonhallveien 12A, 0585 Oslo.
          </p>
        </div>
        <div>
          <Step header="Steg 6" description="" />
          <p>
            Det er alt! I løpet av perioden kan du følge med på salgstallene
            dine. Når ditt leie er over, overfører vi pengene til din konto.
            Klærne kan hentes av kunden etter endt leieperiode.
          </p>
        </div>
      </div>
    </>
  );
};
export default page;
