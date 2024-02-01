import { Card } from "../AboutCard/AboutCard";

export function About() {
  const cards = [
    {
      text: "Mark",
      src: "./src/assets/about-img-1.png",
      alt: "CEO of The Old Sailor Barber",
    },
    {
      text: "Thomas",
      src: "./src/assets/about-img-2.png",
      alt: "Co-CEO of The Old Sailor Barber",
    },
    {
      text: "Peter",
      src: "./src/assets/about-img-3.png",
      alt: "CSO of The Old Sailor Barber",
    },
  ];
  return (
    <section id="about">
      <div className="container mx-auto my-24 flex flex-col gap-16">
        <div>
          <h1 className="mb-6 font-title text-5xl font-semibold text-brand">
            About us
          </h1>
          <div className="flex flex-col gap-5 text-lg text-white">
            <p>
              Old Sailor is a barbershop that was born out of a love for
              nautical adventures and good grooming.
            </p>
            <p>
              It all started a five years ago when our founder, a former sailor,
              decided to start his own nautical store. In the meantime, thanks
              to his skills, which he acquired during months of sea voyages, he
              also started offering barbering services to his customers, who
              were looking for a place where they could take care of their hair
              and beards.
            </p>
            <p>
              Over time, the nautical supply store evolved into a full-fledged
              barbershop, and Old Sailor became a place where men could take
              care of their appearance and relax during their visit. Today, Old
              Sailor is a place where you can relax and take care of your
              haircut and beard, and our staff are skilled barbers who are
              always willing to help you choose the right style and take care of
              your haircut with the utmost care.
            </p>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-3 gap-12">
          {cards.map((card) => (
            <Card
              key={card.src}
              text={card.text}
              src={card.src}
              alt={card.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
