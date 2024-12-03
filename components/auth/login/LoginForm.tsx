"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/components/auth/login/LoginSchema";
import { OTPSchema } from "@/components/auth/login/OTPSchema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login, verifyOtp } from "@/app/auth/actions";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

export default function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const loginForm = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
    },
  });

  const otpForm = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
    defaultValues: {
      pin: "",
    },
  });

  const handleLoginSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setIsSubmitting(true);
    try {
      await login(data.email);
      setEmail(data.email);
      setIsOtpSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpSubmit = async (data: z.infer<typeof OTPSchema>) => {
    setIsSubmitting(true);
    try {
      await verifyOtp(email, data.pin);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {!isOtpSent ? (
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(handleLoginSubmit)} className="grid gap-4">
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="me@example.com" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button loading={isSubmitting} type="submit">
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>
      ) : (
        <Form {...otpForm}>
          <form onSubmit={otpForm.handleSubmit(handleOtpSubmit)} className="space-y-6">
            <FormField
              control={otpForm.control}
              name="pin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>One-time Password</FormLabel>
                  <FormControl>
                    <InputOTP 
                      maxLength={6}
                      pattern={REGEXP_ONLY_DIGITS} 
                      {...field}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription>
                    Please enter the one-time password sent to your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button loading={isSubmitting} type="submit">
              {isSubmitting ? "Verifying..." : "Verify OTP"}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};