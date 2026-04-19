import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiBookOpen } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary dark:bg-secondary-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-gray-900 dark:text-white">About Me</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I am a passionate software engineer with a strong foundation in both front-end and back-end development. My educational background and 4+ years of professional experience have equipped me to build scalable, high-performance web and mobile applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I enjoy solving complex problems, working with modern technology stacks like React and Tailwind CSS, and delivering products that offer a clean, intuitive user experience. 
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
               <div className="glass-effect p-4 rounded-xl flex items-center gap-3">
                  <FiCode className="text-accent" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">Web Dev</span>
               </div>
               <div className="glass-effect p-4 rounded-xl flex items-center gap-3">
                  <FiSmartphone className="text-accent" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">App Dev</span>
               </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-2">
              <FiBookOpen className="text-accent" /> Education
            </h3>
            
            <div className="space-y-6">
              <div className="glass-effect p-6 rounded-2xl border-l-4 border-l-accent relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-default">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                <span className="text-sm text-accent font-semibold tracking-wider">Master's Degree</span>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1">MS in Computer Science</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2 font-medium">Adelphi University</p>
              </div>

              <div className="glass-effect p-6 rounded-2xl border-l-4 border-l-purple-500 relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-default">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                <span className="text-sm text-purple-500 font-semibold tracking-wider">Bachelor's Degree</span>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1">BE in Computer Engineering</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2 font-medium">University Name</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
