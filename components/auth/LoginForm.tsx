import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "./LoginSchema";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      form
    </Form>
  );
}