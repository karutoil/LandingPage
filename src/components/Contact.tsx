import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="social-links">
          <a href="https://github.com/karutoil" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
            <span>GitHub: karutoil</span>
          </a>
          <a href="https://discord.com/users/karutoil" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-discord"></i>
            <span>Discord: karutoil</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;