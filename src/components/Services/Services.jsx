import { Card } from "../AboutCard/AboutCard";

export function Services() {
  const cards = [
    {
      text: "Eyebrow flossing",
      src: "./src/assets/service-1.jpg",
      alt: "Eyebrow flossing",
    },
    {
      text: "Men's haircuts",
      src: "./src/assets/service-2.jpg",
      alt: "Men's haircuts",
    },
    {
      text: "Mustache trimming",
      src: "./src/assets/service-3.jpg",
      alt: "Mustache trimming",
    },
    {
      text: "Men's shaving",
      src: "./src/assets/service-4.jpg",
      alt: "Men's shaving",
    },
    {
      text: "Cover",
      src: "./src/assets/service-5.jpg",
      alt: "Cover",
    },
    {
      text: "Contouring",
      src: "./src/assets/service-6.jpg",
      alt: "Contouring",
    },
    {
      text: "Nose depilation",
      src: "./src/assets/service-7.jpg",
      alt: "Nose depilation",
    },
    {
      text: "Razor shaving",
      src: "./src/assets/service-8.jpg",
      alt: "Razor shaving",
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
        <div className="container mx-auto grid grid-cols-4 gap-12">
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
