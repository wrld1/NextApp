import { Facebook, Instagram, Twitter, Youtube } from "react-feather";
import Link from "next/link";

function IconsList() {
  return (
    <ul className="flex gap-4">
      <li>
        <Link href="/">
          <Facebook className="stroke-black" />
        </Link>
      </li>
      <li>
        <Link href="/">
          <Instagram className="stroke-black" />
        </Link>
      </li>
      <li>
        <Link href="/">
          <Twitter className="stroke-black" />
        </Link>
      </li>
      <li>
        <Link href="/">
          <Youtube className="stroke-black" />
        </Link>
      </li>
    </ul>
  );
}

export default IconsList;
