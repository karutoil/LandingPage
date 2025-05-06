import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <p>&copy; {currentYear} Karutoil. All rights reserved.</p>
    </footer>
  );
};

export default Footer;