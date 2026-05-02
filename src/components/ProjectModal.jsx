import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowUpRight, FiGithub } from 'react-icons/fi';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-paper-dark/90 dark:bg-black/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-5xl max-h-full overflow-y-auto bg-paper dark:bg-paper-dark rounded-xl shadow-2xl border border-black/10 dark:border-white/10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 bg-paper/80 dark:bg-paper-dark/80 backdrop-blur-sm rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>

            <div className="w-full aspect-[21/9] bg-black/5 dark:bg-white/5 relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper dark:from-paper-dark to-transparent opacity-80" />
            </div>

            <div className="p-8 md:p-12 -mt-20 md:-mt-32 relative z-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">{project.title}</h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-serif leading-relaxed mb-12 max-w-3xl">
                {project.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/10 dark:border-white/10 pt-12">
                
                {/* Details Section */}
                <div className="md:col-span-2 space-y-12">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-muted mb-6">The Problem</h3>
                    <p className="text-lg leading-relaxed text-ink/80 dark:text-ink-dark/80">
                      {project.extendedDetails?.problem || "A complex technical challenge requiring a scalable, performant solution."}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-muted mb-6">Architecture & Solution</h3>
                    <p className="text-lg leading-relaxed text-ink/80 dark:text-ink-dark/80">
                      {project.extendedDetails?.solution || "Designed a robust architecture using modern frameworks and best practices to ensure maintainability and speed."}
                    </p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-muted mb-4">Key Metrics</h3>
                    <ul className="space-y-3 font-medium">
                      {project.extendedDetails?.metrics?.map((metric, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                          {metric}
                        </li>
                      )) || (
                        <li className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                          High Performance
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col gap-4">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-between px-6 py-4 bg-ink text-paper dark:bg-paper dark:text-ink font-bold uppercase tracking-widest text-xs hover:bg-brand-accent dark:hover:bg-brand-accent hover:text-white transition-colors"
                    >
                      Visit Live Site <FiArrowUpRight size={18} />
                    </a>
                    
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-between px-6 py-4 border border-black/10 dark:border-white/10 font-bold uppercase tracking-widest text-xs hover:border-brand-accent hover:text-brand-accent transition-colors"
                    >
                      View Source <FiGithub size={18} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
