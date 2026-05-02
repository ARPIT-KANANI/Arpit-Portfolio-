import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project, setSelectedProject }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${
        project.alignment === 'center' ? 'md:items-center' :
        project.alignment === 'left' ? 'md:items-start' : 'md:items-end'
      }`}
    >
      <button 
        onClick={() => setSelectedProject(project)} 
        className={`group block w-full relative text-left ${
          project.alignment === 'center' ? 'md:w-4/5 lg:w-3/4' : 'md:w-2/3 lg:w-1/2'
        }`}
        aria-label={`View details for ${project.title}`}
      >
        <div className="relative overflow-hidden bg-black/5 dark:bg-white/5 aspect-[16/9] md:aspect-[21/9]">
          <motion.img 
            style={{ y, scale: 1.1 }}
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            onError={(e) => {
              e.target.src = `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80`;
            }}
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>

        <div className={`mt-8 md:mt-12 flex flex-col md:flex-row gap-6 md:gap-12 ${
          project.alignment === 'right' ? 'md:flex-row-reverse md:text-right' : ''
        }`}>
          <div className="flex-1">
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-4 group-hover:text-brand-accent transition-colors">{project.title}</h3>
            <div className={`flex flex-wrap gap-2 mb-6 ${project.alignment === 'right' ? 'justify-end' : ''}`}>
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-medium uppercase tracking-wider text-brand-muted border border-brand-muted/30 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {project.description}
            </p>
            <div className={`flex items-center gap-6 ${project.alignment === 'right' ? 'justify-end' : ''}`}>
              <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-accent hover:opacity-80 transition-opacity">
                Read Case Study <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'TryConvert',
      description: 'A powerful browser-based document conversion tool to convert PDF to Word, Word to PDF, and more, all locally in your browser for maximum privacy.',
      image: '/projects/tryconvert.png',
      tags: ['React', 'PDF.js', 'Mammoth', 'Web Workers'],
      liveUrl: 'https://github.com/ARPIT-KANANI/tryconvert',
      githubUrl: 'https://github.com/ARPIT-KANANI/tryconvert',
      alignment: 'center',
      extendedDetails: {
        problem: 'Users needed a way to convert sensitive documents (like legal PDFs) into editable formats without uploading them to remote third-party servers, which poses a massive privacy risk.',
        solution: 'I architected a 100% client-side conversion engine using Web Workers to prevent UI blocking. Utilizing PDF.js for rendering and Mammoth for Word generation, the app parses and restructures documents entirely within the user\'s browser memory.',
        metrics: ['100% Client-side Processing', 'Zero Data Retention', '< 2s Conversion Time for 50 pages']
      }
    },
    {
      id: 2,
      title: 'TryReel',
      description: 'A dynamic, infinite-scrolling short-form video platform featuring frictionless playback, mobile-optimized navigation, and engaging interactions.',
      image: '/projects/tryreel.png',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      liveUrl: 'https://tryreel.vercel.app',
      githubUrl: 'https://github.com/ARPIT-KANANI/tryReel',
      alignment: 'left',
      extendedDetails: {
        problem: 'Building a TikTok clone on the web often results in laggy scrolling, delayed video play/pause sync, and high memory consumption due to multiple loaded video nodes.',
        solution: 'Implemented an Intersection Observer to deeply manage video playback states, ensuring only the in-view video plays. I also utilized React portals and Framer Motion to create butter-smooth transitions between the feed and user profiles.',
        metrics: ['60fps Infinite Scroll', 'Lazy-loaded Video Nodes', '98/100 Lighthouse Performance']
      }
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'An editorial, highly crafted personal portfolio website designed to showcase a unique technical narrative.',
      image: '/projects/portfolio.png',
      tags: ['React', 'Tailwind', 'Vite'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ARPIT-KANANI/Arpit-Portfolio-',
      alignment: 'right',
      extendedDetails: {
        problem: 'Standard developer portfolios look like templates. I needed a way to stand out to technical recruiters by demonstrating an eye for premium design and micro-interactions.',
        solution: 'Designed an asymmetric, typography-driven editorial layout using Tailwind CSS. Built custom cursor interactions, scroll-based reveal animations with Framer Motion, and engineered a completely custom color token system (Paper & Ink).',
        metrics: ['Custom Design System', 'Accessible Semantic HTML', 'Fully Responsive']
      }
    }
  ];

  return (
    <>
      <section id="projects" className="py-10 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-brand-muted">Selected Work</h2>
            <p className="text-2xl md:text-4xl font-serif max-w-2xl text-ink dark:text-ink-dark">
              A curated selection of my most recent technical achievements.
            </p>
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-24">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} setSelectedProject={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
};

export default Projects;
