import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const glitchRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

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
    
    return () => {
      // Cleanup event listeners if needed
      if (glitchElement) {
        glitchElement.removeEventListener('mouseover', () => {});
      }
    };
  }, []);

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
      <div className="glitch-container">
        <div className="glitch" data-text="KARUTOIL" ref={glitchRef}>KARUTOIL</div>
      </div>
      <div className="tagline">
        <p>Server Architect. Cloud Virtualization Expert. Game Infrastructure Specialist.</p>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default Hero;