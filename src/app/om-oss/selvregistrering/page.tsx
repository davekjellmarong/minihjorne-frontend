import React from "react";
import Header from "@/components/features/omOss/Header";
import HowToSell_Self_Steps from "@/components/UI/common/Step/HowToSell_Self_Steps";
import LinkButton from "@/components/common/buttons/LinkButton";
import BottomLinks from "@/components/UI/omOss/BottomLinks";

export const metadata = {
  title: "Minihjørne - Selvregistrering",
  description:
    "Lær hvordan du selvregistrerer dine klær for salg på Minihjørne. Følg vår enkle guide for å komme i gang.",
};

const SelvregistreringPage = () => {
  return (
    <>
      <Header text="Selvregistrering" />

      <section className="">
        {/* <p className="text-lg">
          Med selvregistrering kan du opprette dine egne produktoppføringer og
          håndtere salgsprofilen din på Minihjørne. Følg stegene nedenfor for å
          registrere klærne dine.
        </p> */}

        <HowToSell_Self_Steps />

        <LinkButton to="/auth">Start Selvregistrering</LinkButton>
      </section>

      <BottomLinks
        prevLink={{
          to: "/om-oss/hva-er-minihjorne",
          text: "Hva er Minihjørne?",
        }}
        nextLink={{
          to: "/om-oss/registrering",
          text: "Registrering",
        }}
      />
    </>
  );
};

export default SelvregistreringPage;
