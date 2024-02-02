import { Logo } from "../Logo/Logo";

const navLinks = [
  {
    id: "about",
    name: "about us",
  },
  {
    id: "services",
    name: "services",
  },
  {
    id: "contact",
    name: "contact",
  },
  {
    id: "store",
    name: "store",
  },
];

export function Navigation() {
  return (
    <nav className="fixed top-0 z-10 hidden w-full py-5 shadow-xl backdrop-blur-md md:block">
      <div className="container mx-auto flex justify-between text-xl text-white">
        <Logo orientation="horizontal" />
        <ul className="flex gap-7">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer px-3 capitalize transition hover:text-brandHover"
            >
              <a href={`#${link.id}`}>{link.name}</a>
            </li>
          ))}
        </ul>
        <a
          href="tel:+100200300"
          className="flex gap-3 text-brand transition hover:text-brandHover"
        >
          <img
            className="my-auto h-fit"
            src="./src/assets/call-icon.png"
            alt=""
          />
          <span>+48 100 200 300</span>
        </a>
      </div>
    </nav>
  );
}
