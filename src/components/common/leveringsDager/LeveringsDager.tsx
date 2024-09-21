import React from "react";

const LeveringsDager = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="">
        Vi har levering følgende dager i <b>September</b>:
      </p>
      <ul className="font-bold">
        <li>5. September</li>
        <li>6. September</li>
        <li>12. September</li>
        <li>13. September</li>
        <li>17. September</li>
        <li>18. September</li>
        <li>23. September</li>
        <li>27. September</li>
        <li>30. September</li>
        <li className="text-sm font-normal italic">
          Leveringsdager for oktober kommer 1 oktober
        </li>
      </ul>
      <p>
        Disse dagene kan du levere klærne mellom <b>17:00 og 21:00</b>. Send oss
        en mail om hvilken dag du ønsker å levere klærne, så er vi klare til å
        ta deg i mot.
      </p>
      <p>
        Dersom du ikke kan levere på noen av disse dagene, send oss en mail til
        iselin@minihjorne.no, så finner vi ut av en løsning.
      </p>
    </div>
  );
};

export default LeveringsDager;
