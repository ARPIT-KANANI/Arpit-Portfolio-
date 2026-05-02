import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-10 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5 md:col-start-2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-brand-muted">The Story</h2>
              
              <div className="text-3xl md:text-5xl leading-tight font-serif text-ink dark:text-ink-dark mb-12">
                <p className="drop-cap">
                  I build scalable, high-performance digital products that offer a clean, intuitive user experience.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-4 md:col-start-8 mt-12 md:mt-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="editorial-line pb-6 mb-6">
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  With a strong foundation in both front-end and back-end development, backed by a Master's in Computer Science from Adelphi University and over 4 years of professional experience, I approach engineering as both an analytical science and a creative discipline.
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  I enjoy solving complex problems using modern technology stacks like React, Node.js, and elegant CSS frameworks, ensuring that the underlying architecture is as beautiful as the interface.
                </p>
              </div>
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-4">Background</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-baseline">
                    <span className="font-serif text-lg">MS, Computer Science</span>
                    <span className="text-xs text-brand-muted">Adelphi Univ.</span>
                  </li>
                  <li className="flex justify-between items-baseline">
                    <span className="font-serif text-lg">BE, Computer Engineering</span>
                    <span className="text-xs text-brand-muted">GTU</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
