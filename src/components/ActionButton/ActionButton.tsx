"use client";

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type ButtonProps = {
  type: "link" | "action";
  style?: "primary" | "secondary";
  children: React.ReactNode;
  href?: Url;
  onClick?: () => void;
};

function ActionButton({
  type,
  style = "primary",
  children,
  href = "/",
  onClick,
}: ButtonProps) {
  const primaryStyles = "bg-[#2C36F2] text-[#fff] hover:bg-blue-600 px-3";
  const secondaryStyles = "bg-[#F6F7FF] text-[#707C87] hover:bg-gray-200";

  const getStyles = () => {
    const baseStyles = "text-center py-4 rounded font-medium transition";
    return `${baseStyles} ${
      style === "primary" ? primaryStyles : secondaryStyles
    }`;
  };

  if (type === "link") {
    return (
      <Link className={getStyles()} href={href}>
        {children}
      </Link>
    );
  } else if (type === "action") {
    return (
      <button className={getStyles()} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default ActionButton;
