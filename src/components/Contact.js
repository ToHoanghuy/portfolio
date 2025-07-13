import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contact.</h2>
          <div className="contact-cta">
            <h3>LET'S WORK</h3>
            <h3>TOGETHER</h3>
          </div>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>tohoanghuy19052004@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>+84 386 441 295</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>Thu Duc, Ho Chi Minh City</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Subject" 
                required 
              />
            </div>
            
            <div className="form-group">
              <textarea 
                placeholder="Your Message" 
                rows="5" 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </motion.form>
        </div>

        <motion.div 
          className="contact-social"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/ToHoanghuy" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <span>Github</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100069102022852" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <span>Facebook</span>
          </a>
          <a href="mailto:tohoanghuy19052004@gmail.com">
            <FaEnvelope />
            <span>Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
