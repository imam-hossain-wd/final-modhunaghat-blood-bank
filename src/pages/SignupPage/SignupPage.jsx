"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const SignupPage = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Form Data:", data);
    // Handle the signup logic here
  };

  return (
    <div className="bg-gray-50 p-5">
      <Card className="w-[90%] lg:w-[40%] mx-auto p-5 mb-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-3">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm">
              Name
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="name"
                  placeholder="Name"
                  className="w-full"
                />
              )}
            />
          </div>

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

          {/* Phone Number Field */}
          <div className="flex flex-col">
            <label htmlFor="phone_number" className="mb-1 text-sm">
              Phone Number
            </label>
            <Controller
              name="phone_number"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="phone_number"
                  type="tel"
                  placeholder="Phone Number"
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

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button type="submit" className="w-full lg:w-48 mt-2">
              Sign Up
            </Button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-3 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 underline">
              Login here
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default SignupPage;
