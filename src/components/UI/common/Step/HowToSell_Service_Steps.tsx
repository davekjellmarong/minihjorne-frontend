import React from "react";
import Step from "../../Step";

const HowToSell_Service_Steps = () => {
  return (
    <section>
      <p>
        <b>Full service-pakke</b> innebærer at du sender klærne dine til oss, og
        vi tar oss av resten. Dette inkluderer registrering av produktene,
        opprettelse av salgsprofil, og håndtering av salgsprosessen. Ved full
        service tar Minihjørne 60% av salgsprisen per solgt plagg.
      </p>
      <p className="mt-4">
        Følg disse stegene for å bruke vår full service-pakke:
      </p>
      <div className="mt-4 flex flex-col">
        <Step number="1" title="Send oss en mail">
          Send en e-post til{" "}
          <a href="mailto:iselin@minihjorne.no">iselin@minihjorne.no</a> hvor du
          forteller at du ønsker å benytte deg av vårt tilbud om fullservice.
        </Step>
        <Step number="2" title="Avtale leveringsmetode">
          Vi avtaler over e-post leveringsmetode og eventuell tidspunkt.
        </Step>
        <Step number="3" title="Lag deg en bruker">
          Opprett en konto på nettsiden vår og godkjenn salgsvilkårene.
        </Step>
        <Step number="4" title="Vi registrerer klærne">
          Vi tar bilder og registrerer klærne i nettbutikken vår samt setter
          pris. Prisene avhenger av merke og tilstand, men vi legger oss på ca
          30-40% av ordinær pris.
        </Step>
        <Step number="5" title="Administrer dine plagg">
          Klærne vil bli koblet opp mot din bruker. Inne på “min side” kan du
          administrere dine plagg, endre pris, se statistikk og få tilgang til
          din personlige salgsprofil.
        </Step>
      </div>
    </section>
  );
};

export default HowToSell_Service_Steps;
