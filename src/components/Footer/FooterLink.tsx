import { LinkNames } from "@/types/LinkNames";
import Link from "next/link";

export default function FooterLink({
  linkName,
  children,
}: {
  linkName: LinkNames;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={`/${linkName.toLowerCase()}`}
      className={"font-medium text-base text-[#707C87] hover:text-[#2C36F2]"}
    >
      {children}
    </Link>
  );
}
