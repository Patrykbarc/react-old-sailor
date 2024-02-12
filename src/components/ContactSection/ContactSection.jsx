import { ContactForm } from "../ContactForm/ContactForm";

export function ContactSection() {
  return (
    <section
      className="mx-8 py-24 pb-0 last-of-type:pb-24 md:pb-24 "
      id="contact"
    >
      <div className="container mx-auto flex grid-cols-1 flex-col gap-x-12 text-center md:grid">
        <div className="relative">
          <h1 className="mb-6 font-title text-5xl font-semibold uppercase text-brand">
            Do you have questions?
          </h1>
          <h2 className="mb-6 font-title text-3xl font-semibold uppercase text-brand">
            We&apos;ll be happy to answer them!
          </h2>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
