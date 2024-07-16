import React from "react";
import OmOss from "./page";
import Links from "@/components/common/OmOss/Links";

const layout = ({ children }: any) => {
  return (
    <>
      <Links />
      <div className="px-4 py-8">{children}</div>
      <Links />
    </>
  );
};

export default layout;
