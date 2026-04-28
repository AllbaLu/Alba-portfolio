import Navbar from "./feachure/navbar/Navbar";
import Hero from "./feachure/hero/Hero";
import Expertise from "./feachure/expertise/Expertise";
import Projects from "./feachure/projects/Project";
import Resources from "./feachure/resourcesBlog/Resources";
import Contact from "./feachure/contactForm/ContactFform";


import useScrollEffect from "./hooks/useScrollEffect";

function App() {
  useScrollEffect();

  return (
    <div className="min-h-screen bg-[#faf7f7] text-gray-800">

      <div className="max-w-5xl mx-auto px-4 pl-15 sm:px-6 lg:px-8">

        <Navbar />

        <main className="space-y-0">
          <Hero />
          <Expertise />
          <Projects />
          <Resources />
          <Contact />
        </main>

      </div>

     

    </div>
  );
}

export default App; 