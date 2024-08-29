import React from "react";
import Header from "@/components/features/omOss/Header";
import AboutUsAccordions from "@/components/UI/omOss/AboutUsAccordions";
import Link from "next/link";
import HowToSell_Steps from "@/components/UI/common/Step/HowToSell_Steps";

export const metadata = {
  title: "Minihjørne - Hvordan selge klær hos Minihjørne?",
  description:
    "Lær hvordan du enkelt kan selge dine brukte barneklær på Minihjørne. Vi guider deg gjennom prosessen.",
};

const HvordanSelgePage = () => {
  return (
    <>
      <Header text="Hvordan selge klær hos Minihjørne?" />
      <div className="flex flex-col gap-10">
        <HowToSell_Steps />
        <Link className="text-center text-brand-400" href="/auth">
          Prøv oss, helt gratis!
        </Link>
        <div className="flex justify-center">
          <Link href="/om-oss/registrer-klær" className="text-brand-400">
            Registrere klær -{">"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default HvordanSelgePage;
