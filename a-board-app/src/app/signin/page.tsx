"use client";
import { signIn } from "next-auth/react";
import React, { useState, ChangeEvent } from "react";

export default function Signin() {

    const [username, setUsername] = useState<string>('');

    const handleSubmit = async () => {
        console.log('Form submitted!');
        const res = await signIn("credentials", {
          username: username,
          callbackUrl: "/",
          redirect: true,
        })
      };

    return (
        <div className="bg-green-500 h-screen w-full"></div>
    )
}