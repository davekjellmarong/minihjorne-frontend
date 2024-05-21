import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-4xl font-bold">Hvordan Fungerer Det?</h1>

      <h2 className="mb-2 text-2xl font-semibold">Steg for Steg</h2>
      <ol className="mb-4 list-inside list-decimal">
        <li className="mb-2">
          <strong>Opprett en Konto:</strong>
          <p>
            Registrer deg enkelt med e-post og opprett en profil. Fyll inn
            nødvendig informasjon for å komme i gang.
          </p>
        </li>
        <li className="mb-2">
          <strong>Legg Ut Annonser:</strong>
          <p>
            Ta klare og gode bilder av barneklærne du vil selge. Last opp
            bildene og legg til detaljerte beskrivelser for hver vare, inkludert
            størrelse, tilstand, og pris.
          </p>
        </li>
        <li className="mb-2">
          <strong>Administrer Annonsene Dine:</strong>
          <p>
            Hold oversikt over annonsene dine gjennom din personlige profil. Du
            kan redigere, fornye eller slette annonser etter behov.
          </p>
        </li>
        <li className="mb-2">
          <strong>Søk og Kjøp:</strong>
          <p>
            Bruk vår intuitive søkefunksjon for å finne barneklærne du trenger.
            Filtrer etter kategori, størrelse, pris, og mer for å finne akkurat
            det du leter etter.
          </p>
        </li>
        <li className="mb-2">
          <strong>Sikker Betaling:</strong>
          <p>
            Fullfør kjøpene dine med vår sikre betalingsløsning. Alle
            transaksjoner er beskyttet for å sikre en trygg og pålitelig
            handelsopplevelse.
          </p>
        </li>
        <li className="mb-2">
          <strong>Levering og Henting:</strong>
          <p>
            Velg mellom forskjellige leveringsalternativer. Du kan få varene
            levert hjem til deg, eller avtale personlig henting direkte med
            selgeren.
          </p>
        </li>
        <li className="mb-2">
          <strong>Bekreftelse og Tilbakemelding:</strong>
          <p>
            Etter at handelen er fullført, kan både kjøper og selger gi
            tilbakemelding. Dette bidrar til å opprettholde et trygt og
            pålitelig fellesskap.
          </p>
        </li>
      </ol>

      <h2 className="mb-2 text-2xl font-semibold">Hvorfor Bruke Minihjørne?</h2>
      <p className="mb-4">
        Minihjørne gjør det enkelt og trygt å kjøpe og selge brukte barneklær.
        Vi tilbyr en brukervennlig plattform hvor du kan administrere dine kjøp
        og salg på en effektiv måte. Ved å handle gjennom Minihjørne bidrar du
        også til en mer bærekraftig verden ved å gi barneklærne et lengre liv.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">Tips for Succes</h2>
      <ul className="mb-4 list-inside list-disc">
        <li className="mb-2">
          <strong>Ta Gode Bilder:</strong> Bilder av høy kvalitet øker sjansen
          for at dine varer blir solgt raskt.
        </li>
        <li className="mb-2">
          <strong>Skriv Detaljerte Beskrivelser:</strong> Inkluder all relevant
          informasjon om varene for å gjøre det lettere for kjøpere å ta en
          beslutning.
        </li>
        <li className="mb-2">
          <strong>Vær Responsiv:</strong> Svar raskt på meldinger fra
          potensielle kjøpere for å øke sjansen for salg.
        </li>
      </ul>

      <p className="mt-4">
        Med Minihjørne er det enkelt å holde garderoben oppdatert samtidig som
        du sparer penger og bidrar til bærekraft. Bli en del av vårt fellesskap
        i dag!
      </p>
    </div>
  );
};

export default page;
