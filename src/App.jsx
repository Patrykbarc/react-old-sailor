import { Hero } from "./components/HeroSection/HeroSection";
import { Navigation } from "./components/Navigation/Navigation";
import { Section } from "./components/Section/Section";

import { sectionData } from "./utils/sectionData";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Section sectionData={sectionData[0]} />
      <Section sectionData={sectionData[1]} />
    </>
  );
}

export default App;
