import { motion } from 'framer-motion';
import profileImg from '../assets/ptfloimg.png';

const Hero = () => {
  const title = "Arpit";
  const subtitle = "Kanani";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotate: 5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20 pb-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 z-10">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-[80px] sm:text-[120px] lg:text-[160px] leading-[0.85] font-serif font-bold tracking-tighter mb-8 md:mb-12 flex flex-col"
          >
            <div className="flex overflow-hidden pb-4">
              {title.split('').map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex overflow-hidden pb-4 -mt-4">
              {subtitle.split('').map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block italic font-normal text-brand-muted dark:text-gray-500">
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg md:text-xl font-medium mb-8 max-w-sm">
              Full Stack Developer crafting clean, efficient, and dynamic digital experiences.
            </p>
            <a href="#projects" className="inline-flex items-center text-sm font-bold uppercase tracking-[0.2em] hover-target group">
              <span className="mr-4">View Selected Work</span>
              <span className="w-8 h-px bg-current group-hover:w-16 transition-all duration-300"></span>
            </a>
          </motion.div>
        </div>

        <div className="md:col-span-5 relative mt-12 md:mt-0 md:-ml-12 lg:-ml-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md mx-auto md:ml-0 aspect-[4/5] relative overflow-hidden group border border-black/5 dark:border-white/5"
          >
            <img
              src={profileImg}
              alt="Arpit Kanani"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-accent/5 mix-blend-multiply dark:mix-blend-screen pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
