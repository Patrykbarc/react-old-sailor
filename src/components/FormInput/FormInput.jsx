export function FormInput({ name, type, placeholder }) {
  return (
    <input
      name={name}
      id={name}
      type={type}
      placeholder={placeholder}
      required
      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
    />
  );
}
