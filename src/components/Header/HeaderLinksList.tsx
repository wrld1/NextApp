import NavLink from "./NavLink";

function HeaderLinksList() {
  return (
    <nav>
      <ul className="flex gap-10">
        <li>
          <NavLink linkName="services">Послуги</NavLink>
        </li>
        <li>
          <NavLink linkName="exchange">Конвертер валют</NavLink>
        </li>
        <li>
          <NavLink linkName="contacts">Контакти</NavLink>
        </li>
        <li>
          <NavLink linkName="contact-us">Задати питання</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderLinksList;
