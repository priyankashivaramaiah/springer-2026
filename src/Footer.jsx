import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div className="quick-navigation">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
        <a href="#schedule">Schedule</a>
      </div>
      <div className="copyright">
        <p>&copy; 2026 Springer Conference. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;