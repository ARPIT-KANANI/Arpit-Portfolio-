import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "React.js", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "REST APIs", icon: <FaServer /> },
    { name: "React Native", icon: <FaReact /> }
  ];

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      setRotation(prev => prev + 0.003); // Rotation speed
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const sphereItems = useMemo(() => {
    // Duplicate the items for a denser 24-item sphere
    const items = [...skills, ...skills].map((s, i) => ({ ...s, id: i }));
    const n = items.length;
    // Base radius of the sphere
    const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 130 : 180;
    
    return items.map((item, index) => {
      // Fibonacci sphere math for even distribution
      const phi = Math.acos(1 - (2 * index) / n);
      const theta = Math.PI * (1 + Math.sqrt(5)) * index;
      
      return {
        ...item,
        bx: radius * Math.cos(theta) * Math.sin(phi),
        by: radius * Math.sin(theta) * Math.sin(phi),
        bz: radius * Math.cos(phi),
        radius
      };
    });
  }, []);

  return (
    <section id="skills" className="py-10 md:py-16 relative border-t border-black/10 dark:border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 z-10">
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
          
          <div className="md:col-span-8 relative h-[300px] md:h-[350px] flex items-center justify-center">
            {sphereItems.map((item) => {
              // Apply dynamic 3D rotation around Y and X axis
              const cosRY = Math.cos(rotation);
              const sinRY = Math.sin(rotation);
              const rx = rotation * 0.5; // Rotate slower on X axis
              const cosRX = Math.cos(rx);
              const sinRX = Math.sin(rx);

              // Y-axis rotation
              let x1 = item.bx * cosRY + item.bz * sinRY;
              let z1 = -item.bx * sinRY + item.bz * cosRY;

              // X-axis rotation
              let y2 = item.by * cosRX - z1 * sinRX;
              let z2 = item.by * sinRX + z1 * cosRX;

              // Calculate 2D projection variables
              const scale = (z2 + 2 * item.radius) / (3 * item.radius);
              const opacity = (z2 + 1.5 * item.radius) / (2.5 * item.radius);
              const zIndex = Math.round(z2);

              return (
                <div
                  key={item.id}
                  className="absolute flex flex-col items-center justify-center gap-2 group cursor-pointer"
                  style={{
                    // Stretch width (x1 * 1.8) and compress height (y2 * 0.6) to make it a wide spiral
                    transform: `translate3d(${x1 * 1.8}px, ${y2 * 0.6}px, 0) scale(${scale})`,
                    opacity: Math.max(0.1, opacity),
                    zIndex: zIndex,
                    // Disable interactions for icons fading in the back to prevent weird hover states
                    pointerEvents: z2 < -50 ? 'none' : 'auto'
                  }}
                >
                  <div className="text-4xl md:text-5xl text-ink/70 dark:text-ink-dark/70 group-hover:text-brand-accent group-hover:scale-125 transition-all duration-300 drop-shadow-lg">
                    {item.icon}
                  </div>
                  <span className="absolute top-full mt-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
