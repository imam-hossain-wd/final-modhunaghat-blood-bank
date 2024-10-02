"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const FindBlood = () => {
  const { handleSubmit, control } = useForm();
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="bg-gray-50 p-5">
      <Card className="w-[80%] lg:w-[51%] mx-auto lg:-mt-32 mb-10 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-1 p-3 flex flex-col gap-2 justify-center items-center lg:flex-row "
        >
          {/* First Select Field: Blood Group */}
          <Controller
            name="bloodGroup"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange}>
                <SelectTrigger className="w-full lg:w-[160px]">
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

          {/* Second Select Field: Location */}
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange}>
                <SelectTrigger className="w-full lg:w-[160px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="New York">New York</SelectItem>
                  <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                  <SelectItem value="Chicago">Chicago</SelectItem>
                  <SelectItem value="Houston">Houston</SelectItem>
                </SelectContent>
              </Select>
            )}
          />

          {/* Date Picker Field */}
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <Popover
                open={isDatePickerOpen}
                onOpenChange={setIsDatePickerOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full lg:w-[160px] justify-start text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value ? (
                      format(field.value, "dd-MM-yyyy")
                    ) : (
                      <span>Pick a date</span>
                    )}
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

          {/* Submit Button */}
          <Button type="submit" className="w-full lg:w-40">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default FindBlood;
