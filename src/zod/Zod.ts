// validationSchema.ts
import { z } from "zod";

const User = z.object({
  username: z.string(),
});

// creating a schema for strings
const mySchema = z.string();

export const emailSchema = z.string().email().min(5).max(255);
export const passwordSchema = z.string().min(6).max(255);
export const passwordConfirmationSchema = z.string().min(6).max(255);
export const code = z.string().min(20);
export const resetPasswordSchema = z.object({
  code: code,
  password: passwordSchema,
  passwordConfirmation: passwordConfirmationSchema,
});
