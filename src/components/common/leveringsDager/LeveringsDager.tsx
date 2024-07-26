import React from "react";

const LeveringsDager = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="">
        Vi har levering følgende dager i <b>August</b>:
      </p>
      <ul className="font-bold">
        <li>6. August</li>
        <li>8. August</li>
        <li>13. August</li>
        <li>15. August</li>
        <li className="text-sm font-normal italic">
          Resten av dagene kommer snart...
        </li>
      </ul>
      <p>
        Disse dagene kan du levere klærne mellom <b>17:00 og 20:00</b>. Send oss
        en mail om hvilken dag du ønsker å levere klærne, så er vi klare til å
        ta deg i mot.
      </p>
      <p>
        Dersom du ikke kan levere på noen av disse dagene, send oss en mail til
        kontakt@minihjorne.no, så finner vi ut av en løsning.
      </p>
    </div>
  );
};

export default LeveringsDager;
