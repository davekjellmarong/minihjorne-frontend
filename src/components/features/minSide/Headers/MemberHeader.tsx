import React from "react";
import ActionsColoredBox from "@/components/UI/common/ActionColoredBox";
import Link from "next/link";

const MemberHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-brand-200 px-4">
      <ActionsColoredBox
        header="Bli selger på Minihjørne"
        color="white"
        path="/min-side/selge/salgs-metode"
        button="Velg salgsmetode"
        headerWeight="semi-bold"
      >
        Velg en salgsmetode: <b>selvregistrering </b>
        for full kontroll eller vår <b>full service pakke.</b>
        <p className="mt-4 text-sm">
          Bli selger gratis - vi tar kun provision på salg.
        </p>
      </ActionsColoredBox>
    </div>
  );
};

export default MemberHeader;
