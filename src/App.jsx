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
    <div className="min-h-screen bg-[#faf7f7] text-gray-800">

      <Navbar />

      <main className="w-full">
        <Hero />
        <Expertise />
        <Projects />
        <Resources />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App; 