import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Brukte Barneklær - Minihjørne | Produkter",
  description:
    "Utforsk vårt brede utvalg av brukte barneklær hos Minihjørne. Finn alt fra nattøy til ytterklær til rimelige priser.",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
