import Link from "next/link";
import React from "react";

const HomeHeroImage = () => {
  return (
    <div className="h-[700px] bg-homeHeroMobile bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 backdrop-brightness-[0.7]">
        <p className="text-xl text-white ">Kjøp og selg barneklær</p>
        <h1 className="text-center text-4xl font-bold text-white ">
          Enkelt.
          <br />
          Rimelig.
          <br />
          Grønt.
        </h1>

        <Link href="/produkter">
          <button className=" rounded-lg border-2 border-indigo-500 bg-indigo-500 px-8 py-4 text-white sm:hover:bg-brand-100 sm:hover:text-black">
            Se våre produkter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeroImage;
