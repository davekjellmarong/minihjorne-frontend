import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 pb-6">
        <h1 className="px-10 text-center text-3xl">
          Sende dine klær til Minihjørne
        </h1>
      </div>
      <div className="mx-4 my-8 rounded-xl bg-yellow-300 p-4 text-center">
        Husk, før du sender dine klær til oss, må du{" "}
        <strong>registrere </strong> dine klær og kjøpe et
        <strong> abbonoment.</strong>
      </div>
      <div className="flex flex-col gap-10 ">
        <div>
          <div>
            <p className="text-sm font-light text-purple-700">Steg 1</p>
            <h2 className="text-2xl">Pakk klærne</h2>
          </div>
          <p>
            Du bestemmer selv hvordan du pakker dine klær. Men husk å{" "}
            <b>legg ved en lapp med ditt brukernavn inne i pakken</b>, hvis ikke
            vet vi ikke hvem klærne tilhører.
          </p>
        </div>
        <div>
          <p className="text-sm font-light text-purple-700">Steg 2</p>
          <h2 className="text-2xl">Addresse</h2>
          <div className="">
            <p>På pakken skriver du: </p>
            <div className="my-2 text-center font-bold">
              <p>Kanonhallveien 12A.</p>
              <p>0585 Oslo</p>
              <p>Iselin Gamst Bernhart - Minihjørne</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-light text-purple-700">Steg 3</p>
          <h2 className="text-2xl">Lagring av klær</h2>
          <p>
            Når klærne er overrekt til oss, så lagrer vi klærne dine i vår
            leilighet. Vi er nå i en startfase, og har derfor ikke et
            lagerlokale. Vi har god plass, og klærne dine vil bli lagret trygt
            og sikkert.
          </p>
        </div>
        <div>
          <p className="text-sm font-light text-purple-700">Steg 4</p>
          <h2 className="text-2xl">Publisering</h2>
          <p>
            Når vi har gått gjennom alle klærne dine, så vil de bli publisert på
            nettsiden vår. Du vil da få en epost om at klærne dine er publisert.
            Du kan da se dine klær på nettsiden vår.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
