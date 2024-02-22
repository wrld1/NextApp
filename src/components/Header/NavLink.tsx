"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({
  linkName,
  children,
}: {
  linkName: string;
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = linkName === segment;

  console.log(segment);
  console.log(linkName);

  return (
    <Link
      href={`/${linkName.toLowerCase()}`}
      className={`
        font-normal hover:text-[#2C36F2]
        ${isActive ? "font-medium text-[#2C36F2]" : "text-gray-600"}
      `}
    >
      {children}
    </Link>
  );
}
