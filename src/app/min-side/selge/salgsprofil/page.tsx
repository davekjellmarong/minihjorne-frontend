import React from "react";
import EditSalgsprofil from "@/components/features/minSide/salgsprofil/EditSalgsprofil";

const Page = () => {
  console.log("salgsprofil");
  return (
    <>
      <div className="flex flex-col items-center justify-center py-6">
        <p className="max-w-[500px] px-6">
          Dette er din egen salgsprofil. Under ser du siden som en kjøper vil se
          når de trykker seg inn på profilen din. Her har du mulighet til å
          endre på utseende til å gjøre din salgsprofil personlig.{" "}
        </p>
      </div>
      <EditSalgsprofil />
    </>
  );
};

export default Page;
