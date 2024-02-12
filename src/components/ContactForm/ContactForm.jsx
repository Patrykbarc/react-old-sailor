import { Button } from "../Button/Button";
import { FormInput } from "../FormInput/FormInput";
import { FormTextarea } from "../FormTextarea/FormTextarea";

export function ContactForm() {
  return (
    <form
      className="mx-auto mt-12 w-full space-y-4 rounded-md border border-brand p-6 lg:w-8/12"
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
