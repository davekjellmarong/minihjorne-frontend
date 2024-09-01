import React, { useState } from "react";
import Form from "@/components/features/minSide/salgsmetode/Form";
import { cookies } from "next/headers";
import { UserMethods } from "@/queryFactory/User";

const page = async () => {
  const token = cookies().get("Token")?.value;
  const user = await UserMethods.getMe(token);

  return (
    <>
      <Form user={user} />
    </>
  );
};

export default page;
