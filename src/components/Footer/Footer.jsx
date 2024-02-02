import { Logo } from "../Logo/Logo";

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
    <footer className="w-full py-5 shadow-xl">
      <Logo orientation="vertical" />
      <div>
        <ul className="flex gap-7">
          {footerLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.name}</a>
            </li>
          ))}
        </ul>
        ;
      </div>
    </footer>
  );
}
