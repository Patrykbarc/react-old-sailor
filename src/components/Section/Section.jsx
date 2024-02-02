export function Section({ sectionData }) {
  const { id, title, description } = sectionData;
  return (
    <section id={id}>
      <div className="container mx-auto my-24 flex flex-col gap-16">
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
    </section>
  );
}
