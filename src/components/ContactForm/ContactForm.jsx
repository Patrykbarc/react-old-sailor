import { Button } from "../Button/Button";
import { FormInput } from "../FormInput/FormInput";
import { FormTextarea } from "../FormTextarea/FormTextarea";

export function ContactForm() {
  return (
    <form
      className="space-y-4 rounded-md border  border-brand p-6"
      id="contact"
      onSubmit={(e) => e.preventDefault()}
    >
      <FormInput name="name" type="text" placeholder="Your name" />
      <FormInput name="email" type="email" placeholder="Your email" />
      <FormTextarea
        name="message"
        placeholder="Let us know what we can help you with"
      />
      <div>
        <Button value="Send" size="md" type="submit" />
      </div>
    </form>
  );
}
