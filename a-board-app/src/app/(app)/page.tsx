"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "@/css/index.css";
import PostCard from "@/components/PostCard";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    if (!isOpen) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="flex">
      <div className="w-full">
        <div className={`flex justify-start w-full ${isOpen && "flex-col"}`}>
          <div className="py-2 lg:w-full">
            <div
              className={`relative flex items-center bg-transparent w-full h-10 rounded-lg focus-within:shadow-lg overflow-hidden lg:border-green-100 lg:border-2 ${
                isOpen ? "border-green-100 border-2 visible" : ""
              }`}
            >
              <div
                className="grid place-items-center h-full w-12 text-text-base"
                onClick={handleIsOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                onClick={handleIsOpen}
                className={`lg:hidden peer h-full w-full outline-none text-sm text-text-base pr-2 bg-transparent transition-opacity duration-500 ${
                  isOpen ? "opacity-100 visible" : "sm:hidden lg:block"
                }`}
                type="text"
                id="search"
                placeholder="Search"
              />
              <input
                className={`sm:hidden lg:block peer h-full w-0 lg:w-full outline-none text-sm text-text-base pr-2 bg-transparent`}
                type="text"
                id="search"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="lg:pl-2 w-96">
            <details className="dropdown">
              <summary className="btn m-1 bg-transparent border-none hover:bg-transparent shadow-none text-text-base">
                Community{" "}
                <FontAwesomeIcon icon={faChevronDown} className="w-4" />{" "}
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
            <button className="bg-success hover:bg-green-300 text-white py-2 px-1 lg:px-2 xl:px-4 rounded-lg text-sm">
              Create +
            </button>
          </div>
        </div>
        <div>
          <PostCard />
        </div>
      </div>
      <div className="sm:w-0 lg:w-64"></div>
    </div>
  );
}
