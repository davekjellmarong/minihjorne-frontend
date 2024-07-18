import Image from "next/image";
import React from "react";

const HvordanTaBilder = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-6 text-center">
      <p className="text-xl font-light text-purple-700">Hvordan ta bilder</p>
      <ul className="flex list-inside list-disc flex-col items-start gap-2 text-sm">
        <li>
          Gå ut av nettsiden når du tar bilder, slik at bildene kan lagres på
          mobilen din
        </li>
        <li>Sorter plagg etter størrelse. Da blir registreringen enklere</li>
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

export default HvordanTaBilder;
