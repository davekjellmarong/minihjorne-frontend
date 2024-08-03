import React from "react";
import Link from "next/link";

const GratisLeie = () => {
  return (
    <div className="m-4 flex flex-col items-center justify-end rounded-md bg-brand-200 px-6 py-6 text-brand-900 shadow-lg">
      <div className="mb-4 text-center">
        <h2 className="mb-2 text-lg font-bold text-brand-900">
          🎉 Gratis Leieperiode!
        </h2>
        <p className="text-base text-brand-900">
          Registrer deg nå og nyt gratis leie frem til oktober! Vi har nettopp
          lansert og ønsker å gi deg dette spesialtilbudet som velkomst.
        </p>
      </div>
      <Link href="/min-side/selge/leie">
        <button className="rounded bg-brand-500 px-4 py-2 font-semibold text-white">
          Kom i Gang
        </button>
      </Link>
    </div>
  );
};

export default GratisLeie;
