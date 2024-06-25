"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const CustomSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex">
      <div className={`${isOpen ? 'block' : 'hidden'} sm:block bg-gray-800 text-white w-64 min-h-screen p-4`}>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Sidebar</h2>
          <button onClick={toggleSidebar} className="sm:hidden text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-4">
          <a href="#" className="block px-4 py-2 rounded-md hover:bg-gray-700">Home</a>
          <a href="#" className="block px-4 py-2 rounded-md hover:bg-gray-700">About</a>
          <a href="#" className="block px-4 py-2 rounded-md hover:bg-gray-700">Services</a>
          <a href="#" className="block px-4 py-2 rounded-md hover:bg-gray-700">Contact</a>
        </nav>
      </div>
      <div className="flex-1 p-4">
        <button onClick={toggleSidebar} className="sm:hidden text-gray-800 mb-4">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomSidebar;