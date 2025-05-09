import React, { useEffect, useRef, useState } from 'react';
import '../styles/Hero.css';
import avatar from '../assets/avatar.webp';

const Hero: React.FC = () => {
  const glitchRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Add hover effect to the glitch title
    const glitchElement = glitchRef.current;
    
    if (glitchElement) {
      glitchElement.addEventListener('mouseover', () => {
        glitchElement.style.animationDuration = '0.5s';
        setTimeout(() => {
          glitchElement.style.animationDuration = '5s';
        }, 1000);
      });
    }

    // Create particle effect
    createParticles();
    
    // Add scroll event listener to hide scroll indicator when scrolling
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    // Initialize scroll position
    setScrollPosition(window.pageYOffset);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      // Cleanup event listeners if needed
      if (glitchElement) {
        glitchElement.removeEventListener('mouseover', () => {});
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to animate scroll indicator opacity based on scroll position
  useEffect(() => {
    if (scrollIndicatorRef.current) {
      const maxScroll = 200; // Adjust: smaller value means faster fade-out
      const opacity = Math.max(0, 1 - (scrollPosition / maxScroll));
      
      // Directly set the opacity style instead of using GSAP for this simple case
      scrollIndicatorRef.current.style.opacity = opacity.toString();
    }
  }, [scrollPosition]);

  // Function to create background particles
  const createParticles = () => {
    if (!heroRef.current) return;
    
    const hero = heroRef.current;
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random styling
      particle.style.width = `${Math.random() * 5 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.background = 'rgba(0, 238, 255, 0.7)';
      particle.style.borderRadius = '50%';
      particle.style.position = 'absolute';
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.boxShadow = '0 0 10px #00eeff';
      
      // Apply animation with random duration
      const duration = Math.random() * 20 + 10;
      particle.style.animation = `float ${duration}s linear infinite`;
      
      hero.appendChild(particle);
    }
  };

  return (
    <div className="hero" ref={heroRef}>
      <div className="avatar-container">
        <img src={avatar} alt="Karutoil" className="avatar-image" />
      </div>
      <div className="glitch-container">
        <div className="glitch" data-text="KARUTOIL" ref={glitchRef}>KARUTOIL</div>
      </div>
      <div className="tagline">
        <p>Server Architect. Cloud Virtualization Expert. Game Infrastructure Specialist.</p>
      </div>
      <div className="scroll-indicator" ref={scrollIndicatorRef}>
        <span>Scroll</span>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default Hero;