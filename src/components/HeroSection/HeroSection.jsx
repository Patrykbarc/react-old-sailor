import { Button } from "../Button/Button";
import { Chevron } from "../Chevron/Chevron";

export function Hero() {
   return (
      <section id="hero">
         <div className="relative d-flex flex-col bg-hero-image h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <div className="container px-8 sm:px-0">
               <div className="mb-16">
                  <h1 className="text-brand text-8xl font-title font-semibold mb-12">
                     The Old Sailor Barber
                  </h1>
                  <p className="text-4xl font-body text-white">
                     A place where style and elegance
                     <br />
                     combine with nautical tradition.
                  </p>
               </div>
               <Button props="Book your visit" />
            </div>
            <Chevron />
         </div>
      </section>
   );
}
