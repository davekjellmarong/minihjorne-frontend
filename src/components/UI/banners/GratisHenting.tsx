import { shippingPrice } from "@/utils/constants";
import React from "react";

const GratisHenting = () => {
  return (
    <div className="bg-brand-300 px-6 py-1 text-center text-white shadow-lg">
      <p className="text-sm">
        Fast frakt {shippingPrice} kr - Gratis henting i Oslo
      </p>
      {/* <p className="text-sm">
        Bestill nå og hent varene dine gratis på vårt hentested i Oslo.
      </p> */}
    </div>
  );
};

export default GratisHenting;
