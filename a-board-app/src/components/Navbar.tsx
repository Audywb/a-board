"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import aboardWhite from "@public/logo/aboard-white.svg"
import { Castoro } from "next/font/google";

interface MenuItem {
  path: string;
  name: string;
}

interface CustomNavbarProps {
  menu: MenuItem[];
}

const castoro = Castoro({ weight: '400' ,subsets: ["latin"] });

const CustomNavbar: React.FC<CustomNavbarProps> = ({ menu }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.classList.add("inter-class-name");
    return () => {
      document.body.classList.remove("inter-class-name");
    };
  }, []);

  return (
    <nav className="relative bg-[#243831] shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                  className="w-auto h-4 lg:h-5"
                  src={aboardWhite}
                  alt="a Board logo"
                  width={100}
                  height={15}
                />
            </Link>
            <div className="flex lg:hidden">
              <button
                onClick={handleIsOpen}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-green-500 text-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:items-center lg:hidden ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-2 lg:flex-row lg:items-center lg:mx-8">
              {menu && menu.map((item, index) => (
                <a key={index} href={item.path} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  {item.name}
                </a>
              ))}
            </div>
            {isOpen && 
            <div className={`${castoro.className} flex justify-center translate-x-0 opacity-100`}>
              <button className="bg-success hover:bg-green-300 text-white py-2 px-4 rounded-xl">
                Sign In
              </button>
            </div>
            }
          </div>
          <div className={`${castoro.className} hidden lg:block`}>
            <button className="bg-success hover:bg-green-300 text-white py-2 px-4 rounded-xl">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;