import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Mobile & Frontend Developer',
    'React Native Specialist',
    // 'Full-Stack Developer',
    // 'UI/UX Enthusiast'
    'Software Engineering'

  ];

  const tags = [
    'Software Engineering Student', 'Mobile Developer', 'React Native', 'TypeScript', 
    'JavaScript', 'ReactJS', 'Node.js', 'MongoDB', 'UI/UX', 'Design Pattern',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-greeting"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello 👋
          </motion.h1>
          
          <motion.h2 
            className="hero-name"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            I'm Tô Hoàng Huy
          </motion.h2>
          
          <div className="hero-title-container">
            <AnimatePresence mode="wait">
              <motion.h3 
                key={currentRole}
                className="hero-title"
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              >
                {roles[currentRole]}
              </motion.h3>
            </AnimatePresence>
          </div>
          
          <motion.p 
            className="hero-location"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              color: "#6366f1",
              transition: { duration: 0.3 }
            }}
          >
            based in Thu Duc, Ho Chi Minh City, Vietnam.
          </motion.p>
        </motion.div>

        <motion.div 
          className="hero-tags"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {tags.map((tag, index) => (
            <motion.span 
              key={tag}
              className="tag"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.05, duration: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                y: -3,
                backgroundColor: "#6366f1",
                color: "#ffffff",
                transition: { 
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          className="hero-social"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.a 
            href="https://github.com/ToHoanghuy" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.15,
              y: -2,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/huy-t%C3%B4-ho%C3%A0ng-024414329/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.15,
              y: -2,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="mailto:tohoanghuy19052004@gmail.com"
            whileHover={{ 
              scale: 1.15,
              y: -2,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
