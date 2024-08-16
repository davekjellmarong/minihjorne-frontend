import Header from "@/components/features/omOss/Header";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 pb-6">
        <Header text="Sende klær til Minihjørne" />
      </div>
      <div className="mx-4 my-8 rounded-xl bg-yellow-300 p-4 text-center">
        Husk, før du leverer klær til oss, må du{" "}
        <strong>registrere klærne og kjøpe en leieavtale.</strong>
      </div>
      <div className="flex flex-col gap-10">
        <div>
          <div>
            <p className="text-sm font-light text-purple-700">Steg 1</p>
            <h2 className="text-2xl">Pakk klærne</h2>
          </div>
          <p>
            Du bestemmer selv hvordan du pakker klærne, vi anbefaler en passende
            eske eller pose. Husk at du selv står får fraktkostnader og at du
            selv er ansvarlig for klærne inntil de er mottatt av oss. Vennligst{" "}
            <b>legg ved en lapp med ditt brukernavn inne i pakken</b>, slik at
            vi kan identifisere hvem klærne tilhører. Brukernavn finner du på{" "}
            {"'"}Min Side{"'"}.
          </p>
        </div>
        <div>
          <p className="text-sm font-light text-purple-700">Steg 2</p>
          <h2 className="text-2xl">Adresse</h2>
          <div className="">
            <p>På pakken skriver du:</p>
            <div className="my-2 font-bold">
              <p>Iselin Gamst Bernhart</p>
              <p>Kanonhallveien 12A,</p>
              <p>0585 Oslo,</p>
            </div>
            <p>Tlf nummer: 46947922</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-light text-purple-700">Steg 3</p>
          <h2 className="text-2xl">Lagring av klær</h2>
          <p>
            Når klærne er levert til oss, lagrer vi dem i vår leilighet. Vi er i
            en startfase og har foreløpig ikke eget lagerlokale, men vi har god
            plass til å lagre klærne trygt og sikkert.
          </p>
        </div>
        <div>
          <p className="text-sm font-light text-purple-700">Steg 4</p>
          <h2 className="text-2xl">Publisering</h2>
          <p>
            Etter at vi har gjennomgått klærne dine, blir de publisert på
            nettsiden vår. Du vil motta en e-postvarsel når klærne dine er
            publisert, slik at du kan se dem på nettsiden vår.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
