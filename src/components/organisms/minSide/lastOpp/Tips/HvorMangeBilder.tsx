import Image from "next/image";
import React from "react";

const HvorMangeBilder = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <p className="text-xl font-light text-purple-700">Hvor mange bilder?</p>
      {/* <p className=" mx-4">
        Hovedregel er 1 bilde per produkt. Du kan ta flere bilder hvis:
      </p> */}
      <ul className="flex list-inside list-disc flex-col gap-2 text-sm">
        <li>Hovedregel er 1 bilde per produkt.</li>
        <li>
          Hvis plagget har ulikt motiv foran og bak, så tar du 2 bilder. Et
          forran, og et bak.
        </li>
        <li>
          Hvis plagget har et avvik (hull, flekk, rift osv...), ta bilde av
          avviket.
        </li>
      </ul>
      <div className="flex  w-full justify-center gap-8">
        <Image
          src="/camera-screenshot.png"
          height={150}
          width={150}
          alt=""
          className="object-contain"
          // placeholder="blur"
        />
        <Image
          src="/gallery-clothes.png"
          height={150}
          width={150}
          alt=""
          className="object-contain"
          // placeholder="blur"
        />
      </div>
    </div>
  );
};

export default HvorMangeBilder;
