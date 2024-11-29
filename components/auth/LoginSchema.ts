import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Field must be a valid email address."
  }),
  password: z.string()
});