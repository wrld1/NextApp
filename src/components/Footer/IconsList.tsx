import { Facebook, Instagram, Twitter, Youtube } from "react-feather";

function IconsList() {
  return (
    <ul className="flex gap-4">
      <li>
        <Facebook className="stroke-black" />
      </li>
      <li>
        <Instagram className="stroke-black" />
      </li>
      <li>
        <Twitter className="stroke-black" />
      </li>
      <li>
        <Youtube className="stroke-black" />
      </li>
    </ul>
  );
}

export default IconsList;
