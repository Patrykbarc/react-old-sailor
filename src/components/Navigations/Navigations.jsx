import { NavigationDesktop } from "./NavigationDesktop";
import { NavigationMobile } from "./NavigationMobile";

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

export function Navigations() {
  return (
    <>
      <NavigationDesktop navLinks={navLinks} />
      <NavigationMobile />
    </>
  );
}
