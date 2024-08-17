import React from "react";

const LeveringsDager = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="">
        Vi har levering følgende dager i <b>August</b>:
      </p>
      <ul className="font-bold">
        <li>21. August</li>
        <li>22. August</li>
        <li>26. August</li>
        <li>28. August</li>
        <li>29. August</li>
        <li>30. August</li>
        <li className="text-sm font-normal italic">
          Leveringsdager for september kommer 1 september
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
