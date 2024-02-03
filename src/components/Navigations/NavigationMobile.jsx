import { HamburgerIcon } from "../../icons/HamburgerIcon/HamburgerIcon";
import { CloseIcon } from "../../icons/CloseIcon/CloseIcon";
import { useState } from "react";

export function NavigationMobile({ navLinks }) {
  const [isNavShown, setIsNavShown] = useState(false);

  function handleSetIsNavShown() {
    const body = document.body;

    setIsNavShown(!isNavShown);
    isNavShown
      ? (body.style.overflowY = "auto")
      : (body.style.overflowY = "hidden");
  }
  return (
    <>
      <div onClick={handleSetIsNavShown}>
        {!isNavShown && (
          <div className="fixed right-0 top-0 z-30 cursor-pointer p-5 lg:hidden">
            <HamburgerIcon />
          </div>
        )}
      </div>

      {isNavShown && (
        <nav className="fixed z-20 w-screen bg-current lg:hidden">
          <div className="container relative mx-auto flex h-screen items-center justify-end text-white">
            <div
              className="fixed right-0 top-0 z-30 cursor-pointer p-5"
              onClick={handleSetIsNavShown}
            >
              <CloseIcon />
            </div>

            <ul className="flex flex-col gap-4 pe-12 text-right">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="hover:text-brand-hover cursor-pointer text-5xl capitalize transition"
                  onClick={handleSetIsNavShown}
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
