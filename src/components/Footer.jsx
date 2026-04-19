import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary dark:bg-primary-dark pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600 dark:from-accent dark:to-purple-400 mb-6">
          Arpit Kanani
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-8">
          Building digital products with a focus on clean design and optimal user experiences. Always open to discussing new opportunities.
        </p>

        <div className="flex gap-6 mb-12">
          <a href="#" className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent hover:-translate-y-1 transition-all shadow-sm">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/arpitkanani0102/" className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 hover:-translate-y-1 transition-all shadow-sm">
            <FiLinkedin size={20} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 hover:-translate-y-1 transition-all shadow-sm">
            <FiTwitter size={20} />
          </a>
          <a href="mailto:hello@example.com" className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent hover:-translate-y-1 transition-all shadow-sm">
            <FiMail size={20} />
          </a>
        </div>

        <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-8"></div>
        
        <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
          &copy; {currentYear} Arpit Kanani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
