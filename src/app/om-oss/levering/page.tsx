import LeveringsDager from "@/components/common/leveringsDager/LeveringsDager";
import Header from "@/components/features/omOss/Header";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 pb-6">
        <Header text="Levere klær til Minihjørne" />
      </div>
      <div className="mx-4 my-8 rounded-xl bg-yellow-300 p-4 text-center">
        Husk, før du leverer klær til oss, må du{" "}
        <strong>registrere klærne og kjøpe en leieavtale.</strong>
      </div>
      <div className="flex flex-col  gap-10 ">
        <div className="">
          <div>
            <p className="text-sm font-light text-purple-700">Steg 1</p>
            <h2 className="text-2xl">Besøk oss</h2>
          </div>
          <p>Vi holder til på Løren, ved Peer Gynt parken:</p>
          <p className="my-4 font-bold">Kanonhallveien 12A, 0585 Oslo.</p>
          <LeveringsDager />
          <p className="my-4">
            Når du ankommer adressen, kan du ringe oss på 46947922 (Iselin),
            eller ringe på vår ringeklokke 121 ved hovedinngangen.
          </p>
        </div>
        <div>
          <p className="text-sm font-light text-purple-700">Steg 2</p>
          <h2 className="text-2xl">Lever klærne</h2>
          {/* <Image
            src="/sokker-gulv.jpg"
            alt="logo"
            width={350}
            height={350}
            className="my-4 w-full rounded-lg"
          /> */}
          <p>Vi ser frem til å ta imot deg og klærne dine!</p>
          <p>
            Har du spørsmål om nettsiden, prosessen videre eller noe annet, er
            det bare å spørre {":)"}
          </p>
        </div>
        <div>
          <p className="text-sm font-light text-purple-700">Steg 3</p>
          <h2 className="text-2xl">Lagring av klær</h2>
          {/* <Image
            src="/sokker-gulv.jpg"
            alt="logo"
            width={350}
            height={350}
            className="my-4 w-full rounded-lg"
          /> */}
          <p>
            Etter at klærne er levert til oss, blir de lagret i vår leilighet. I
            oppstartsfasen har vi ikke eget lager, men vi har god plass til å
            lagre klærne trygt og sikkert.
          </p>
        </div>
        <div>
          <p className="text-sm font-light text-purple-700">Steg 4</p>
          <h2 className="text-2xl">Publisering</h2>
          <p>
            Når vi har gjennomgått alle klærne dine, vil de bli publisert på
            nettsiden vår. Du vil motta en e-post når klærne dine er publisert,
            slik at du kan se dem på vår nettside.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
