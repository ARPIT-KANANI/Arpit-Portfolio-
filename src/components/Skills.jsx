import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    "React.js", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", 
    "Next.js", "Node.js", "Express.js", "MongoDB", "SQL", 
    "Git & GitHub", "REST APIs", "React Native"
  ];

  return (
    <section id="skills" className="py-10 md:py-16 relative border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm font-bold uppercase tracking-[0.2em] text-brand-muted mb-4 md:mb-0"
            >
              Technical Arsenal
            </motion.h2>
          </div>
          
          <div className="md:col-span-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-wrap gap-x-8 gap-y-4 md:gap-y-6"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="text-2xl md:text-4xl font-serif text-ink/80 dark:text-ink-dark/80 hover:text-brand-accent transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
