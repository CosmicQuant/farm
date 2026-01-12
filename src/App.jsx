import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Livestock from './components/Livestock';
import Crops from './components/Crops';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Livestock />
      <Crops />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
