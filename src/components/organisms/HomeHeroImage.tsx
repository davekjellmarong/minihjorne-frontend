import Link from "next/link";
import React from "react";

const HomeHeroImage = () => {
  return (
    <div className="h-[500px] bg-homeHeroMobile bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 backdrop-brightness-[0.7]">
        {/* <p className="text-xl text-white ">Kjøp og selg barneklær</p> */}
        <h1 className="text-center text-4xl font-bold text-white ">
          Enkelt.
          <br />
          Rimelig.
          <br />
          Grønt.
        </h1>
        <div className="flex gap-8">
          <Link href="/produkter">
            <button className=" rounded-lg border-2 border-brand-500 bg-brand-500 px-8 py-4 text-white active:bg-brand-700 sm:hover:bg-brand-100 sm:hover:text-black">
              Kjøp klær
            </button>
          </Link>
          <Link href="/min-side/selge/last-opp">
            <button className=" rounded-lg border-2 border-brand-500 bg-brand-500 px-8 py-4 text-white active:bg-brand-700 sm:hover:bg-brand-100 sm:hover:text-black">
              Selg klær
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroImage;
