import React from "react";

import Link from "next/link";
import Image from "next/image";
import { Smartphone, Phone } from "react-feather";
import IconsList from "./IconsList";
import FooterLinksList from "./FooterLinksList";

const Footer = () => {
  return (
    <footer className="flex bg-[#F6F7FF] text-[#707C87] py-14">
      <div className="container flex mx-auto justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row space-x-3 items-center ">
            <Image src="/Logo.png" width={23} height={23} alt="Logo" />
            <h4 className="font-bold text-[#1F1E25] text-xl">Чіп Чендж</h4>
          </div>
          <address className="text-sm not-italic text-[#707C87]">
            04128, м.Київ, вул. Хрещатик, 19
            <br />
            Ліцензія НБУ №156
            <br />Ⓒ ПАТ ЧіпЧендж, 2019-2023
          </address>
        </div>
        <FooterLinksList />
        <div className="flex gap-4">
          <Smartphone className="stroke-black" />
          <div className="flex flex-col gap-2">
            <Link
              href="tel:3773"
              className="text-[#1F1E25] font-bold text-base"
            >
              3773
            </Link>
            <span className="text-sm">Цілодобова підтримка</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Phone className="stroke-black" />
          <div className="flex flex-col gap-2">
            <Link
              href="tel:+88001112233"
              className="text-[#1F1E25] font-bold text-base"
            >
              8 800 111 22 33
            </Link>
            <span className="text-sm">
              Безкоштовно для дзвінків <br />в межах України
            </span>
          </div>
        </div>
        <IconsList />
      </div>
    </footer>
  );
};

export default Footer;
