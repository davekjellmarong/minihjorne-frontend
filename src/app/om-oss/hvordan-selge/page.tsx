import React from "react";
import Header from "@/components/features/omOss/Header";
import HowToSell_Self_Steps from "@/components/UI/common/Step/HowToSell_Self_Steps";
import HowToSell_Service_Steps from "@/components/UI/common/Step/HowToSell_Service_Steps";
import LinkButton from "@/components/common/buttons/LinkButton";
import BottomLinks from "@/components/UI/omOss/BottomLinks";

export const metadata = {
  title: "Minihjørne - Hvordan selge klær hos Minihjørne?",
  description:
    "Lær hvordan du enkelt kan selge dine brukte barneklær på Minihjørne. Vi guider deg gjennom prosessen.",
};

const HvordanSelgePage = () => {
  return (
    <>
      <Header text="Hvordan selge klær hos Minihjørne?" />
      <div className="flex flex-col gap-6">
        <p className="text-lg">
          Hos Minihjørne er det to måter å selge klær på:
        </p>
        <div className="flex flex-col space-y-2 text-lg">
          <p>
            <b>Selvregistrering</b>
          </p>
          <p>
            <b>Full service-pakke</b>
          </p>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-brand-500">
            Selvregistrering:
          </h2>
          <HowToSell_Self_Steps />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-500">
            Full service-pakke:
          </h2>
          <HowToSell_Service_Steps />
        </section>

        <LinkButton to="/auth">Prøv oss i dag!</LinkButton>
        <BottomLinks
          prevLink={{
            to: "/om-oss/hva-er-minihjorne",
            text: "Hva er Minihjørne?",
          }}
          nextLink={{ to: "/om-oss/registrering", text: "Registrering" }}
        />
      </div>
    </>
  );
};

export default HvordanSelgePage;
