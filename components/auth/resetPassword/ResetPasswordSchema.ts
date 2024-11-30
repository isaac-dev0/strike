import { z } from "zod";

export const ResetPasswordSchema = z.object({
  password: 
    z.string()
     .min(8, {
       message: errorMessages.form.password.passwordTooShort
     })
     .max(24, {
       message: errorMessages.form.password.passwordTooLong
     })
     .regex(/[a-z]/, {
       message: "Your password must contain at least one lowercase letter."
     })
     .regex(/[A-Z]/, {
       message: "Your password must contain at least one uppercase letter."
     })
     .regex(/[0-9]/, {
       message: "Your password must contain at least one number."
     })
     .regex(/[!@#$%^&*(),.?":{}|<>]/, {
       message: "Your password must contain at least one special character."
     }),
  confirmPassword: z.string()
});