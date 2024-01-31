export function Button({ props = 'Click', url }) {
   return (
      <a href={url}>
         <input
            type="button"
            value={props}
            className="bg-brand font-body text-lg px-8 py-4 rounded-md shadow-md hover:bg-brandHover transition-colors ease-in-out duration-300 cursor-pointer" />
      </a>
   )
}