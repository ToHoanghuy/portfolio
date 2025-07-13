import React from 'react';
import { motion } from 'framer-motion';
import './FloatingElements.css';

const FloatingElements = () => {
  const elements = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="floating-elements">
      {elements.map((el) => (
        <motion.div
          key={el}
          className={`floating-element floating-element-${el + 1}`}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6 + el * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: el * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
