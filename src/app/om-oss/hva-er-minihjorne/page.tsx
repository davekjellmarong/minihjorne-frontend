import Header from "@/components/features/omOss/Header";
import Step from "@/components/features/omOss/Step";
import React from "react";
export const metadata = {
  title: "Minihjørne - Hva er Minihjørne?",
  description:
    "Her finner du informasjon om Minihjørne, vår plattform og våre tjenester.",
};
const MinihjornePage = () => {
  return (
    <>
      <Header text="Hva er Minihjørne?" />
      <div className="flex flex-col gap-10">
        {/* <div>
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
        </div> */}
        <div>
          <div>
            {/* <p className="text-sm font-light text-purple-700">Minihjørne</p> */}
            <h2 className="text-2xl">Hva er Minihjørne?</h2>
          </div>
          <p>
            Minihjørne er rett og slett en bruktbutikk på internett, der man kan
            kjøpe og selge barneklær. Det fungerer ved av privatpersoner leier
            en spot i nettbutikken og leverer inn klærne de ønsker å selge til
            Minihjørne. Klærne blir stilt ut sammen med mange andre fine
            bruktklær, og så står vi for gjennomføring av salg og sending av
            plagg til nye små eiere!
          </p>
        </div>
        <div>
          <div>
            {/* <p className="text-sm font-light text-purple-700">Vår plattform</p> */}
            <h2 className="text-2xl">Vår visjon</h2>
          </div>
          <p>
            Barn vokser fort og har stadig vekk behov for nye klær. Målet til
            Minihjørne er å gjøre det lettere å finne brukte plagg til akkurat
            ditt barn, uten å måtte betale unødvendige høye fraktpriser.
            Samtidig vil vi at det skal være enkelt og stressfritt å selge
            utvokste barneklær, og tilbyr derfor å være din personlige
            nettbutikk som står for både salg og sending av varer.
          </p>
          <br />
          <p>
            Sammen kan vi bidra til en mer bærekraftig hverdag som gjør godt for
            både jorda vår og lommeboken din.
          </p>
        </div>
        <div>
          {/* <p className="text-sm font-light text-purple-700">
            Hvordan det fungerer
          </p> */}
          <h2 className="text-2xl">Hvem er vi?</h2>
          <p>
            Minihjørne er en bitteliten familiebedrift drevet av foreldreparet
            Iselin og Dave. Sammen har vi to barn på ett og fire år. Vi er glade
            i å handle gjenbruk og klær er selvfølgelig ikke noe unntak.
          </p>
        </div>
        {/* <div>
          <p className="text-sm font-light text-purple-700">Vår visjon</p>
          <h2 className="text-2xl">Bærekraft og økonomi</h2>
          <p>
            Vi er opptatt av å fremme bærekraftig handel og bidra til å redusere
            klesavfall. Ved å handle på Minihjørne bidrar du til å forlenge
            levetiden til barneklærne og spare både penger og ressurser. Sammen
            kan vi gjøre en forskjell for miljøet og samtidig sikre at barna
            dine alltid har klær som passer og som de trives i.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default MinihjornePage;
