import React from "react";

const HvordanBliSelger = () => {
  return (
    <div className="mx-auto max-w-3xl p-6 text-center">
      <div className="space-y-8">
        <div className="rounded-md border border-gray-300 bg-blue-100 p-6">
          <h2 className="mb-2 text-2xl font-bold text-blue-700">
            1. Lag en bruker
          </h2>
          <p>Lag deg en bruker hos oss, helt gratis.</p>
        </div>

        <div className="flex h-12 items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-blue-300"></div>
        </div>

        <div className="rounded-md border border-gray-300 bg-green-100 p-6">
          <h2 className="mb-2 text-2xl font-bold text-green-700">
            2. Ta bilder og registrer klærne
          </h2>
          <p>
            Ta bilder av plaggene du vil selge og last opp bildene. Registrer
            produktinformasjon og prissetting hos oss.
          </p>
        </div>

        <div className="flex h-12 items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-green-300"></div>
        </div>

        <div className="rounded-md border border-gray-300 bg-purple-100 p-6">
          <h2 className="mb-2 text-2xl font-bold text-purple-700">
            3. Opprett personlig salgsprofil
          </h2>
          <p>
            Gå inn på din personlige salgsprofil og skriv litt om hva slags klær
            du selger.
          </p>
        </div>

        <div className="flex h-12 items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-purple-300"></div>
        </div>

        <div className="rounded-md border border-gray-300 bg-yellow-100 p-6">
          <h2 className="mb-2 text-2xl font-bold text-yellow-700">
            4. Levering
          </h2>
          <p>Lever klærne direkte til oss eller send dem med posten.</p>
        </div>

        <div className="flex h-12 items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-yellow-300"></div>
        </div>

        <div className="rounded-md border border-gray-300 bg-red-100 p-6">
          <h2 className="mb-2 text-2xl font-bold text-red-700">
            5. Statistikk etter produktene er live
          </h2>
          <p>
            Følg med på statistikken for dine produkter etter at de har blitt
            lagt ut. Se hvordan salget går, og få innsikt i hvilke produkter som
            gjør det best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HvordanBliSelger;
