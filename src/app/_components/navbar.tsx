import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/android-chrome-192x192.png";

export const Navbar: FC = ({}) => {
  return (
    <nav className="bg-background px-8 py-4 md:px-16">
      <Link href="/">
        <Image src={logo} alt="Logo" className="w-14 dark:invert" />
      </Link>
    </nav>
  );
};
