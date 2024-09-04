import React, { useState } from "react";
import Form from "@/components/features/minSide/salgsmetode/Form";
import { cookies } from "next/headers";
import { UserMethods } from "@/queryFactory/User";
import { SalgsMetode, UserStatus } from "@/utils/Enums";
import ActionsColoredBox from "@/components/UI/common/ActionColoredBox";

const page = async () => {
  const token = cookies().get("Token")?.value;
  const user = await UserMethods.getMe(token);

  if (
    user.user_status.id === UserStatus.Selvregistrering ||
    user.user_status.id === UserStatus.FullService
  ) {
    return (
      <div className="px-4">
        <ActionsColoredBox
          header={`Salgsmetode - ${user.user_status.type}`}
          color="green"
          button="Gå tilbake"
          path="/min-side"
        >
          {user.user_status.id === UserStatus.Selvregistrering
            ? "Selvregistrering: Du styrer salgsprosessen på egen hånd. 30% av salgsprisen går til Minihjørne."
            : "Full service pakke: Vi tar oss av alt. 60% av salgsprisen går til Minihjørne."}
        </ActionsColoredBox>
      </div>
    );
  }
  return (
    <>
      <Form />
    </>
  );
};

export default page;
