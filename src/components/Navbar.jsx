import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Selected Work', href: '#projects' },
    { name: 'Journey', href: '#experience' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-paper/90 dark:bg-paper-dark/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-serif font-bold tracking-tight hover-target">
              Arpit
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-sans font-medium uppercase tracking-[0.2em] relative group hover-target"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <a 
              href="/Arpit_Kanani_Resume.pdf" 
              download 
              className="text-xs font-sans font-bold uppercase tracking-[0.2em] px-5 py-2.5 bg-ink text-paper dark:bg-paper dark:text-ink hover-target transition-transform hover:scale-105 border border-transparent dark:border-white/10"
            >
              Resume
            </a>

            <button
              onClick={toggleDarkMode}
              className="hover-target p-2 transition-transform hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} className="hover-target" aria-label="Toggle dark mode">
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover-target focus:outline-none z-50 relative"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-paper dark:bg-paper-dark border-t border-black/10 dark:border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-serif"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Arpit_Kanani_Resume.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="text-4xl font-serif text-brand-accent mt-4"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
