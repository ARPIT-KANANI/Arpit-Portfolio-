import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product search, cart functionality, and Stripe integration for payments.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive web application for managing tasks and projects collaboratively. Features real-time updates via WebSockets and a drag-and-drop Kanban board interface.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Tailwind CSS', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A minimal and clean personal portfolio website (this one!) built with React, Tailwind CSS, and Framer Motion for smooth animations and transitions.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-gray-900 dark:text-white">Featured Projects</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent works and technical achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex item-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                  <a href={project.githubUrl} className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                    <FiGithub size={16} /> Code
                  </a>
                  <a href={project.liveUrl} className="flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                    Live Demo <FiExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
