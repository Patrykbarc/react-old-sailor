import { Card } from "../AboutCard/AboutCard";

export function Services() {
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
    <section id="services">
      <div className="container mx-auto my-24 flex flex-col gap-16">
        <div>
          <h1 className="mb-6 font-title text-5xl font-semibold text-brand">
            Services
          </h1>
          <div className="flex flex-col gap-5 text-lg text-white">
            <p>
              Our barbershop offers a wide range of services to take care of
              your hairstyle and beard.
            </p>
            <p>
              Our services include, but are not limited to, cutting, shaping and
              shaving. Our skilled barbers are experienced professionals who
              will take care of your hairstyle with the utmost care and consider
              your individual preferences and needs.
            </p>
            <p>
              In addition to basic barbering services, we also offer other hair
              care treatments such as facials and massages, as well as hair
              coloring. Our barbershop is a place where you can take care of
              your appearance and have fun during your visit. We invite you to
              visit our salon and learn more about our full range of services.
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
