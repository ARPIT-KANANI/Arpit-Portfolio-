import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 flex items-center min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-blue-600/20"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:bg-purple-600/20"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-600/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block group">
              <span className="inline-block animate-wave">👋</span> Hello, welcome to my portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-6">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600 dark:from-accent dark:to-purple-400">Arpit Kanani</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium mb-6">
              Full Stack Developer 
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
              With over 4+ years of professional experience, I build clean, efficient, and dynamic web and mobile applications using modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-all flex items-center gap-2 shadow-lg shadow-accent/30 group">
                View My Work <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/arpitkanani0102/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl glass-effect text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center gap-2">
                <FiLinkedin size={18} className="text-blue-600" /> Connect
              </a>
            </div>

            <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
              <span className="text-sm font-medium uppercase tracking-wider">Find me on</span>
              <div className="h-px bg-gray-300 dark:bg-gray-700 w-12"></div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent transition-colors"><FiGithub size={22} /></a>
                <a href="https://www.linkedin.com/in/arpitkanani0102/" className="hover:text-blue-600 transition-colors"><FiLinkedin size={22} /></a>
                <a href="mailto:hello@example.com" className="hover:text-accent transition-colors"><FiMail size={22} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-end relative"
          >
            <div className="relative w-80 h-96 md:w-96 md:h-[30rem] rounded-2xl overflow-hidden glass-effect p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-purple-600/20 backdrop-blur-sm z-10 rounded-2xl"></div>
              {/* Placeholder for Arpit's photo */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Code Background" className="w-full h-full object-cover opacity-60" />
                 <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    <span className="text-6xl mb-4">💻</span>
                    <span className="font-semibold text-xl text-gray-800 dark:text-white bg-white/50 dark:bg-black/50 px-4 py-2 rounded-lg backdrop-blur-md">Dev Mode On</span>
                 </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-effect px-6 py-4 rounded-xl flex items-center gap-4 z-30"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">4+</div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Years of</p>
                <p className="text-gray-900 dark:text-white font-bold">Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
