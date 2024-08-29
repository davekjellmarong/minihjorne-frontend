import React from "react";
import Header from "@/components/features/omOss/Header";
import AboutUsAccordions from "@/components/UI/omOss/AboutUsAccordions";
import Link from "next/link";

export const metadata = {
  title: "Minihjørne - Registrering av produkter",
  description:
    "Lær hvordan du enkelt kan registrere dine brukte barneklær for salg på Minihjørne.",
};

const RegistreringProdukterPage = () => {
  return (
    <>
      <Header text="Registrering av produkter" />
      <div className="flex flex-col gap-10">
        <section>
          <p>
            Når du skal selge barneklær på Minihjørne, er det viktig at hvert
            plagg er riktig registrert. Dette gir potensielle kjøpere all den
            informasjonen de trenger, og øker sjansen for salg.
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-brand-400">
              Slik registrerer du dine produkter:
            </h3>
            <ol className="ml-6 mt-2 list-decimal">
              <li>
                <strong>Ta gode bilder:</strong> Sørg for at bildene er klare og
                viser detaljene på klærne. Husk å ta bilder fra forskjellige
                vinkler.
              </li>
              <li>
                <strong>Beskriv klærne nøye:</strong> Inkluder informasjon som
                størrelse, farge, type plagg, og eventuelle skader eller
                slitasje.
              </li>
              <li>
                <strong>Velg kategori:</strong> Velg den riktige kategorien for
                hvert plagg, slik at kjøpere enkelt kan finne det de leter
                etter.
              </li>
              <li>
                <strong>Sett pris:</strong> Prissett klærne dine
                konkurransedyktig. Tenk på tilstanden og merkets verdi.
              </li>
            </ol>
          </div>
        </section>
        <div className="flex justify-center">
          <Link href="/om-oss/personlig-salgsprofil" className="text-brand-400">
            Personlig salgsprofil -{">"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegistreringProdukterPage;
