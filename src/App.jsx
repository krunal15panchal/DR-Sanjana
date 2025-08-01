import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'

function App() {
  
  

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Contact />
      <Footer />
      <FloatingButton />
      {/* Other sections will be added later */}
    </>
  )
}

export default App
