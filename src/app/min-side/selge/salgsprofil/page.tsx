"use client";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { AuthQueries } from "@/queryFactory/Auth";
import { UserQueries } from "@/queryFactory/User";
import EditSalgsprofil from "@/components/features/minSide/salgsprofil/EditSalgsprofil";

const Page = () => {
  const queryClient = useQueryClient();
  const jwt = queryClient.getQueryData(AuthQueries.all());
  const { data: user } = useSuspenseQuery(UserQueries.me(jwt));
  return (
    <>
      <div className="flex flex-col items-center justify-center py-6">
        <p className="max-w-[500px] px-6">
          Dette er din egen salgsprofil. Under ser du siden som en kjøper vil se
          når de trykker seg inn på profilen din. Her har du mulighet til å
          endre på utseende til å gjøre din salgsprofil personlig.{" "}
        </p>
      </div>
      <EditSalgsprofil user={user} />
    </>
  );
};

export default Page;
