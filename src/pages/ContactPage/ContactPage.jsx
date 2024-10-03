'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";


const ContactPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <section className="text-center py-16 bg-gradient-to-r from-red-600 to-red-400 text-white">
        <h1 className="text-5xl font-bold">Get in Touch</h1>
        <p className="mt-4 text-xl">We’re here to help. Reach out to us for any questions, donations, or collaborations.</p>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto py-16 px-6 md:px-12 flex flex-col md:flex-row gap-12">
        {/* Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block mb-2 text-lg font-medium">Your Name</label>
              <Input
                type="text"
                placeholder="Enter your full name"
                className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-red-400"
                {...register('name', { required: true })}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">Name is required.</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-2 text-lg font-medium">Your Email</label>
              <Input
                type="email"
                placeholder="Enter your email address"
                className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-red-400"
                {...register('email', { required: true })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">Email is required.</p>}
            </div>

            {/* Message Field */}
            <div>
              <label className="block mb-2 text-lg font-medium">Your Message</label>
              <Textarea
                placeholder="Type your message here"
                className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-red-400"
                {...register('message', { required: true })}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">Message is required.</p>}
            </div>

            {/* Submit Button */}
            <Button className="bg-gradient-to-r from-red-500 to-red-400 text-white px-6 py-3 w-full rounded-lg hover:shadow-xl transition-shadow">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M2.94 9.29a10 10 0 015.63-5.63l.68-.27c.36-.15.76.1.76.5v2.8a.5.5 0 01-.37.48l-2.12.53a7.5 7.5 0 103.97 3.97l.53-2.12a.5.5 0 01.48-.37h2.8c.4 0 .65.4.5.76l-.27.68a10 10 0 01-5.63 5.63l-.68.27a1.5 1.5 0 01-1.15 0l-.68-.27a10 10 0 01-5.63-5.63l-.27-.68a1.5 1.5 0 010-1.15l.27-.68z"/>
              </svg>
              <span className="text-lg text-gray-800">Phone: +880 1234 567890</span>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M2.94 9.29a10 10 0 015.63-5.63l.68-.27c.36-.15.76.1.76.5v2.8a.5.5 0 01-.37.48l-2.12.53a7.5 7.5 0 103.97 3.97l.53-2.12a.5.5 0 01.48-.37h2.8c.4 0 .65.4.5.76l-.27.68a10 10 0 01-5.63 5.63l-.68.27a1.5 1.5 0 01-1.15 0l-.68-.27a10 10 0 01-5.63-5.63l-.27-.68a1.5 1.5 0 010-1.15l.27-.68z"/>
              </svg>
              <span className="text-lg text-gray-800">Email: info@modhunaghatbloodbank.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M2.94 9.29a10 10 0 015.63-5.63l.68-.27c.36-.15.76.1.76.5v2.8a.5.5 0 01-.37.48l-2.12.53a7.5 7.5 0 103.97 3.97l.53-2.12a.5.5 0 01.48-.37h2.8c.4 0 .65.4.5.76l-.27.68a10 10 0 01-5.63 5.63l-.68.27a1.5 1.5 0 01-1.15 0l-.68-.27a10 10 0 01-5.63-5.63l-.27-.68a1.5 1.5 0 010-1.15l.27-.68z"/>
              </svg>
              <span className="text-lg text-gray-800">Address: Modhunaghat, Chattogram, Bangladesh</span>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="mt-8 flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-red-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Facebook Icon */}
                <path d="M22 12a10 10 0 11-11-10V7h-3v5h3v12h5V12h4.5l.5-5H16V6c0-.3 0-1 1-1h3V0z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-red-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Twitter Icon */}
                <path d="M22 4.01c-.8.36-1.66.6-2.56.7a4.48 4.48 0 001.96-2.5c-.86.5-1.82.86-2.82 1.07a4.44 4.44 0 00-7.56 4.05A12.6 12.6 0 012.23 3.17a4.44 4.44 0 001.38 5.95 4.42 4.42 0 01-2.01-.56v.05a4.44 4.44 0 003.56 4.36c-.52.15-1.07.18-1.63.07a4.45 4.45 0 004.15 3.07A8.9 8.9 0 010 20.9a12.55 12.55 0 006.77 2c8.14 0 12.59-6.74 12.59-12.58 0-.19 0-.38-.01-.57a9.1 9.1 0 002.24-2.33z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
