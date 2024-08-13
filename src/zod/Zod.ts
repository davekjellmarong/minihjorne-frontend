// validationSchema.ts
import { z } from "zod";

export const emailSchema = z.string().email().min(5).max(255);
export const usernameSchema = z.string().min(6).max(255);
export const passwordSchema = z.string().min(6).max(255);
export const passwordConfirmationSchema = z.string().min(6).max(255);
export const code = z.string().min(20);
export const resetPasswordSchema = z.object({
  code: code,
  password: passwordSchema,
  passwordConfirmation: passwordConfirmationSchema,
});
export const loginSchema = z.object({
  identifier: usernameSchema,
  password: passwordSchema,
});
