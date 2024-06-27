"use client";
import { signIn } from "next-auth/react";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";

export default function Signin() {
  const [username, setUsername] = useState<string>("");

  const handleSubmit = async () => {
    console.log("Form submitted!");
    const res = await signIn("credentials", {
      username: username,
      callbackUrl: "/",
      redirect: true,
    });
  };

  return (
    <div className="sm:flex-row lg:flex bg-green-500 min-h-screen">
      <div className="sm:w-full lg:w-2/3 h-full"></div>
      <div className="flex lg:justify-center bg-green-300 min-h-96 sm:w-full lg:w-1/3 rounded-b-badge sm:rounded-b-badge lg:rounded-r-none lg:rounded-l-badge">
        <div className="flex flex-col w-full lg:w-80 justify-center items-center">
          <Image
            className="py-2 sm:w-96 lg:w-full"
            src="/notebook.svg"
            width={180}
            height={100}
            alt="profile photo"
          />
          <Image
            className="mt-4 lg:mb-0"
            src="/logo/aboard-white.svg"
            width={110}
            height={100}
            alt="profile photo"
          />
        </div>
      </div>
      <div className="absolute flex justify-center lg:items-center lg:h-full ml-4 lg:ml-0 lg:w-2/3">
        <div className="flex flex-col justify-start">
          <h1 className="mt-28 sm:mt-28 lg:mt-0 font-medium text-white text-xl lg:text-3xl">
            Sign In
          </h1>
          <label className="input input-bordered flex items-center gap-2 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
        </div>
      </div>
    </div>
  );
}
