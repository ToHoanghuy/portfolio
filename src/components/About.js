import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About.
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              I'm <strong>Tô Hoàng Huy</strong>, a final-year student majoring in 
              Software Engineering at the University of Information Technology (UIT), 
              expected to graduate in August 2025. I have a solid foundation in mobile 
              application development, specializing in React Native and frontend technologies 
              with TypeScript and JavaScript.
            </p>
            <p>
              With hands-on experience as a <strong>Mobile Developer Intern</strong>, I've 
              contributed to real production projects including gas tracking applications 
              and e-commerce platforms. I have good command of English and am capable of 
              reading technical documentation and communicating in professional contexts.
            </p>
            <p>
              I aspire to become a skilled mobile and frontend developer, contributing to the development 
              of high-quality, user-centric mobile products in a collaborative environment. 
              My experience includes working with React Native, ReactJS, Node.js, and 
              various databases including Firebase, MongoDB, and SQL Server.
            </p>
          </motion.div>

          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="image-placeholder"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src="/assets/avt.png" 
                alt="Developer" 
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="skills-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {[
              {
                title: "Programming Languages",
                skills: ["JavaScript", "TypeScript", "C#", "Java", "HTML/CSS"]
              },
              {
                title: "Frameworks & Platforms", 
                skills: ["React Native", "ReactJS", "Node.js (Express)", "ASP.NET MVC", "ASP.NET Core"]
              },
              {
                title: "Database Management",
                skills: ["SQL Server", "MongoDB", "Firebase", "Supabase"]
              },
              {
                title: "Tools & Others",
                skills: ["Visual Studio", "Android Studio", "Figma", "GitHub", "Postman", "UI/UX", "Design Pattern"]
              }
            ].map((category, categoryIndex) => (
              <motion.div 
                key={category.title}
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + categoryIndex * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <h4>{category.title}</h4>
                <div className="skills">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 0.7 + categoryIndex * 0.1 + skillIndex * 0.05, 
                        duration: 0.4 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#6366f1",
                        color: "white",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
