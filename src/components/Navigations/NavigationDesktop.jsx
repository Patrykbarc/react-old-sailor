import { Logo } from "../../icons/Logo/Logo";

export function NavigationDesktop({ navLinks }) {
  return (
    <nav className="fixed top-0 z-10 hidden w-full py-5 shadow-xl backdrop-blur-md lg:block">
      <div className="container mx-auto flex justify-between text-xl text-white">
        <Logo orientation="horizontal" />
        <ul className="flex gap-7">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="hover:text-brand-hover cursor-pointer px-3 capitalize transition"
            >
              <a href={`#${link.id}`}>{link.name}</a>
            </li>
          ))}
        </ul>
        <a
          href="tel:+100200300"
          className="hover:text-brand-hover flex gap-3 text-brand transition"
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
