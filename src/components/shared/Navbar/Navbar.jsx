"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navMenuItems = (
    <li className="list-none text-gray-200 flex flex-col no-underline justify-center lg:flex-row">
      <Link className="text-gray-800 mt-2 lg:mt-0 lg:mr-3" href="/">
        Home
      </Link>
      <Link className="text-gray-800 mt-2 lg:mt-0 lg:mr-3" href="/blood-bank">
        Blood Bank
      </Link>
      <Link className="text-gray-800 mt-2 lg:mt-0 lg:mr-3" href="/donor-register">
        Be a Donor
      </Link>
      <Link className="text-gray-800 mt-2 lg:mt-0 lg:mr-3" href="/contact-us">
        Contact
      </Link>
      <Link className="text-gray-800 mt-2 lg:mt-0 lg:mr-3" href="/about-us">
        About
      </Link>
    </li>
  );
  

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              LifeGivers
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navMenuItems}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black  focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
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