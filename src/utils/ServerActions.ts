"use server";

import { UserMethods } from "@/queryFactory/User";
import { cookies } from "next/headers";
import { PlanEnum } from "./Enums";

export const activeUserProfile = async (cool: any) => {
  const cookieStore: any = cookies();
  const token = cookieStore.get("Token");
  const user = await UserMethods.getMe(token.value);
  const payload = {
    active: true,
    paid: true,
    activeUntil: new Date("2024-10-01T00:00:00Z").toISOString(),
    activatedDate: new Date(),
    plan: PlanEnum.Free_July_To_October,
  };
  const response = await UserMethods.put(
    payload,
    user.id,
    process.env.UPDATE_USER_TOKEN,
  );
  return response;
};
