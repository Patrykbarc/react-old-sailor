export function Button({ props = 'Click' }) {
   return (
      <button className="bg-brand text-lg px-8 py-4 rounded-md shadow-md">{props}</button>
   )
}