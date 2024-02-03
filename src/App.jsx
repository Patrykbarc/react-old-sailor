import { Hero } from "./components/HeroSection/HeroSection";
import { Navigations } from "./components/Navigations/Navigations";
import { Section } from "./components/Section/Section";
import { Footer } from "./components/Footer/Footer";

import { sectionData } from "./utils/sectionData";
import { ContactSection } from "./components/ContactSection/ContactSection";

function App() {
  return (
    <>
      <Navigations />
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
