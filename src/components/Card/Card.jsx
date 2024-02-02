export function Card({ text, src, alt }) {
  return (
    <div>
      <div
        className="duration-500hover:text-brand relative flex justify-center overflow-hidden rounded-md
       bg-gray-200 text-white grayscale transition-all hover:grayscale-0"
      >
        <img
          className="w-full scale-[1.03] transition-transform duration-300 hover:scale-[1.05]"
          src={src}
          alt={alt}
        />
        <div className="box-shadow-text md:text-1xl pointer-events-none absolute bottom-0 left-1/2 z-10 w-full -translate-x-1/2 text-center font-title font-bold lg:text-4xl">
          <span className="relative z-10 block w-full py-1">{text}</span>
          <div className="absolute bottom-0 z-0 block h-full w-full backdrop-blur-md" />
        </div>
      </div>
    </div>
  );
}
