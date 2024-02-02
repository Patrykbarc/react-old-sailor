export function Button({
  value = "Click",
  url = {},
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
    <a href={url}>
      <input
        type={type}
        value={value}
        className={`m-auto cursor-pointer rounded-md bg-brand font-body text-lg font-semibold shadow-md transition-colors duration-300 ease-in-out hover:bg-brandHover ${buttonSize} ${buttonFontSize}`}
      />
    </a>
  );
}
