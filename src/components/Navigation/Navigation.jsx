export function Navigation() {
   return (
      <div className="top-0 z-100 flex justify-between align-middle container mx-auto py-5 text-white text-xl">
         <a href="">
            <img src="./src/assets/logo.png" alt="" />
         </a>
         <ul className="flex gap-7">
            <li className="px-3 cursor-pointer hover:text-brandHover transition"><a href="#about">About us</a></li>
            <li className="px-3 cursor-pointer hover:text-brandHover transition"><a href="#">Store</a></li>
            <li className="px-3 cursor-pointer hover:text-brandHover transition"><a href="#">Contact</a></li>
         </ul>
         <a href="tel:+100200300" className="flex gap-3 text-brand hover:text-brandHover transition">
            <img className="h-fit my-auto" src="./src/assets/call-icon.png" alt="" />
            <span>+48 100 200 300</span>
         </a>
      </div >
   )
}
