import { Button } from "../Button/Button";
import { FormInput } from "../FormInput/FormInput";
export function ContactForm() {
  return (
    <form
      className="space-y-4"
      id="contact"
      onSubmit={(e) => e.preventDefault()}
    >
      <FormInput name="name" type="text" placeholder="Your name" />
      <FormInput name="email" type="email" placeholder="Your email" />

      <textarea
        name="message"
        id="message"
        placeholder="Let us know what we can help you with"
        required
        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        rows={10}
      ></textarea>

      <div>
        <Button value="Send" size="md" type="submit" />
      </div>
    </form>
  );
}
