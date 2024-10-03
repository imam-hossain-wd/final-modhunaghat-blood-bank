"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const LoginPage = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Login Form Data:", data);
    // Handle the login logic here
  };
  return (
    <div className="bg-gray-50 p-5">
      <Card className="w-[90%] lg:w-[35%] mx-auto p-5 mb-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-3">
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full"
                />
              )}
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-sm">
              Password
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full"
                />
              )}
            />
          </div>

          <Link href="/forgot-password" className="text-blue-500 text-sm mt-3 underline">
              Forgot Password?
            </Link>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button type="submit" className="w-full lg:w-48 mt-2">
              Login
            </Button>
          </div>

          {/* Forgot Password and Register Links */}
          <div className="flex justify-center items-center mt-3 text-sm">
            
            <span className=""> 
                New to Blood Bank? 
            <Link href="/signup" className="text-blue-500 underline ml-1">
              Register
            </Link>
            </span>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
