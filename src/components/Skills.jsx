import { motion } from 'framer-motion';

const Skills = () => {
  const skillsList = [
    { name: 'React.js', category: 'Frontend', level: 95 },
    { name: 'Tailwind CSS', category: 'Frontend', level: 90 },
    { name: 'JavaScript / ES6+', category: 'Language', level: 92 },
    { name: 'TypeScript', category: 'Language', level: 85 },
    { name: 'Next.js', category: 'Frontend', level: 80 },
    { name: 'Node.js', category: 'Backend', level: 75 },
    { name: 'Express.js', category: 'Backend', level: 80 },
    { name: 'MongoDB', category: 'Database', level: 75 },
    { name: 'SQL', category: 'Database', level: 80 },
    { name: 'Git & GitHub', category: 'Tools', level: 90 },
    { name: 'REST APIs', category: 'Backend', level: 90 },
    { name: 'Mobile App Dev (React Native)', category: 'Mobile', level: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary dark:bg-secondary-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-gray-900 dark:text-white">Technical Skills</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A diverse toolkit encompassing frontend design, backend infrastructure, and deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsList.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-effect p-6 rounded-xl flex flex-col justify-center items-center text-center cursor-default group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                {skill.name}
              </h3>
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                {skill.category}
              </span>
              
              <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-4 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.05) }}
                  className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
