"use server";

import { signIn } from "../components/nextAuth/auth";

export const LoginWithCredentials = async (formData: FormData) => {
  const identifier = formData.get("identifier");
  const password = formData.get("password");
  const credentials = { identifier, password };
  await signIn("credentials", credentials);
};
