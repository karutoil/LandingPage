import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/About.css';

const About: React.FC = () => {
  const aboutContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up GSAP animation for the about section
    if (aboutContentRef.current) {
      gsap.to(aboutContentRef.current, {
        scrollTrigger: {
          trigger: '.about',
          start: 'top 70%',
          end: 'bottom 70%',
          toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      });
    }
  }, []);

  return (
    <div className="about">
      <div className="about-content" ref={aboutContentRef}>
        <h2>About</h2>
        <p>Specialized in high-performance infrastructure solutions and virtualization technologies. I design and optimize server environments for game hosting providers and cloud platforms, transforming technical challenges into efficient, scalable architectures that deliver exceptional performance and reliability.</p>
      </div>
    </div>
  );
};

export default About;