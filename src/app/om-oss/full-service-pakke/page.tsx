import React from "react";
import Header from "@/components/features/omOss/Header";
import HowToSell_Service_Steps from "@/components/UI/common/Step/HowToSell_Service_Steps";
import LinkButton from "@/components/common/buttons/LinkButton";
import BottomLinks from "@/components/UI/omOss/BottomLinks";

export const metadata = {
  title: "Minihjørne - Full Service Pakke",
  description:
    "Oppdag vår full service-pakke for å selge dine klær på Minihjørne. Vi håndterer alt fra fotografering til salg.",
};

const FullServicePakkePage = () => {
  return (
    <>
      <Header text="Full Service Pakke" />

      <section className="">
        <HowToSell_Service_Steps />

        <LinkButton to="/auth">Bestill Full Service</LinkButton>
      </section>

      <BottomLinks
        prevLink={{ to: "/om-oss/registrering", text: "Registrering" }}
        nextLink={{ to: "/om-oss/salgsprofil", text: "Salgsprofil" }}
      />
    </>
  );
};

export default FullServicePakkePage;
