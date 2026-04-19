import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Software Engineer',
      company: 'Current Company',
      duration: '2022 - Present',
      description: 'Leading front-end development, architecting scalable solutions, and mentoring junior developers. Implementing complex user interfaces using React and modern CSS frameworks.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript']
    },
    {
      id: 2,
      role: 'Software Developer',
      company: 'Previous Company',
      duration: '2020 - 2022',
      description: 'Developed and maintained core web applications. Collaborated with cross-functional teams to define, design, and ship new features. Improved application performance by 30%.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {
      id: 3,
      role: 'Junior Full Stack Developer',
      company: 'StartUp Inc.',
      duration: '2019 - 2020',
      description: 'Assisted in building full-stack web applications. Handled database design, API creation, and responsive frontend implementation.',
      technologies: ['JavaScript', 'HTML/CSS', 'MySQL', 'PHP']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-gray-900 dark:text-white">Experience</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Over 4 years of professional work history.</p>
        </motion.div>

        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-10 ml-8 md:ml-10 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-10 md:-left-12 mt-1.5 w-4 h-4 rounded-full bg-accent ring-4 ring-white dark:ring-primary-dark"></div>
              
              <div className="glass-effect p-6 md:p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <p className="text-lg text-accent font-medium flex items-center gap-2">
                      <FiBriefcase size={16} /> {exp.company}
                    </p>
                  </div>
                  <span className="text-sm font-semibold px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full w-fit">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-medium px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md border border-blue-100 dark:border-blue-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
