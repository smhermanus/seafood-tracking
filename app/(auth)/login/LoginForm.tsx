"use client";

import LoadingButton from "@/components/LoadingButton";
import { PasswordInput } from "@/components/PasswordInput";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { loginSchema, LoginValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { login } from "./actions";
import { BsApple, BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  const [error, setError] = useState<string>();

  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginValues) {
    setError(undefined);
    startTransition(async () => {
      const { error } = await login(values);
      if (error) setError(error);
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {error && <p className="text-center text-destructive">{error}</p>}

        <div className="m-auto flex h-[400px] w-[300px] flex-col gap-4 p-6 shadow-xl shadow-gray-500">
          <h1 className="mb-2 text-center font-bold">Log in</h1>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Username" {...field} />
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
                <FormControl>
                  <PasswordInput placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoadingButton
            loading={isPending}
            type="submit"
            className="w-full bg-blue-400"
          >
            Log in
          </LoadingButton>
          <p className="text-center text-xs">
            {" "}
            Log in with your Google, Facebook, LinkedIn, Office 365, or Apple
            account
          </p>
          <div className="flex justify-evenly">
            <BsFacebook color="blue" size={20} />
            <FaGoogle color="red" size={20} />
            <BsLinkedin color="blue" size={20} />
            <BsApple color="black" size={20} />
          </div>
        </div>
      </form>
    </Form>
  );
}
