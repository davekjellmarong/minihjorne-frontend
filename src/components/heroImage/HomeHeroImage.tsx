import Link from "next/link";
import React from "react";

const HomeHeroImage = () => {
  return (
    <div className="bg-homeHeroMobile h-[700px] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="backdrop-brightness-[0.7] h-full w-full flex justify-center items-center gap-8 flex-col">
        <p className="text-white text-xl ">Kjøp og selg barneklær</p>
        <h1 className="text-white text-center font-bold text-4xl ">
          Enkelt.
          <br />
          Rimelig.
          <br />
          Grønt.
        </h1>

        <Link href="/produkter">
          <button className=" border-2 text-white bg-indigo-500 border-indigo-500 px-8 py-4 rounded-lg hover:bg-brand-100 hover:text-black">
            Se våre produkter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeroImage;
