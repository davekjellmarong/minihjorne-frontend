// validationSchema.ts
import { z } from "zod";

const User = z.object({
  username: z.string(),
});

// creating a schema for strings
const mySchema = z.string();

export const emailSchema = z.string().email().min(5).max(255);
