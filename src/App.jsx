import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import InteractiveTerminal from './components/InteractiveTerminal';
function App() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden">
      <InteractiveTerminal />
      <Navbar />
      <main className="w-full pt-20">
        <Hero />
        <hr className="w-full border-black/5" />
        <About />
        <hr className="w-full border-black/5" />
        <Projects />
        <hr className="w-full border-black/5" />
        <Experience />
        <hr className="w-full border-black/5" />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
