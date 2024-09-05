import React from "react";
import LeveringsDager from "@/components/common/leveringsDager/LeveringsDager";
import Header from "@/components/features/omOss/Header";
import BottomLinks from "@/components/UI/omOss/BottomLinks";
import Step from "@/components/UI/Step";

export const metadata = {
  title: "Minihjørne - Levering",
  description:
    "Her finner du informasjon om levering eller sending av brukte barneklær til Minihjørne når du skal selge.",
};

const LeveringPage = () => {
  return (
    <>
      <Header text="Levere eller sende klær til Minihjørne" />

      <section className="">
        <div className="mt-8">
          <Step number="1" title="Velg leveringsmåte">
            <p>
              Du kan velge mellom å levere klærne dine fysisk hos oss eller
              sende dem per post.
            </p>
          </Step>

          <Step number="2" title="Lever klærne fysisk">
            <p>Vi holder til på Løren, ved Peer Gynt parken:</p>
            <p className="my-4 font-bold">Kanonhallveien 12A, 0585 Oslo.</p>
            <LeveringsDager />
            <p className="my-4">
              Når du ankommer adressen, kan du ringe oss på 46947922 (Iselin),
              eller ringe på vår ringeklokke 121 ved hovedinngangen.
            </p>
            <p>
              Vi ser frem til å ta imot deg og klærne dine! Har du spørsmål om
              nettsiden, prosessen videre eller noe annet, er det bare å spørre{" "}
              {":)"}
            </p>
          </Step>

          <Step number="2" title="Send klærne per post">
            <p>
              Hvis du foretrekker å sende klærne dine, kan du bruke følgende
              adresse:
            </p>
            <p className="my-4 font-bold">
              Iselin Gamst Bernhart
              <br />
              Kanonhallveien 12A,
              <br />
              0585 Oslo,
              <br />
              Tlf: 46947922
            </p>
            <p>
              Sørg for at pakken er godt merket med ditt navn og
              kontaktinformasjon, slik at vi kan koble klærne til din
              salgsprofil.
            </p>
          </Step>

          <Step number="3" title="Publisering">
            <p>
              Når vi har gjennomgått alle klærne dine, vil de bli publisert på
              nettsiden vår. Du vil motta en e-post når klærne dine er
              publisert, slik at du kan se dem på vår nettside.
            </p>
          </Step>
        </div>
      </section>

      <BottomLinks
        prevLink={{ to: "/om-oss/salgsprofil", text: "Salgsprofil" }}
        nextLink={{ to: "/om-oss/priser", text: "Priser" }}
      />
    </>
  );
};

export default LeveringPage;
