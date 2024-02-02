export function FormTextarea({ name, placeholder }) {
  return (
    <textarea
      name={name}
      id={name}
      placeholder={placeholder}
      required
      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
      rows={10}
    ></textarea>
  );
}
