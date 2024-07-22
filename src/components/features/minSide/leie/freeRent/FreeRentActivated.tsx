import Image from "next/image";
import React from "react";

const FreeRentActivated = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 bg-brand-100 px-4 py-10">
      <div className="px-6 text-center text-3xl font-bold text-brand-400">
        Din gratis leie-periode er aktivert!
      </div>
      <Image
        src="/celebration.svg"
        alt="celebration"
        height={235}
        width={300}
        className="rounded-lg object-cover "
      />
      <p>
        Du kan nå registrere og selge dine barneklær uten å betale leiepris frem
        til 1. oktober. Da kan du velge om du vil forlenge din leie-periode
        eller hente din klær, og få utbetalt for dine salg.{" "}
      </p>
    </div>
  );
};

export default FreeRentActivated;
