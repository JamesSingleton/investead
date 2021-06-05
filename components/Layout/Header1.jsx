import { useState, useLayoutEffect, useRef, useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import { FaHome } from "react-icons/fa";
import { WEBSITE_NAME } from "@/lib/constants";
import BuyCard from "./header/BuyCard";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [borrowOpen, setBorrowOpen] = useState(false);
  const borrowButtonRef = useRef();

  const mobileNavClass = cn({
    "absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-10": true,
    hidden: !navbarOpen,
  });

  const openBorrowMenu = (event) => {
    event.stopPropagation();
    setBorrowOpen(!borrowOpen);
  };

  useLayoutEffect(() => {
    const listener = (event) => {
      if (event.target !== borrowButtonRef.current) {
        setBorrowOpen(false);
      }
    };
    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, []);

  return (
    <header className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <a href="/" className="flex justify-start lg:w:0 lg:flex-1">
            <FaHome className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
            <span className="font-semibold text-4xl tracking-tight text-gray-900 ml-2">
              {WEBSITE_NAME}
            </span>
          </a>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setNavbarOpen(true)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open Menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              <button
                ref={borrowButtonRef}
                type="button"
                onClick={(event) => openBorrowMenu(event)}
                className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="uppercase">Buy</span>
                <svg
                  className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {borrowOpen && <BuyCard />}
            </div>
            <a
              href="#"
              className="text-base font-medium uppercase text-gray-500 hover:text-gray-900"
            >
              For Banks
            </a>
            <a
              href="/about"
              className="text-base font-medium uppercase text-gray-500 hover:text-gray-900"
            >
              About
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium uppercase text-gray-500 hover:text-gray-900"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
      <div className={mobileNavClass}>
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-2xl tracking-tight">
                  {WEBSITE_NAME}
                </span>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  onClick={() => setNavbarOpen(false)}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close Menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium uppercase text-gray-900">
                    Home Loan
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#"
                className="text-base font-medium uppercase text-gray-900 hover:text-gray-700"
              >
                For Banks
              </a>
              <a
                href="#"
                className="text-base font-medium uppercase text-gray-900 hover:text-gray-700"
              >
                About
              </a>
            </div>
            <div>
              <a
                href="#"
                className="uppercase w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign Up
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
