import Header from "@/components/features/omOss/Header";
import React from "react";

const PriserPage = () => {
  return (
    <>
      <Header text="Priser" />
      <div className="flex flex-col gap-10">
        <div className="rounded-md bg-yellow-100 p-4">
          <p className="font-semibold text-yellow-800">
            Gratis leieperiode ut september!
          </p>
          <p>
            Som en oppstartskampanje tilbyr vi gratis leie av plass på
            Minihjørne ut september. Dette betyr at du kan registrere og selge
            dine barneklær uten å betale leiepris frem til oktober. Benytt
            sjansen til å prøve vår plattform uten kostnader!
          </p>
        </div>
        <div>
          <div>
            <p className="text-sm font-light text-purple-700">Leiepris</p>
            <h2 className="text-2xl">Hva er leiepris?</h2>
          </div>
          <p>
            Leiepris hos Minihjørne er en ukespris på 170 kr. Dette beløpet
            dekker leie av plass for dine klær på plattformen vår i en uke av
            gangen. Du bestemmer selv hvor lenge du vil leie plassen, og betaler
            for den perioden på forhånd.
          </p>
        </div>
        <div>
          <div>
            <p className="text-sm font-light text-purple-700">Provisjon</p>
            <h2 className="text-2xl">Hva er provisjon?</h2>
          </div>
          <p>
            Når du selger et plagg gjennom Minihjørne, tar vi en provisjon på
            20%. Dette betyr at 20% av salgssummen går til oss, og 80% til deg
            som selger. Provisjonen dekker kostnadene ved drift av plattformen,
            betalingsbehandling, kundeservice og annet administrativt arbeid.
          </p>
        </div>
      </div>
    </>
  );
};

export default PriserPage;
