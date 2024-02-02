import { Hero } from "./components/HeroSection/HeroSection";
import { Navigation } from "./components/Navigation/Navigation";
import { Section } from "./components/Section/Section";

import { About } from "./components/AboutSection/About";
import { Services } from "./components/Services/Services";

import { sectionData } from "./utils/sectionData";

console.log(sectionData[0]);

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Section sectionData={sectionData[0]} />
      <Section sectionData={sectionData[1]} />
      {/* <About />
      <Services /> */}
    </>
  );
}

export default App;
