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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen relative w-full overflow-hidden">
      <InteractiveTerminal />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="w-full pt-20">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
