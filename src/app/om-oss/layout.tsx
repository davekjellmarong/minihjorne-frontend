import React from "react";
import OmOss from "./page";
import Links from "@/components/features/omOss/Links";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minihjørne - Om oss",
  description:
    "Her finner du informasjon om Minihjørne, vår plattform og våre tjenester.",
};
const layout = ({ children }: any) => {
  return (
    <>
      <Links />
      <div className="px-4 py-8">{children}</div>
      {/* <Links /> */}
    </>
  );
};

export default layout;
