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

      <div className="flex w-full max-w-md flex-col items-center rounded-lg bg-white p-6 text-center shadow-md">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Bli selger på Minihjørne
        </h2>
        <p className="mb-4 text-gray-600">
          Velg en salgsmetode: <b>selvregistrering </b>
          for full kontroll eller vår <b>full service pakke.</b>
        </p>
        <p className="mb-4 text-sm text-gray-600">
          Bli selger gratis - vi tar kun provision på salg.
        </p>
        <Link
          href="/min-side/selge/salgs-metode"
          className="mt-4 inline-block rounded-lg bg-brand-500 px-4 py-2 text-white transition-colors hover:bg-brand-600"
        >
          Velg salgsmetode
        </Link>
      </div>
    </div>
  );
};

export default MemberHeader;
