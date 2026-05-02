import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiCopy } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const email = 'arpit@example.com';

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <footer className="bg-paper-dark text-ink-dark dark:bg-paper dark:text-ink pt-16 pb-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 w-full"
        >
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-muted mb-8 block">Have an idea?</span>
          
          <button onClick={handleCopyEmail} className="group relative block w-full text-center hover-target cursor-pointer">
            <h2 className="text-6xl sm:text-8xl md:text-[12vw] font-serif font-bold tracking-tighter leading-none w-full transition-colors group-hover:text-brand-accent flex items-center justify-center gap-4">
              Let's Talk.
            </h2>
            
            <AnimatePresence>
              {copied && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-1/2 -translate-x-1/2 -bottom-12 flex items-center gap-2 bg-brand-accent text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest pointer-events-none"
                >
                  <FiCheck /> Email Copied
                </motion.div>
              )}
            </AnimatePresence>
            {!copied && (
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 flex items-center gap-2 text-brand-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-bold uppercase tracking-widest pointer-events-none">
                <FiCopy /> Copy Email
              </div>
            )}
          </button>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/10 dark:border-black/10">
          <div className="flex gap-8">
            <a href="https://github.com/ARPIT-KANANI" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest hover-target hover:text-brand-accent transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/arpitkanani0102/" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest hover-target hover:text-brand-accent transition-colors">
              LinkedIn
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest hover-target hover:text-brand-accent transition-colors">
              Twitter
            </a>
          </div>

          <div className="text-sm font-medium text-brand-muted">
            &copy; {currentYear} Arpit Kanani. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
