"use server";

import { UserMethods } from "@/queryFactory/User";
import { cookies } from "next/headers";
import { PlanEnum } from "./Enums";
import { emailSchema, resetPasswordSchema } from "@/zod/Zod";
import { z } from "zod";

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
  try {
    emailSchema.parse(email);
  } catch (err) {
    if (err instanceof z.ZodError) {
      throw new Error(err.message);
    }
  }
  const response = await UserMethods.sendResetPasswordMail({ email: email });
  return response;
};

export const resetPassword = async (formdata: FormData) => {
  const data = Object.fromEntries(formdata.entries());
  try {
    resetPasswordSchema.parse(data);
  } catch (err) {
    if (err instanceof z.ZodError) {
      throw new Error(err.message);
    }
  }

  const { code, password, passwordConfirmation } = data;
  const response = await UserMethods.resetPassword({
    code: code,
    password: password,
    passwordConfirmation: passwordConfirmation,
  });
  return response;
};
