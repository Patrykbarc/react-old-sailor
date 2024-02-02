import { Logo } from "../Logo/Logo";
const date = new Date();
const currentYear = date.getFullYear();
const footerLinks = [
  {
    id: "contact",
    name: "contact",
  },
  {
    id: "store",
    name: "store",
  },
  {
    id: "work",
    name: "work",
  },
  {
    id: "privacy",
    name: "privacy policy",
  },
];

export function Footer() {
  return (
    <footer className="w-full pb-5 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between text-xl">
          <Logo orientation="vertical" />
          <div className="flex flex-col gap-5">
            <ul className="flex">
              {footerLinks.map((link) => (
                <li
                  key={link.id}
                  className="cursor-pointer px-3 capitalize transition hover:text-brandHover"
                >
                  <a href={`#${link.id}`}>{link.name}</a>
                </li>
              ))}
            </ul>
            <ul className="pe-3 text-end text-sm">
              <li>Parkside Street 41</li>
              <li>+48 100 200 300</li>
              <li>old.sailor@barber.com</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col text-center text-gray-600">
          <small>&copy; {currentYear} | The Old Sailor Barber</small>
          <small>Designed & developed by Patryk Barć</small>
        </div>
      </div>
    </footer>
  );
}
