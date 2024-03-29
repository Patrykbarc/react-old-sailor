import { Button } from "../Button/Button";
import { Chevron } from "../Chevron/Chevron";
import "./HeroSection.css";

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="d-flex relative flex h-screen flex-col items-center justify-center bg-hero-image bg-cover bg-no-repeat px-8">
        <div className="hero-shadow" />
        <div className="hero-content">
          <div className="container px-8 sm:px-0">
            <div className="mb-16">
              <h1 className="mb-12 font-title text-5xl font-semibold text-brand md:text-8xl">
                The Old Sailor Barber
              </h1>
              <p className="font-body text-2xl text-white md:text-4xl">
                A place where style and elegance
                <br />
                combine with nautical tradition.
              </p>
            </div>
            <Button value="Book your visit" />
          </div>
          <Chevron />
        </div>
      </div>
    </section>
  );
}
