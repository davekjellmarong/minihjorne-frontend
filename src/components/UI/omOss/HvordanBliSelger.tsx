import React from "react";
import ColorStepBox from "../common/ColorStepBox";

const HvordanBliSelger = () => {
  return (
    <div className="mx-auto max-w-3xl p-6 text-center">
      <div className="space-y-8">
        <ColorStepBox
          title="1. Lag en bruker"
          description="Lag deg en bruker hos oss, helt gratis."
          backgroundColor="blue"
          textColor="text-blue-700"
        />
        <ColorStepBox
          title="2. Ta bilder og registrer klærne"
          description="Ta bilder av plaggene du vil selge og last opp bildene. Registrer produktinformasjon og prissetting hos oss."
          backgroundColor="green"
          textColor="text-green-700"
        />
        <ColorStepBox
          title="3. Opprett personlig salgsprofil"
          description="Gå inn på din personlige salgsprofil og skriv litt om hva slags klær du selger."
          backgroundColor="purple"
          textColor="text-purple-700"
        />
        <ColorStepBox
          title="4. Levering"
          description="Lever klærne direkte til oss eller send dem med posten."
          backgroundColor="yellow"
          textColor="text-yellow-700"
        />
        <ColorStepBox
          title="5. Statistikk etter produktene er live"
          description="Følg med på statistikken for dine produkter etter at de har blitt lagt ut. Se hvordan salget går, og få innsikt i hvilke produkter som gjør det best."
          backgroundColor="red"
          textColor="text-red-700"
        />
      </div>
    </div>
  );
};

export default HvordanBliSelger;
