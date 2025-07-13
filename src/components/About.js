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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="image-placeholder">
              <img 
                src="/assets/avt.png" 
                alt="Developer" 
              />
            </div>
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
            <div className="skill-category">
              <h4>Programming Languages</h4>
              <div className="skills">
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>C#</span>
                <span>Java</span>
                <span>HTML/CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Frameworks & Platforms</h4>
              <div className="skills">
                <span>React Native</span>
                <span>ReactJS</span>
                <span>Node.js (Express)</span>
                <span>ASP.NET MVC</span>
                <span>ASP.NET Core</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Database Management</h4>
              <div className="skills">
                <span>SQL Server</span>
                <span>MongoDB</span>
                <span>Firebase</span>
                <span>Supabase</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Tools & Others</h4>
              <div className="skills">
                <span>Visual Studio</span>
                <span>Android Studio</span>
                <span>Figma</span>
                <span>GitHub</span>
                <span>Postman</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
