export function Button({ value = "Click", url }) {
  return (
    <a href={url}>
      <input
        type="button"
        value={value}
        className="m-auto cursor-pointer rounded-md bg-brand px-8 py-4 font-body text-lg font-semibold shadow-md transition-colors duration-300 ease-in-out hover:bg-brandHover"
      />
    </a>
  );
}
