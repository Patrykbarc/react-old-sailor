import { Hero } from "./components/HeroSection/HeroSection";
import { About } from "./components/AboutSection/About";
import { Navigation } from "./components/Navigation/Navigation";
import { Services } from "./components/Services/Services";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
    </>
  );
}

export default App;
