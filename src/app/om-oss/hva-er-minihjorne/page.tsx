import React from "react";
import Header from "@/components/features/omOss/Header";
import AboutUsAccordions from "@/components/UI/omOss/AboutUsAccordions";
import Link from "next/link";

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
        <section>
          <p>
            Minihjørne er en digital bruktbutikk hvor du enkelt kan kjøpe og
            selge barneklær. Som selger får du din egen personlige salgsprofil
            hvor alle klærne dine blir samlet, og vi håndterer salget og frakten
            for deg.
          </p>
          {/* <Image
            src="/images/hva-er-minihjorne.jpg"
            alt="Hva er Minihjørne"
            className="mt-4 rounded-md"
          /> */}
        </section>
        {/* Vision Section */}
        <section>
          <h2 className="text-2xl font-bold text-brand-500">Vår Visjon</h2>
          <p>
            Vi ønsker å gjøre det enkelt og rimelig å finne brukte barneklær,
            samtidig som vi fremmer bærekraftig handel. Ved å tilby en stressfri
            måte å selge utvokste klær, hjelper vi familier med å redusere både
            kostnader og miljøpåvirkning.
          </p>
          <p className="mt-4">
            Sammen kan vi skape en mer bærekraftig hverdag som både sparer
            miljøet og lommeboken din.
          </p>
          {/* <Image
            src="/images/vision.jpg"
            alt="Vår visjon"
            className="mt-4 rounded-md"
          /> */}
        </section>
        {/* Meet the Team Section */}
        <section>
          <h2 className="text-2xl font-bold text-brand-500">Hvem er vi?</h2>
          <p>
            Minihjørne er en liten familiebedrift startet av Iselin og Dave,
            foreldre til to små barn. Vi brenner for gjenbruk og ønsker å gjøre
            det enklere for andre foreldre å kjøpe og selge barneklær på en
            bærekraftig måte.
          </p>
          {/* <Image
            src="/images/hvem-er-vi.jpg"
            alt="Hvem er vi?"
            className="mt-4 rounded-md"
          /> */}
        </section>
        <section>
          <h2 className="text-2xl font-bold text-brand-500">
            Personlig Salgsprofil
          </h2>
          <p>
            Få din egen salgsprofil hos Minihjørne, hvor du kan vise frem klærne
            dine med en tilpasset overskrift og beskrivelse. Dette er en god
            muligehet til å selge flere klær til kjøpere som for eks har barn i
            samme str og lik klessmak som deg og dine plagg.
          </p>
        </section>
        {/* <HowToSell_Steps /> */}
        <div className="flex justify-center">
          <Link href="/om-oss/hvordan-selge" className="text-brand-400">
            Hvordan selge klær -{">"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default MinihjornePage;
