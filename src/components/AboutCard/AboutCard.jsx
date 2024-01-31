export function Card({ text, src, alt }) {
   return (
      <div>
         <div className="bg-gray-200 transition-all duration-500 flex justify-center saturate-0 hover:saturate-[1.3]">
            <img className="w-full" src={src} alt={alt} />
         </div>
         <p className="text-white text-4xl mt-10 font-title font-bold text-center">{text}</p>
      </div>
   )
}