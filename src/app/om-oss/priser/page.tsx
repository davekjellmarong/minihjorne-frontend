import Header from "@/components/features/omOss/Header";
import InfoColoredBox from "@/components/UI/common/InfoColoredBox";
import React from "react";

const PriserPage = () => {
  return (
    <>
      <Header text="Priser" />
      <div className="flex flex-col gap-10">
        <InfoColoredBox title="Gratis leieperiode ut september!" color="yellow">
          Som en oppstartskampanje tilbyr vi gratis leie av plass på Minihjørne
          ut september. Dette betyr at du kan registrere og selge dine barneklær
          uten å betale leiepris frem til 1. Oktober. Benytt sjansen til å prøve
          vår plattform uten kostnader!
        </InfoColoredBox>
        <div>
          <div>
            <p className="text-sm font-light text-purple-700">Leiepris</p>
            <h2 className="text-2xl">Hva er leiepris?</h2>
          </div>
          <p>
            Prisen for å leie en salgsplass hos Minihjørne er 170 kr/uke. Du
            bestemmer selv hvor mange uker du vil leie og betaler for den valgte
            perioden på forhånd.
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
