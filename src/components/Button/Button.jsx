export function Button({
  value = "Click",
  url = null,
  type = "button",
  size = "lg",
}) {
  let buttonSize;
  let buttonFontSize;

  switch (size) {
    case "md":
      buttonSize = "px-12 py-2";
      buttonFontSize = "text-md";
      break;
    case "lg":
      buttonSize = "px-8 py-4";
      buttonFontSize = "text-lg";
      break;
  }
  return (
    <a href={url} className="w-full md:w-fit">
      <input
        type={type}
        value={value}
        className={`hover:bg-brand-hover m-auto w-full cursor-pointer rounded-md bg-brand font-body text-lg font-semibold shadow-md transition-colors duration-300 ease-in-out md:w-fit ${buttonSize} ${buttonFontSize}`}
      />
    </a>
  );
}
