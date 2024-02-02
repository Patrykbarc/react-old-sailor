/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/hero-image.jpg')",
      },
      colors: {
        brand: "#C39515",
        brandHover: "#E8B321",
      },
      fontFamily: {
        title: "'Poppins', sans-serif",
        body: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
