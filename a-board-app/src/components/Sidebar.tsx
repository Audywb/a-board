"use client";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link';

interface MenuItem {
  path: string;
  name: string;
  icon: string;
  iconbold: string;
}

const CustomSidebar: React.FC<{ menu: MenuItem[] }> = ({ menu }) => {
  const router = usePathname()
  return (
    <nav className="mt-4">
      {menu && menu.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={`flex px-4 py-2 rounded-md hover:font-bold ${
            router == item.path ? 'font-bold' : 'font-medium'
          }`}
        >
          <Image className='mx-2' src={router == item.path ? `/icon/${item.iconbold}` : `/icon/${item.icon}`} width={24} height={24} alt={item.name} /> {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default CustomSidebar;