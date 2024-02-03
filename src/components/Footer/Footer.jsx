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
    <footer className="w-full bg-neutral-950 py-8 text-white md:py-5">
      <div className="container mx-auto flex flex-col justify-between gap-8 text-xl md:flex-row">
        <div className="mx-auto md:mx-0">
          <Logo orientation="vertical" />
        </div>
        <div className="mx-auto flex flex-col gap-8 md:mx-0 md:gap-5">
          <ul className="flex flex-col text-center md:flex-row">
            {footerLinks.map((link) => (
              <li
                key={link.id}
                className="hover:text-brand-hover cursor-pointer px-3 capitalize transition"
              >
                <a href={`#${link.id}`}>{link.name}</a>
              </li>
            ))}
          </ul>
          <ul className="pe-3 text-center text-sm md:text-end">
            <li>Parkside Street 41</li>
            <li>+48 100 200 300</li>
            <li>old.sailor@barber.com</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 flex flex-col text-center text-gray-600 md:mt-5">
        <small>&copy; {currentYear} | The Old Sailor Barber</small>
        <small>Designed & developed by Patryk Barć</small>
      </div>
    </footer>
  );
}
