"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { logoAssets } from "@/utils/assets";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AlignLeft, UserRound, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => setIsOpen(false);

  const pathname = usePathname();

  const { blood2 } = logoAssets;

  const isActiveRoute = (path) => pathname === path;

  console.log(process.env.NEXT_PUBLIC_BASE_URL, 'url');

  const navMenuItems = (
    <li className="list-none text-gray-200 flex flex-col no-underline justify-center lg:flex-row">
      <Link
        className={`mt-2 lg:mt-0 lg:mr-3 ${
          isActiveRoute("/") ? "text-primary" : "text-gray-800"
        }`}
        href="/"
        onClick={handleLinkClick}
      >
        Home
      </Link>
      <Link
        className={`mt-2 lg:mt-0 lg:mr-3 ${
          isActiveRoute("/blood-bank") ? "text-primary" : "text-gray-800"
        }`}
        href="/blood-bank"
        onClick={handleLinkClick}
      >
        Blood Bank
      </Link>
      <Link
        className={`mt-2 lg:mt-0 lg:mr-3 ${
          isActiveRoute("/donor-register") ? "text-primary" : "text-gray-800"
        }`}
        href="/donor-register"
        onClick={handleLinkClick}
      >
        Be a Donor
      </Link>
      <Link
        className={`mt-2 lg:mt-0 lg:mr-3 ${
          isActiveRoute("/contact-us") ? "text-primary" : "text-gray-800"
        }`}
        href="/contact-us"
        onClick={handleLinkClick}
      >
        Contact
      </Link>
      <Link
        className={`mt-2 lg:mt-0 lg:mr-3 ${
          isActiveRoute("/about-us") ? "text-primary" : "text-gray-800"
        }`}
        href="/about-us"
        onClick={handleLinkClick}
      >
        About
      </Link>
    </li>
  );

  return (
    <nav className="bg-white sticky top-0 backdrop-blur border-b z-10">
      <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-center items-center lg:ml-5">
            <div className="-mr-3 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none mr-3"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <AlignLeft className="-ml-1" />
                ) : (
                  <X className="-ml-1" />
                )}
              </button>
            </div>

            <Link className="flex justify-center items-center" href="/">
              <div className="flex flex-col justify-center items-center">
                <Image
                  className="w-10 h-10 rounded-2xl"
                  src={blood2}
                  width={500}
                  height={500}
                  alt="Modhunaghat blood bank logo"
                />
              </div>
              <div className="ml-1 font-semibold">
                <p className="text-xs">MODHUNAGHAT</p>
                <p className="text-xs mt-1">BLOOD BANK</p>
              </div>
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navMenuItems}
            </div>
            <Button className="mr-2">
              <Link href="/login">Login</Link>
            </Button>

            <DropdownMenu className="focus:outline-none focus:border-0">
              <DropdownMenuTrigger>
                {" "}
                <Avatar className="ml-1 border mr-1">
                  <AvatarFallback>
                    <UserRound />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navMenuItems}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
