import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Portfolio.</h3>
            <p>© {currentYear} All rights reserved.</p>
          </div>
          <div className="footer-right">
            <p>Made with ❤️ in Vietnam</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
