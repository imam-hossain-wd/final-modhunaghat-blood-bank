"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import { Checkbox } from "@/components/ui/checkbox"; // Assuming you have a Checkbox component
import Link from "next/link";

export default function DonorRegisterForm() {
  const { handleSubmit, control, watch } = useForm();
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);


  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  // Watch the terms and conditions checkbox
  const termsAccepted = watch("terms");

  return (
    <div className="bg-gray-50 p-5">
      <Card className="w-[90%] lg:w-[55%] mx-auto p-5 mb-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 text-sm">Name</label>
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

            {/* Phone Number Field */}
            <div className="flex flex-col">
              <label htmlFor="phone_number" className="mb-1 text-sm">Phone Number</label>
              <Controller
                name="phone_number"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="phone_number"
                    placeholder="Phone Number"
                    className="w-full"
                  />
                )}
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-sm">Email</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="email"
                    placeholder="Email"
                    className="w-full"
                  />
                )}
              />
            </div>

            {/* Age Field */}
            <div className="flex flex-col">
              <label htmlFor="age" className="mb-1 text-sm">Age</label>
              <Controller
                name="age"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="age"
                    type="number"
                    placeholder="Age"
                    className="w-full"
                  />
                )}
              />
            </div>

            {/* Weight Field */}
            <div className="flex flex-col">
              <label htmlFor="weight" className="mb-1 text-sm">Weight</label>
              <Controller
                name="weight"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="weight"
                    type="number"
                    placeholder="Weight"
                    className="w-full"
                  />
                )}
              />
            </div>

            {/* Blood Group Field */}
            <div className="flex flex-col">
              <label htmlFor="blood_group" className="mb-1 text-sm">Blood Group</label>
              <Controller
                name="blood_group"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger id="blood_group" className="w-full">
                      <SelectValue placeholder="Blood Group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A+">A+</SelectItem>
                      <SelectItem value="B+">B+</SelectItem>
                      <SelectItem value="AB+">AB+</SelectItem>
                      <SelectItem value="O+">O+</SelectItem>
                      <SelectItem value="A-">A-</SelectItem>
                      <SelectItem value="B-">B-</SelectItem>
                      <SelectItem value="AB-">AB-</SelectItem>
                      <SelectItem value="O-">O-</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            {/* Last Donation Date Field */}
            <div className="flex flex-col">
              <label htmlFor="last_donation_date" className="mb-1 text-sm">Last Donation Date</label>
              <Controller
                name="last_donation_date"
                control={control}
                render={({ field }) => (
                  <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? format(field.value, "dd-MM-yyyy") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          setIsDatePickerOpen(false); // Close the date picker after selecting a date
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
            </div>

            {/* Image Upload Field */}
            <div className="flex flex-col">
              <label htmlFor="image" className="mb-1 text-sm">Image Upload</label>
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="image"
                    type="file"
                    className="w-full"
                  />
                )}
              />
            </div>
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center">
            <Controller
            onClick={()=> setIsActive(!isActive)}
              name="terms"
              control={control}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  id="terms"
                  className="mr-2"
                />
              )}
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the <Link href="/donor/register/terms-condition" className="text-blue-500 underline">terms and conditions</Link>
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button type="submit" className="w-full lg:w-48 mt-2" disabled={isActive === true ? false : true}>
              Register
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
