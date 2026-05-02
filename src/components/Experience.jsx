import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Software Engineer',
      company: 'Current Company',
      duration: '2022 - Present',
      description: 'Leading front-end development, architecting scalable solutions, and mentoring junior developers. Implementing complex user interfaces using React and modern CSS frameworks.',
      technologies: ['React', 'Next.js', 'Tailwind', 'TypeScript']
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
    <section id="experience" className="py-10 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-16 text-center"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-brand-muted">The Journey</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line hidden on mobile, visible on md */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10 -translate-x-1/2"></div>
          
          <div className="flex flex-col gap-20 md:gap-0">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row items-center md:h-64 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:items-start md:pl-20' : 'md:items-end md:pr-20 md:text-right'}`}>
                    <span className="text-xs font-bold font-sans uppercase tracking-widest text-brand-muted mb-2">
                      {exp.duration}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                      {exp.role}
                    </h3>
                    <span className="text-xl italic font-serif text-brand-accent mb-6">
                      {exp.company}
                    </span>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${isEven ? '' : 'md:justify-end'}`}>
                      {exp.technologies.map(tech => (
                        <span key={tech} className="text-xs font-medium border border-black/10 dark:border-white/10 px-3 py-1 rounded-full text-brand-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative Dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-accent rounded-full ring-4 ring-bg-light dark:ring-bg-dark z-10"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
