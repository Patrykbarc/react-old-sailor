import { Hero } from "./components/HeroSection/HeroSection";
import { Navigation } from "./components/Navigation/Navigation";
import { Section } from "./components/Section/Section";
import { Footer } from "./components/Footer/Footer";

import { sectionData } from "./utils/sectionData";
import { ContactSection } from "./components/ContactSection/ContactSection";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Section sectionData={sectionData[0]} />
      <Section
        sectionData={sectionData[1]}
        buttonData={{ showButton: true, buttonText: "Book your visit" }}
      />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
