import React from "react";
import Header from "@/components/features/omOss/Header";
import InfoColoredBox from "@/components/UI/common/InfoColoredBox";
import BottomLinks from "@/components/UI/omOss/BottomLinks";
import SubHeader from "@/components/features/omOss/SubHeader";
import PreviousPageLink from "@/components/UI/omOss/PreviousPageLink";

export const metadata = {
  title: "Minihjørne - Priser",
  description: "Her finner du informasjon om priser på Minihjørne",
};

const PriserPage = () => {
  return (
    <>
      <Header text="Priser" />

      <section className="">
        <div className="flex flex-col gap-10">
          <div>
            <SubHeader>Provisjon</SubHeader>
            <p>
              Minihjørne tilbyr to forskjellige prispakker for å møte dine behov
              som selger. Du kan velge mellom <b>Selvregistrering </b>
              eller
              <b> Full service pakke, </b> hver med sine egne betingelser og
              provisjonssatser.
            </p>
          </div>

          <InfoColoredBox
            color="green"
            title="Selvregistrering - 30% provisjon"
          >
            <span className="text-lg font-semibold">Selvregistrering</span>
            <span>
              Ved selvregistrering oppretter du dine egne produktoppføringer og
              håndterer salgsprofilen din selv. Provisjonen for selvregistrering
              er 30% per salg. Dette gir deg mer kontroll over salgsprosessen og
              en rimeligere provisjonssats.
            </span>
          </InfoColoredBox>

          <InfoColoredBox color="blue" title="Full Service - 60% provisjon">
            <span className="text-lg font-semibold">Full Service</span>
            <span>
              Med full service sender du klærne dine til oss, og vi håndterer
              hele prosessen fra registrering til salg. Provisjonen for full
              service er 60% per salg. Dette inkluderer alt fra fotografering og
              oppretting av produktoppføringer til administrasjon og
              kundeservice.
            </span>
          </InfoColoredBox>
        </div>
      </section>

      <PreviousPageLink to="/om-oss/levering">Levere klær</PreviousPageLink>
    </>
  );
};

export default PriserPage;
