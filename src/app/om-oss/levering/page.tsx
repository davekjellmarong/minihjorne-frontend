import React from "react";
import LeveringsDager from "@/components/common/leveringsDager/LeveringsDager";
import Header from "@/components/features/omOss/Header";
import BottomLinks from "@/components/UI/omOss/BottomLinks";
import Step from "@/components/UI/Step";

export const metadata = {
  title: "Minihjørne - Levering",
  description:
    "Her finner du informasjon om levering av brukte barneklær til Minihjørne når du skal selge.",
};

const LeveringPage = () => {
  return (
    <>
      <Header text="Levere klær til Minihjørne" />

      <section className="">
        <div className="mt-8 ">
          <Step number="1" title="Besøk oss">
            <p>Vi holder til på Løren, ved Peer Gynt parken:</p>
            <p className="my-4 font-bold">Kanonhallveien 12A, 0585 Oslo.</p>
            <LeveringsDager />
            <p className="my-4">
              Når du ankommer adressen, kan du ringe oss på 46947922 (Iselin),
              eller ringe på vår ringeklokke 121 ved hovedinngangen.
            </p>
          </Step>

          <Step number="2" title="Lever klærne">
            <p>Vi ser frem til å ta imot deg og klærne dine!</p>
            <p>
              Har du spørsmål om nettsiden, prosessen videre eller noe annet, er
              det bare å spørre {":)"}
            </p>
          </Step>

          <Step number="3" title="Lagring av klær">
            <p>
              Etter at klærne er levert til oss, blir de lagret i vår leilighet.
              I oppstartsfasen har vi ikke eget lager, men vi har god plass til
              å lagre klærne trygt og sikkert.
            </p>
          </Step>

          <Step number="4" title="Publisering">
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
