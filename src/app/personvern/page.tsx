import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="px-4 py-6">
      <h1 className="mb-4 text-2xl font-bold">
        Personvernerklæring for MiniHjørne
      </h1>

      <h2 className="mt-6 text-xl font-semibold">1. Introduksjon</h2>
      <p className="mt-2 text-gray-700">
        Denne personvernerklæringen forklarer hvordan vi samler inn, bruker og
        beskytter dine personopplysninger når du bruker vår nettside og
        tjenester.
      </p>

      <h2 className="mt-6 text-xl font-semibold">
        2. Hvilke opplysninger samler vi inn?
      </h2>
      <p className="mt-2 text-gray-700">
        Vi samler inn følgende typer informasjon:
      </p>
      <ul className="mt-2 list-inside list-disc text-gray-700">
        <li>
          <strong>Brukerinformasjon:</strong> Navn, e-postadresse, telefonnummer
          og annen relevant informasjon du oppgir ved registrering.
        </li>
        <li>
          <strong>Bruksdata:</strong> Informasjon om hvordan du bruker
          nettsiden, inkludert sidene du besøker.
        </li>
        <li>
          <strong>Betalingsinformasjon:</strong> Vi bruker Stripe for
          betalinger, og vi lagrer ikke betalingsinformasjon på våre servere.
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        3. Hvordan bruker vi informasjonen din?
      </h2>
      <p className="mt-2 text-gray-700">
        Vi bruker informasjonen din til følgende formål:
      </p>
      <ul className="mt-2 list-inside list-disc text-gray-700">
        <li>For å administrere kontoen din og tilby deg våre tjenester.</li>
        <li>
          For å forbedre nettsiden og våre tjenester basert på brukerens
          tilbakemeldinger.
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">4. Dine rettigheter</h2>
      <p className="mt-2 text-gray-700">
        Du har rett til å be om tilgang til, korrigere eller slette dine
        personopplysninger. Du kan også protestere mot behandlingen av dine
        opplysninger eller be om begrensning av behandlingen.
      </p>

      <h2 className="mt-6 text-xl font-semibold">
        5. Hvordan beskytter vi informasjonen din?
      </h2>
      <p className="mt-2 text-gray-700">
        Vi implementerer passende tekniske og organisatoriske tiltak for å
        beskytte dine personopplysninger mot uautorisert tilgang, tap eller
        ødeleggelse.
      </p>

      <h2 className="mt-6 text-xl font-semibold">6. Tredjeparts tjenester</h2>
      <p className="mt-2 text-gray-700">
        Vi kan bruke tredjeparts tjenester som Stripe for betalinger og Posthog
        for samling av hvilken sider du besøker. Vennligst merk at disse
        tjenesteleverandørene har sine egne personvernerklæringer som vi
        anbefaler at du leser.
      </p>

      <h2 className="mt-6 text-xl font-semibold">
        7. Endringer i denne personvernerklæringen
      </h2>
      <p className="mt-2 text-gray-700">
        Vi forbeholder oss retten til å endre denne personvernerklæringen. Vi
        vil varsle deg om eventuelle endringer ved å oppdatere datoen på toppen
        av erklæringen.
      </p>

      <h2 className="mt-6 text-xl font-semibold">8. Kontakt oss</h2>
      <p className="mt-2 text-gray-700">
        Hvis du har spørsmål eller bekymringer angående vår personvernerklæring,
        vennligst kontakt oss på{" "}
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

export default PrivacyPolicy;
