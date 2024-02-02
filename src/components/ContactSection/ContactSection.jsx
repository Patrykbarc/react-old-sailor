import { ContactForm } from "../ContactForm/ContactForm";

export function ContactSection() {
  return (
    <section className="mx-8 border py-24 pb-0 last-of-type:pb-24 md:pb-24">
      <div className="container mx-auto grid grid-cols-2  gap-x-12">
        <div>
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
