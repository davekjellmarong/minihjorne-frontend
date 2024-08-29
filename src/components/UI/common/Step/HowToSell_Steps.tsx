import React from "react";
import Step from "../../Step";

const HowToSell_Steps = () => {
  return (
    <section>
      {/* <h2 className="text-2xl font-bold text-brand-500">
        Hvordan selge på Minihjørne
      </h2> */}
      <p>
        Det er enkelt å selge dine brukte barneklær på Minihjørne. Følg disse
        stegene:
      </p>
      <div className="mt-4 flex flex-col gap-4">
        <Step number="1" title="Registrer deg">
          Opprett en konto på Minihjørne.
        </Step>
        <Step number="2" title="Last opp produkter">
          Ta gode bilder av klærne dine, fyll inn informasjon av hvert plagg,
          som farge, plagg, str, kjønn osv. Husk at gode bilder øker sjansene
          for salg!
        </Step>
        <Step number="3" title="Opprett en personlig salgsprofil">
          Etter at du har registrert produktene, kan du lage din egen
          salgsprofil. Her legger du til en overskrift og en beskrivelse. Det
          kan være en fordel å skrive litt om deg selv og klærne du selger.
        </Step>
        <Step number="4" title="Lever klærne til oss">
          Lever klærne til Minihjørne på vår adresse, eller send dem til oss med
          posten. Vi tar oss av resten!
        </Step>
        <Step number="5" title="Følg med på salgene dine">
          Etter at klærne dine er lagt ut, kan du følge med på salgene dine via
          «Mine sider» under «Statistikk». Her kan du blant annet se
          produktvisninger, salgsprofilvisninger, og informasjon om solgte
          produkter.
        </Step>
      </div>
    </section>
  );
};

export default HowToSell_Steps;
