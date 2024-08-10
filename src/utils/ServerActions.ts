"use server";

import { UserMethods } from "@/queryFactory/User";
import { cookies } from "next/headers";
import { PlanEnum } from "./Enums";
import { emailSchema } from "@/zod/Zod";

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

export const sendPasswordResetEmail = async (formdata: FormData) => {
  const email = formdata.get("email");
  const dude = emailSchema.parse(email);
  if (dude) {
    console.log("Error undeer");
    console.log(dude);
    throw new Error(dude);
  }
  const response = await UserMethods.sendResetPasswordMail({ email: email });
  return response;
};

export const resetPassword = async (formdata: FormData) => {
  const code = formdata.get("code");
  const password = formdata.get("password");
  const passwordConfirmation = formdata.get("passwordConfirmation");

  // const response = await UserMethods.resetPassword({
  //   code: code,
  //   password: password,
  //   passwordConfirmation: passwordConfirmation,
  // });
  return "response";
};
