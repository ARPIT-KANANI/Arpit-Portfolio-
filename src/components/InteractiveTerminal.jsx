import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTerminal, FiX } from 'react-icons/fi';

const InteractiveTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to the Arpit Kanani Terminal.' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', text: trimmed }];

    switch (trimmed) {
      case 'help':
        newHistory.push({ type: 'system', text: 'Available commands: whoami, skills, clear, contact, resume' });
        break;
      case 'whoami':
        newHistory.push({ type: 'system', text: 'Arpit Kanani - Full Stack Developer crafting clean, efficient, and dynamic digital experiences.' });
        break;
      case 'skills':
        newHistory.push({ type: 'system', text: 'React, Node.js, Express, MongoDB, Tailwind CSS, TypeScript, Next.js' });
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'contact':
        newHistory.push({ type: 'system', text: 'Email: arpit@example.com | LinkedIn: linkedin.com/in/arpitkanani0102/' });
        break;
      case 'resume':
        newHistory.push({ type: 'system', text: 'Downloading resume...' });
        // In a real scenario, we would trigger a PDF download here
        const link = document.createElement('a');
        link.href = '#'; // Placeholder
        link.download = 'Arpit_Kanani_Resume.pdf';
        link.click();
        break;
      case 'theme blue':
        document.documentElement.style.setProperty('--color-brand-accent', '#2563EB');
        newHistory.push({ type: 'system', text: 'Theme updated to Royal Blue.' });
        break;
      case 'theme emerald':
        document.documentElement.style.setProperty('--color-brand-accent', '#10B981');
        newHistory.push({ type: 'system', text: 'Theme updated to Emerald.' });
        break;
      case 'theme amber':
        document.documentElement.style.setProperty('--color-brand-accent', '#F59E0B');
        newHistory.push({ type: 'system', text: 'Theme updated to Amber.' });
        break;
      case 'theme violet':
        document.documentElement.style.setProperty('--color-brand-accent', '#8B5CF6');
        newHistory.push({ type: 'system', text: 'Theme updated to Violet.' });
        break;
      case 'theme':
        newHistory.push({ type: 'system', text: 'Usage: theme [blue|emerald|amber|violet]' });
        break;
      case '':
        break;
      default:
        newHistory.push({ type: 'error', text: `Command not found: ${trimmed}. Type "help" for a list of commands.` });
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-brand-accent text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Open Terminal"
      >
        <FiTerminal size={24} className="group-hover:animate-pulse" />
        <span className="absolute right-full mr-4 bg-paper-dark text-ink-dark px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Cmd+K to open
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[340px] md:w-[450px] max-w-[calc(100vw-3rem)] h-96 z-50 bg-[#121212] border border-white/20 rounded-lg shadow-2xl flex flex-col overflow-hidden font-mono text-sm"
          >
            <div className="bg-[#1e1e1e] border-b border-white/10 p-3 flex justify-between items-center text-white/70">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><FiTerminal /> Guest Terminal</span>
              <button onClick={() => setIsOpen(false)} className="hover:text-brand-accent transition-colors"><FiX size={18} /></button>
            </div>
            
            <div className="flex-1 p-5 overflow-y-auto space-y-3 text-gray-300">
              {history.map((line, i) => (
                <div key={i} className={`leading-relaxed ${line.type === 'error' ? 'text-red-400' : line.type === 'user' ? 'text-white font-medium' : 'text-gray-400'}`}>
                  {line.type === 'user' && <span className="text-brand-accent mr-3">❯</span>}
                  {line.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 flex items-center bg-[#1a1a1a]">
              <span className="text-brand-accent mr-3 font-bold">❯</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 placeholder-gray-600"
                placeholder="Try 'whoami' or 'resume'..."
                spellCheck="false"
                autoComplete="off"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveTerminal;
