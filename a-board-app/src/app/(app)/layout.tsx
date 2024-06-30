import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import CustomNavbar from "@/components/Navbar";
import CustomSidebar from "@/components/Sidebar";
import { Providers } from "@/app/provider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "a Board",
  description: "a Board blog",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  const menu = [
    { path: "/", name: "Home", icon: "home.svg", iconbold: "editbold.svg" },
    {
      path: "/ourblog",
      name: "Our Blog",
      icon: "edit.svg",
      iconbold: "editbold.svg",
    },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <CustomNavbar menu={menu} />
          <div className="lg:flex bg-gray-100">
            <div className="hidden lg:block  text-green-500 w-64 h-full min-h-screen p-4">
              <CustomSidebar menu={menu} />
            </div>
            <div className="flex-1 min-h-screen bg-gray-100">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
