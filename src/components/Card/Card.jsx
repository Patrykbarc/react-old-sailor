export function Card({ text, src, alt }) {
  return (
    <div>
      <div className="relative flex justify-center overflow-hidden rounded-md border-4 bg-gray-200 text-white grayscale transition-all duration-500 hover:border-brand hover:text-brand hover:grayscale-0">
        <img
          className="w-full scale-[1.03] transition-transform duration-300 hover:scale-[1.05]"
          src={src}
          alt={alt}
        />
        <div className="box-shadow-text pointer-events-none absolute bottom-0 left-1/2 z-10 w-full -translate-x-1/2 text-center font-title text-4xl font-bold">
          <span className="relative z-10 block w-full bg-clip-text py-4">
            {text}
          </span>
          <div className="absolute bottom-0 z-0 block h-full w-full backdrop-blur-md" />
        </div>
      </div>
    </div>
  );
}