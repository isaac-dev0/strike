"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/components/auth/login/LoginSchema";
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginUserAction } from "@/app/(auth)/actions";

import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setIsSubmitting(true);
    try {
      await loginUserAction(data.email, data.password);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField 
          control={form.control}
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
        <FormField 
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-2">
          <Button loading={isSubmitting} type="submit">
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
          <Link href="/forgot-password" className="underline">
            Forgot Password
          </Link>
        </div>
      </form>
    </Form>
  );
}