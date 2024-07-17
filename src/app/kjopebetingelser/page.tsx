import React from "react";

const Kjøpebetingelser = () => {
  return (
    <div className="px-4 py-6">
      <h1 className="mb-4 text-2xl font-bold">
        Kjøpebetingelser for MiniHjørne
      </h1>

      <h2 className="mt-6 text-xl font-semibold">1. Innledning</h2>
      <p className="mt-2 text-gray-700">
        Disse kjøpebetingelsene gjelder for alle kjøp som gjøres gjennom vår
        nettbutikk. Ved å gjennomføre et kjøp, godtar du disse betingelsene.
      </p>

      <h2 className="mt-6 text-xl font-semibold">2. Bestilling</h2>
      <p className="mt-2 text-gray-700">
        For å legge inn en bestilling tregner du ikke å være en registrert
        bruker. Alle bestillinger behandles så snart som mulig, og du vil motta
        en bekreftelse på e-post når bestillingen er gjennomført.
      </p>

      <h2 className="mt-6 text-xl font-semibold">3. Priser</h2>
      <p className="mt-2 text-gray-700">
        Alle priser er oppgitt i norske kroner (NOK). Vi forbeholder oss retten
        til å endre priser uten forvarsel.
      </p>

      <h2 className="mt-6 text-xl font-semibold">4. Betaling</h2>
      <p className="mt-2 text-gray-700">
        Betaling kan gjøres med de betalingsmetodene vi tilbyr. Vi bruker sikre
        betalingsløsninger for å beskytte dine betalingsopplysninger.
      </p>

      <h2 className="mt-6 text-xl font-semibold">5. Levering</h2>
      <p className="mt-2 text-gray-700">
        Varene vil bli sendt til den adressen du oppgir ved bestilling.
        Leveringstid kan variere avhengig av leveringsmetode og sted.
      </p>

      <h2 className="mt-6 text-xl font-semibold">6. Klager</h2>
      <p className="mt-2 text-gray-700">
        Hvis du mottar en feil eller defekt vare, vennligst kontakt oss så snart
        som mulig for å løse problemet.
      </p>

      <h2 className="mt-6 text-xl font-semibold">7. Endringer</h2>
      <p className="mt-2 text-gray-700">
        Vi forbeholder oss retten til å endre disse kjøpebetingelsene. Endringer
        vil bli publisert på denne siden.
      </p>

      <h2 className="mt-6 text-xl font-semibold">8. Kontaktinformasjon</h2>
      <p className="mt-2 text-gray-700">
        Hvis du har spørsmål angående våre kjøpebetingelser, vennligst kontakt
        oss på{" "}
        <a
          href="mailto:support@minihjorne.no"
          className="text-blue-500 hover:underline"
        >
          support@minihjorne.no
        </a>
        .
      </p>
    </div>
  );
};

export default Kjøpebetingelser;
