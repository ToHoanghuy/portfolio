import React from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaReact, FaCode, FaPalette } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaMobile />,
      title: "Mobile App Development",
      description: "Specialized in React Native development with TypeScript. Experienced in building production-ready applications, including gas monitoring systems and e-commerce platforms. Proficient in API connectivity and cross-platform mobile solutions. Knowledge of using ExpoGo and CLI in React Native application development."
    },
    {
      icon: <FaReact />,
      title: "Frontend Web Development",
      description: "Proficient in ReactJS and modern JavaScript/TypeScript development. Experience building responsive web applications, booking management systems, and admin dashboards with clean, maintainable code and user-friendly interfaces."
    },
    // {
    //   icon: <FaCode />,
    //   title: "Full Stack Development",
    //   description: "Experience with both frontend and backend development using Node.js, Express, Java Spring Boot, and ASP.NET. Familiar with database management including SQL Server, MongoDB, Firebase, and Supabase for complete application solutions."
    // },
    {
      icon: <FaPalette />,
      title: "UI/UX Implementation",
      description: "Skilled in implementing designs from mockups to functional interfaces using React Native and ReactJS. Experience with design tools like Figma, ensuring pixel-perfect implementation and maintaining design consistency across platforms."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Services.
        </motion.h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
