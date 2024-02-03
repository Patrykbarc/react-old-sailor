import { HamburgerIcon } from "../../icons/HamburgerIcon/HamburgerIcon";
import { CloseIcon } from "../../icons/CloseIcon/CloseIcon";
import { useState } from "react";

export function NavigationMobileIcons() {
  const [isNavShown, setIsNavShown] = useState(false);

  function handleSetIsNavShown() {
    setIsNavShown(!isNavShown);
  }

  return (
    <div
      className="absolute right-0 z-10 cursor-pointer p-5"
      onClick={handleSetIsNavShown}
    >
      {isNavShown ? <CloseIcon /> : <HamburgerIcon />}
    </div>
  );
}
