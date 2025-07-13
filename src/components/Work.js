import React from 'react';
import { motion } from 'framer-motion';
import './Work.css';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Student Course Registration Management",
      category: "FrontEnd Development",
      period: "Apr - Jun 2025",
      teamSize: "5",
      role: "Front-end",
      technologies: "ReactJS, Java Spring Boot, Design Patterns",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      description: "Web application supporting students course registration with admin/staff roles, full CRUD functions, and optimized with design patterns.",
      github: "https://github.com/FakerHecker/SE401_Group2_Project"
    },
    {
      id: 2,
      title: "Booking Management System",
      category: "Mobile Development",
      period: "Sep - Dec 2024",
      teamSize: "2",
      role: "Front-end, Mobile",
      technologies: "ReactJS, React Native, NodeJS, TypeScript",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: "Multi-platform booking system for users and business owners with AI recommendation features and cross-platform integration (web & mobile).",
      github: "https://github.com/ToHoanghuy/WebsiteDuLich"
    },
    {
      id: 3,
      title: "Tour Management System",
      category: "Frontend Development", 
      period: "Mar - Jun 2024",
      teamSize: "4",
      role: "Front-end",
      technologies: "Java, JavaScript, HTML/CSS, Bootstrap",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      description: "Tour management system for staff with booking management, invoice generation, and Supabase integration for data storage.",
      github: "https://github.com/nhubaole/adventour/tree/Dev3Huy"
    },
    {
      id: 4,
      title: "Daily Expense Management",
      category: "Mobile Development",
      period: "Mar - May 2023",
      teamSize: "2",
      role: "Front-end",
      technologies: "React Native CLI, TypeScript",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
      description: "Mobile app for daily expense management with wallet functionality and spending statistics.",
      github: "https://github.com/ToHoanghuy/My-Daily"
    },
    {
      id: 5,
      title: "Homelisti Real Estate Platform",
      category: "FrontEnd Development",
      period: "Jan - Apr 2024",
      teamSize: "1",
      role: "Front-end Developer",
      technologies: "Next.js, React, TypeScript, Material-UI, SCSS",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      description: "Modern real estate platform with property listings, user authentication, responsive design, and real estate search functionality.",
      github: "https://github.com/ToHoanghuy/homelisti_webpage"
    },
    {
      id: 6,
      title: "EduMart E-Learning Platform",
      category: "FrontEnd Development", 
      period: "Aug - Dec 2024",
      teamSize: "1",
      role: "Front-end Developer",
      technologies: "React, Context API, React Router, Lucide Icons",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      description: "AI-powered e-learning platform with course management, personalized recommendations, shopping cart, user authentication, and chatbot support.",
      github: "https://github.com/ToHoanghuy/ecommerce"
    }
  ];

  return (
    <section className="work" id="work">
      <div className="work-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Personal Projects.
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          A collection of personal projects showcasing my skills in mobile and web development
        </motion.p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="project-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <img src={project.image} alt={project.title} />
                <motion.div 
                  className="image-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <div className="project-content">
                <div className="project-header">
                  <motion.h3 
                    className="project-title"
                    whileHover={{ color: "#6366f1" }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <span className="project-period">{project.period}</span>
                </div>
                <p className="project-category">{project.category}</p>
                
                <div className="project-details">
                  <div className="detail-row">
                    <span className="detail-item">
                      <strong>Team:</strong> {project.teamSize} | <strong>Role:</strong> {project.role}
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="tech-stack">{project.technologies}</span>
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <motion.div 
                  className="project-link" 
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, '_blank');
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#6366f1",
                    color: "white"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>View on GitHub →</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
