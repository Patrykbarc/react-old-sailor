export function Card({ text, src, alt }) {
  return (
    <div>
      <div className="flex justify-center overflow-hidden bg-gray-200 saturate-0 transition-all duration-500 hover:saturate-[1.3]">
        <img
          className="w-full transition-transform hover:scale-[1.05] duration-300"
          src={src}
          alt={alt}
        />
      </div>
      <p className="mt-10 text-center font-title text-4xl font-bold text-white">
        {text}
      </p>
    </div>
  );
}
