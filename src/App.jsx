import Navbar from "./feachure/navbar/Navbar";
import Hero from "./feachure/hero/Hero";
import Expertise from "./feachure/expertise/Expertise";
import Projects from "./feachure/projects/Project";
import Resources from "./feachure/resourcesBlog/Resources";
import Contact from "./feachure/contactForm/ContactFform";
import Footer from "./feachure/footer/footer";

import useScrollEffect from "./hooks/useScrollEffect";

function App() {
  useScrollEffect();

  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <Projects />
      <Resources />
      <Contact />
      <Footer />
    </>
  );
}

export default App;