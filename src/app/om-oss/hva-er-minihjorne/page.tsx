import Header from "@/components/features/omOss/Header";
import React from "react";

const page = () => {
  return (
    <>
      <Header text="Hva er Minihjørne?" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-4 text-4xl font-bold">Hva er Minihjørne?</h1>

        <p className="mb-4">
          <strong>Minihjørne</strong> er en plattform dedikert til kjøp og salg
          av brukte barneklær. Vi forstår at barn vokser raskt og ofte trenger
          nye klær. Vårt mål er å skape en enkel og trygg markedsplass hvor
          foreldre kan handle barneklær på en mer økonomisk og bærekraftig måte.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">Vår Visjon</h2>
        <p className="mb-4">
          Vi ønsker å fremme gjenbruk av barneklær og redusere tekstilavfall.
          Ved å tilby en plattform hvor foreldre kan kjøpe og selge brukte klær,
          bidrar vi til en grønnere planet og en mer bærekraftig fremtid for
          våre barn.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">Hva Vi Tilbyr</h2>
        <p className="mb-4">
          Minihjørne tilbyr en brukervennlig plattform hvor foreldre kan:
        </p>
        <ul className="mb-4 list-inside list-disc">
          <li>Opprette annonser for brukte barneklær.</li>
          <li>Bla gjennom og kjøpe kvalitetsklær til reduserte priser.</li>
          <li>
            Delta i et fellesskap av likesinnede foreldre som deler våre verdier
            om bærekraft og økonomisk bevissthet.
          </li>
        </ul>

        <h2 className="mb-2 text-2xl font-semibold">Vår Forpliktelse</h2>
        <p className="mb-4">
          Vi er forpliktet til å tilby en trygg og sikker handelsplattform. Alle
          våre transaksjoner håndteres gjennom pålitelige betalingsløsninger, og
          vi oppfordrer til åpen kommunikasjon og tilbakemelding mellom kjøpere
          og selgere.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">
          Bli Med i Vårt Fellesskap
        </h2>
        <p className="mb-4">
          Når du blir en del av Minihjørne, blir du med i et fellesskap som
          verdsetter miljøvennlige valg og økonomisk bevissthet. Vår plattform
          gjør det enkelt å gi barneklær et nytt liv, og vi er her for å støtte
          deg hele veien.
        </p>

        <p className="mt-4">
          Oppdag Minihjørne i dag og bli med i vårt voksende fellesskap av
          foreldre som jobber sammen for en mer bærekraftig fremtid.
        </p>
      </div>
    </>
  );
};

export default page;
