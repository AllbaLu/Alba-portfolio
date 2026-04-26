import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './feachure/navbar/Navbar'
import Hero from './feachure/hero/Hero'
import Expertise from './feachure/expertise/Expertise'
import './App.css'
import Project from './feachure/projects/Project'
import Resources from './feachure/resourcesBlog/resources'
import ContactForm from './feachure/contactForm/ContactFform'
import Footer from './feachure/footer/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Expertise /> 
      <Project />
      <Resources />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
