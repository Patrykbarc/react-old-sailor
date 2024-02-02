export function Card({ text, src, alt }) {
  return (
    <div>
      <div className="flex justify-center overflow-hidden bg-gray-200 saturate-0 transition-all duration-500 hover:saturate-[1.3]">
        <img
          className="w-full transition-transform duration-300 hover:scale-[1.05]"
          src={src}
          alt={alt}
        />
        <p className="absolute left-1/2 top-1/2  w-full -translate-x-1/2 -translate-y-1/2 text-center font-title text-4xl font-bold text-white">
          {text}
        </p>
      </div>
    </div>
  );
}
