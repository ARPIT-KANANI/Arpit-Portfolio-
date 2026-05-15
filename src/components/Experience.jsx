import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Full Stack Developer & Agentic AI Builder',
      company: 'Upwork — Freelance',
      duration: 'Jan 2019 – Dec 2022',
      description: [
        'Designed and shipped 10+ production web applications and SaaS products for clients across the US, EU, and Asia.',
        'Pioneered agentic development workflows using Cursor IDE and Claude API, reducing feature delivery time by ~60%.',
        'Built AI-powered tools including a GPT-based customer support chatbot and an automated content generation pipeline using LangChain and OpenAI.',
        'Led end-to-end design to development for 6+ projects in Figma, achieving over 65% client satisfaction.',
        'Architected scalable full-stack solutions using Next.js, Vercel, and MongoDB Atlas with CI/CD pipelines.'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Next.js', 'LangChain', 'OpenAI']
    },
    {
      id: 2,
      role: 'Full Stack Web Developer Intern',
      company: 'Zlato Technolab',
      duration: 'Jan 2023 – May 2023',
      description: [
        'Built and maintained web applications using the MERN stack within an Agile team of 8 engineers.',
        'Engineered responsive user interfaces with CSS3 and Bootstrap, improving measured user engagement by 25%.',
        'Integrated REST APIs for Facebook and LinkedIn to enable a social-media post-scheduling feature adopted by 500+ small-business clients.',
        'Delivered features end-to-end from design mockup to production deployment.'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'REST APIs']
    },
    {
      id: 3,
      role: 'Web Developer Intern',
      company: 'Laurentian University',
      duration: 'June 2022 – Aug 2022',
      description: [
        'Developed an Android application for Laurentian University combining facial recognition and NFC-based verification for secure student attendance tracking.',
        'Integrated REST API and a real-time monitoring dashboard accessible by faculty.'
      ],
      technologies: ['Android', 'REST APIs', 'NFC', 'Facial Recognition']
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-brand-muted">My Journey</h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Static Background Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-black/10 dark:bg-white/10 -translate-x-1/2"></div>
          
          {/* Animated Drawing Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-brand-accent -translate-x-1/2 z-0"
          />
          
          <div className="flex flex-col gap-20 md:gap-0">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
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
                    <div className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg text-sm space-y-3">
                      {Array.isArray(exp.description) ? (
                        exp.description.map((item, i) => (
                          <p key={i}>• {item}</p>
                        ))
                      ) : (
                        <p>{exp.description}</p>
                      )}
                    </div>
                    <div className={`flex flex-wrap gap-2 ${isEven ? '' : 'md:justify-end'}`}>
                      {exp.technologies.map(tech => (
                        <span key={tech} className="text-xs font-medium border border-black/10 dark:border-white/10 px-3 py-1 rounded-full text-brand-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Animated Interactive Dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-4 h-4 bg-brand-accent rounded-full ring-4 ring-paper dark:ring-paper-dark shadow-lg"
                    />
                  </div>
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
