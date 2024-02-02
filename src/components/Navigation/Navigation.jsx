export function Navigation() {
  return (
    <div className="fixed top-0 z-10 w-full py-5 shadow-xl backdrop-blur-md">
      <div className="container mx-auto flex justify-between text-xl text-white">
        <a href="">
          <img src="./src/assets/logo.png" alt="" />
        </a>
        <ul className="flex gap-7">
          <li className="cursor-pointer px-3 transition hover:text-brandHover">
            <a href="#about">About us</a>
          </li>
          <li className="cursor-pointer px-3 transition hover:text-brandHover">
            <a href="#">Store</a>
          </li>
          <li className="cursor-pointer px-3 transition hover:text-brandHover">
            <a href="#">Contact</a>
          </li>
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
    </div>
  );
}
