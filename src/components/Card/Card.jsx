export function Card({ text, src, alt }) {
  return (
    <div className="group relative overflow-hidden bg-zinc-900">
      <img
        src={src}
        alt={alt}
        className="w-full scale-[1.05] duration-300 hover:scale-[1.01]
      group-hover:saturate-0
      "
      />
      <div
        className="pointer-events-none
      absolute
      top-0 h-full w-full -translate-x-full
      transition-transform
      group-hover:-translate-x-0
      group-hover:bg-gray-700
      group-hover:bg-opacity-50
      
      "
      >
        <span className="absolute bottom-0 p-3 text-4xl font-bold text-brand opacity-0 group-hover:opacity-100 block w-full backdrop-blur-sm">
          {text}
        </span>
        <div />
      </div>
    </div>
  );
}
