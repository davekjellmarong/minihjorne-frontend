// src/app/priser.tsx
import React from "react";

// Mock data for pricing tiers
const pricingTiers = [
  {
    title: "Basic",
    price: "Free",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Pro",
    price: "$9.99/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
  {
    title: "Enterprise",
    price: "Contact us",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
      "Feature 5",
      "Feature 6",
    ],
  },
];

const Priser = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-4xl font-bold">Priser</h1>

      <p className="mb-4">
        Hos <strong>Minihjørne</strong> er vi opptatt av å tilby rimelige priser
        for alle våre brukere. Vi vet at det å ha barn kan være kostbart, og
        vårt mål er å gjøre det enklere og billigere for foreldre å kle opp
        barna sine med kvalitetsklær.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">Prisstruktur</h2>
      <p className="mb-4">
        Vår prisstruktur er enkel og gjennomsiktig. Vi tar et lite gebyr for
        hver transaksjon for å dekke driftskostnadene våre og for å sikre at
        plattformen vår forblir sikker og brukervennlig.
      </p>

      <ul className="mb-4 list-inside list-disc">
        <li>Registrering: Gratis</li>
        <li>Opprettelse av annonser: Gratis</li>
        <li>
          Salgsgebyr: 15% av salgsprisen (dette gebyret vises tydelig når du
          oppretter en annonse)
        </li>
      </ul>

      <h2 className="mb-2 text-2xl font-semibold">Abonnementspris</h2>
      <p className="mb-4">
        For de som ønsker å lagre klær og få ekstra fordeler, tilbyr vi et
        abonnement til 150 kr per uke. Dette abonnementet gir deg tilgang til
        spesielle lagringstjenester og andre eksklusive fordeler.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">
        Hvordan Gebyrene Våre Fungerer
      </h2>
      <p className="mb-4">
        Når du selger et produkt på Minihjørne, trekkes salgsgebyret automatisk
        fra salgsprisen før du mottar betalingen. Dette gebyret hjelper oss med
        å holde plattformen i gang, utvikle nye funksjoner og opprettholde et
        høyt sikkerhetsnivå.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">Ingen Skjulte Kostnader</h2>
      <p className="mb-4">
        Vi tror på full åpenhet, så du vil aldri oppleve skjulte kostnader eller
        uventede avgifter hos oss. Alle gebyrer og kostnader vises tydelig på
        vår plattform, slik at du alltid vet hva du betaler for.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">Rabatter og Tilbud</h2>
      <p className="mb-4">
        Fra tid til annen tilbyr vi rabatter og spesialtilbud til våre brukere.
        Hold øye med våre nyhetsbrev og nettside for å dra nytte av disse
        mulighetene.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">Bli Med og Spar Penger</h2>
      <p className="mb-4">
        Ved å bruke Minihjørne kan du spare penger på barneklær samtidig som du
        bidrar til et mer bærekraftig samfunn. Vi gjør det enkelt og rimelig å
        handle brukte klær av høy kvalitet for dine små.
      </p>

      <p className="mt-4">
        Start din reise med Minihjørne i dag og opplev fordelene med å handle og
        selge brukte barneklær til rimelige priser.
      </p>
    </div>
  );
};

export default Priser;
