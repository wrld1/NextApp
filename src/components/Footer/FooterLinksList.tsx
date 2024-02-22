import FooterLink from "./FooterLink";

function FooterLinksList() {
  return (
    <ul className="flex flex-col gap-5">
      <li>
        <FooterLink linkName="services">Послуги</FooterLink>
      </li>
      <li>
        <FooterLink linkName="exchange">Конвертер валют</FooterLink>
      </li>
      <li>
        <FooterLink linkName="contacts">Контакти</FooterLink>
      </li>
      <li>
        <FooterLink linkName="contact-us">Задати питання</FooterLink>
      </li>
    </ul>
  );
}

export default FooterLinksList;
