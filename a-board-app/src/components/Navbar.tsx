"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import aboardWhite from "@public/logo/aboard-white.svg";
import { Castoro } from "next/font/google";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from "next/navigation";
import '@/css/index.css';

interface MenuItem {
  path: string;
  name: string;
  icon: string;
  iconbold: string;
}

interface CustomNavbarProps {
  menu: MenuItem[];
}

const castoro = Castoro({ weight: "400", subsets: ["latin"] });

const CustomNavbar: React.FC<CustomNavbarProps> = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const routPath = usePathname()

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
    <nav className={`relative shadow dark:bg-gray-800 ${isOpen ? 'bg-[#192923]' : 'bg-[#243831]'}`}>
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
          <div className={`hidden lg:block`}>
            {session && session?.user ? (
              <div className="flex">
                <div className="text-white font-medium px-2">
                  <div>{session.user.name}</div>
                </div>
                <div className="avatar">
                  <div className="rounded-full w-9 h-9 -my-1 mr-2">
                    <Image
                      src="/profile/testprofile.jpg"
                      width={22}
                      height={22}
                      alt="profile photo"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <button
                className={`${castoro.className} bg-success hover:bg-green-300 text-white py-2 px-4 rounded-xl`}
                onClick={() => router.push("/sign-in")}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={`flex w-full justify-end absolute z-50 fadeInUp-animation`}>
          <div className="w-2/4 bg-green-500 h-screen rounded-l-xl mt-[-3.5rem] fixed z-100">
            <div className="px-4 py-4 mt-2 text-white text-2xl">
              <FontAwesomeIcon icon={faArrowRight} className="p-2" onClick={handleIsOpen} />
            </div>
            <div className="px-2 py-4 text-white text-lg">
              {menu && menu.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={`flex px-2 py-2 rounded-md hover:font-bold ${routPath == item.path ? 'font-bold' : 'font-medium'
                    }`}
                  onClick={handleIsOpen}
                >
                  <Image className='mx-2' src={`/icon/white${item.icon}`} width={24} height={24} alt={item.name} /> {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
