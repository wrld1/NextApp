import React from "react";

import Link from "next/link";
import { LogIn } from "react-feather";
import NavLink from "./NavLink";
import Image from "next/image";
import HeaderLinksList from "./HeaderLinksList";

const Header = () => {
  return (
    <header className="h-24 flex bg-[#F6F7FF] shadow-lg">
      <div className="container justify-between mx-auto flex items-center gap-3">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center"
        >
          <Image src="/Logo.png" width={23} height={23} alt="Logo" />
          <span className="font-bold text-xl text-[#1F1E25]">Чіп Чендж</span>
        </Link>

        <HeaderLinksList />

        <div className="flex gap-4 items-center text-[#1F1E25]">
          <LogIn />
          <Link href="/sign-up">Особистий кабінет</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
