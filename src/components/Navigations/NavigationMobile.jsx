// import { NavigationMobileIcons } from "./NavigationMobileIcons";
import { HamburgerIcon } from "../../icons/HamburgerIcon/HamburgerIcon";
import { CloseIcon } from "../../icons/CloseIcon/CloseIcon";
import { useState } from "react";

export function NavigationMobile({ navLinks }) {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <>
      <div
        className="absolute right-0 z-10 cursor-pointer p-5"
        onClick={() => setIsNavShown(!isNavShown)}
      >
        {isNavShown ? <CloseIcon /> : <HamburgerIcon />}
      </div>
      {isNavShown && (
        <nav className="relative">
          <div className="container mx-auto flex h-screen items-center justify-end text-white">
            <ul className="flex flex-col gap-4 pe-12 text-right">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="hover:text-brand-hover cursor-pointer text-6xl capitalize transition"
                  onClick={() => setIsNavShown(false)}
                >
                  <a href={`#${link.id}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}
