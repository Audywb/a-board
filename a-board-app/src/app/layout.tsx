import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomNavbar from "@/components/Navbar";
import CustomSidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "a Board",
  description: "a Board blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const menu = [{path:"/", name:"Home", icon: "home.svg", iconbold: "editbold.svg"},{path:"/ourblog",name:"Our Blog", icon: "edit.svg", iconbold: "editbold.svg"}]

  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomNavbar menu={menu}/>
        <div className="flex bg-gray-100">
          <div className="hidden lg:block  text-green-500 w-64 h-full min-h-screen p-4">
            <CustomSidebar menu={menu}/>
          </div>
          <div className="flex-1 p-4 min-h-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
