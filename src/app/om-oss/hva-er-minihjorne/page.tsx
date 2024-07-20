import Header from "@/components/features/omOss/Header";
import Step from "@/components/features/omOss/Step";
import React from "react";

const MinihjornePage = () => {
  return (
    <>
      <Header text="Hva er Minihjørne?" />
      <div className="flex flex-col gap-10">
        <div>
          <div>
            <p className="text-sm font-light text-purple-700">Historie</p>
            <h2 className="text-2xl">Hvordan ble Minihjørne til?</h2>
          </div>
          <p>
            {" "}
            Minihjørne startet som et svar på de utfordringene vi opplevde som
            småbarnsforeldre innen kjøp og salg av barneklær. Lange køer og
            vanskeligheter med å finne riktige klesplagg i kjøp-salg barneklær
            butikker, og høye fraktkostnader ved småkjøp på online plattformer
            inspirerte oss til å skape Minihjørne. Plattformen ble et svar på
            behovet for en enklere og mer bærekraftig måte å handle barneklær
            på.
          </p>
        </div>
        <div>
          <div>
            <p className="text-sm font-light text-purple-700">Minihjørne</p>
            <h2 className="text-2xl">Hva er Minihjørne?</h2>
          </div>
          <p>
            Minihjørne er en plattform dedikert til kjøp og salg av brukte
            barneklær fra størrelse 44 til 158. Vi forstår at barn vokser raskt
            og ofte trenger nye klær. Vårt mål er å gjøre det enkelt og rimelig
            å handle vakre og holdbare klær til barna våre. Samtidig ønsker vi
            at det skal være like enkelt å selge barneklær etter at de er blitt
            for små. På denne måten bidrar vi til å skåne miljøet og lommeboken
            din, og sammen kan vi sørge for at barneklærne får et langt og
            meningsfylt liv.
          </p>
        </div>
        <div>
          <div>
            <p className="text-sm font-light text-purple-700">Vår plattform</p>
            <h2 className="text-2xl">Brukervennlig og effektiv</h2>
          </div>
          <p>
            Hos Minihjørne har vi lagt stor vekt på å utvikle en brukervennlig
            plattform som gjør det enkelt å både kjøpe og selge brukte
            barneklær. Vi tilbyr en sømløs opplevelse som gjør det mulig å finne
            akkurat det du leter etter, enten det er en ny babydress eller en
            fin vinterjakke til barnet ditt.
          </p>
        </div>
        <div>
          <p className="text-sm font-light text-purple-700">
            Hvordan det fungerer
          </p>
          <h2 className="text-2xl">Enkelt og praktisk</h2>
          <p>
            Når du vil selge klær hos Minihjørne, trenger du bare å registrere
            klærne dine og kjøpe et abonnement. Deretter kan du levere eller
            sende klærne til oss, og vi tar oss av resten – inkludert betaling,
            frakt og kundekommunikasjon. Det har aldri vært enklere å få
            barneklærne til å finne nye hjem.
          </p>
        </div>
        <div>
          <p className="text-sm font-light text-purple-700">Vår visjon</p>
          <h2 className="text-2xl">Bærekraft og økonomi</h2>
          <p>
            Vi er opptatt av å fremme bærekraftig handel og bidra til å redusere
            klesavfall. Ved å handle på Minihjørne bidrar du til å forlenge
            levetiden til barneklærne og spare både penger og ressurser. Sammen
            kan vi gjøre en forskjell for miljøet og samtidig sikre at barna
            dine alltid har klær som passer og som de trives i.
          </p>
        </div>
      </div>
    </>
  );
};

export default MinihjornePage;
