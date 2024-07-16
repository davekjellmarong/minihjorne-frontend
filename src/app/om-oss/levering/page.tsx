import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 pb-6">
        <h1 className="px-10 text-center text-3xl">
          Levere dine klær til Minihjørnet
        </h1>
        <Image
          className="w-full"
          src="/klær-gulvet.jpg"
          alt="logo"
          width={350}
          height={350}
        />
      </div>
      <div className="mx-10 my-8 rounded-xl bg-yellow-300 p-6 text-center">
        Husk, før du leverer klær til oss, må du <strong>registrere </strong>{" "}
        dine klær og kjøpe et
        <strong> abbonoment.</strong>
      </div>
      <div className="flex flex-col items-center gap-10 px-10 ">
        <div className="p">
          <div>
            <p className="text-sm font-light text-purple-700">Steg 1</p>
            <h2 className="text-2xl">Kom til oss</h2>
          </div>
          <Image
            className="my-4 w-full rounded-lg"
            src="/bretter-forklet.jpg"
            alt="logo"
            width={350}
            height={350}
          />
          <p>Vi holder til på Løren, ved Peer Gynt parken:</p>
          <p className="my-4 text-center font-bold">
            Kanonhallveien 12A, 0585 Oslo.
          </p>
          <p className="my-4 ">Vi tar imot klær på følgende tidspunkt:</p>
          <p>Onsdag 17:00-19:00</p>
          <p>Fredag 17:00-19:00</p>
          <p className="my-4">
            Når du ankommer addressen kan du enten ringe oss på 46947922
            (Iselin), eller ringe på vår ringeklokke 121 ved hovedingangen
          </p>
        </div>
        <div>
          <p className="text-sm font-light text-purple-700">Steg 2</p>
          <h2 className="text-2xl">Overrekk klærne</h2>
          <Image
            src="/sokker-gulv.jpg"
            alt="logo"
            width={350}
            height={350}
            className="my-4 w-full rounded-lg"
          />
          <p>
            Vi gleder oss til å se deg og klærne dine. Når du har gitt oss
            klærne, så går vi raskt i gjennom din brukerkonto for å se at alt er
            i orden. Dermed kan vi publisere alle dine klær på vår nettside!
          </p>
          <br />
          <p>
            Har du noen spørsmål om nettsiden, prossessen fremover eller noe
            annet, så er det bare å spørre {":)"}
          </p>
        </div>
        <div>
          <p className="text-sm font-light text-purple-700">Steg 3</p>
          <h2 className="text-2xl">Lagring av klær</h2>
          <Image
            src="/sokker-gulv.jpg"
            alt="logo"
            width={350}
            height={350}
            className="my-4 w-full rounded-lg"
          />
          <p>
            Når klærne er overrekt til oss, så lagrer vi klærne dine i vår
            leilighet. Vi er nå i en startfase, og har derfor ikke et
            lagerlokale. Vi har derfor valgt å lagre klærne i vår leilighet. Vi
            har god plass, og klærne dine vil bli lagret trygt og sikkert.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
