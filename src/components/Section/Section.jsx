import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
export function Section({ sectionData, buttonData }) {
  const { id, title, description, cards } = sectionData;
  const { showButton, buttonText } = buttonData || {};

  const gridStyle =
    id === "about"
      ? "grid-cols-1 sm:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  return (
    <section className="mx-8 py-24 pb-0 last-of-type:pb-24 md:pb-24" id={id}>
      <div className="container mx-auto flex flex-col gap-14">
        <div className="flex flex-col gap-16">
          <div>
            <h1 className="mb-6 font-title text-5xl font-semibold uppercase text-brand">
              {title}
            </h1>
            <div className="flex flex-col gap-5 text-lg text-white">
              {description.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
            </div>
          </div>
        </div>
        <div className={`grid gap-12 ${gridStyle}`}>
          {cards.map((card) => (
            <Card
              key={card.src}
              text={card.text}
              src={card.src}
              alt={card.alt}
            />
          ))}
        </div>
        {showButton && (
          <div className="mx-auto">
            <Button value={buttonText} />
          </div>
        )}
      </div>
    </section>
  );
}
