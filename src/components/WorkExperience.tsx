import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faGamepad, faUserTie } from '@fortawesome/free-solid-svg-icons';
import '../styles/WorkExperience.css';

const WorkExperience: React.FC = () => {
  const workRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set up GSAP animations
    if (workRef.current) {
      gsap.to('.work-heading', {
        scrollTrigger: {
          trigger: '.work-experience',
          start: 'top 70%',
          end: 'bottom 70%',
          toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      });

      // Animate work cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom 70%',
              toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power2.out'
          });
        }
      });
    }
  }, []);

  // Fixed ref callback functions
  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[index] = el;
  };

  return (
    <div className="work-experience" ref={workRef}>
      <div className="work-content">
        <h2 className="work-heading">Professional Experience</h2>
        
        <div className="work-grid">
          {/* Server Administration Card */}
          <div 
            className="work-card" 
            ref={setCardRef(0)}
          >
            <div className="work-card-icon">
              <FontAwesomeIcon icon={faServer} />
            </div>
            <h3>Server Administration</h3>
            <p className="work-description">
              Expert in managing diverse hosting platforms and server infrastructure, including:
            </p>
            <ul className="work-list">
              <li><span>WHMCS</span> - Billing and client management automation system for hosting companies</li>
              <li><span>ProxMox</span> - Open-source virtualization platform for managing VMs and containers</li>
              <li><span>VirtFusion</span> - Advanced VM management solution for hosting providers</li>
              <li><span>Tenantos</span> - Server Business Automation for service providers</li>
              <li><span>PXE Image Creation</span> - Network boot server configurations for automated deployments</li>
              <li><span>Baremetal Deployment</span> - Hardware-level server provisioning and configuration</li>
            </ul>
          </div>
          
          {/* Game Server Management Card */}
          <div 
            className="work-card" 
            ref={setCardRef(1)}
          >
            <div className="work-card-icon">
              <FontAwesomeIcon icon={faGamepad} />
            </div>
            <h3>Game Server Management</h3>
            <p className="work-description">
              Specialized in deploying, optimizing, and maintaining game servers across multiple platforms:
            </p>
            <ul className="work-list">
              <li><span>Minecraft</span> - Java and Bedrock server setup, plugin configuration, performance tuning</li>
              <li><span>FiveM</span> - GTA V modification server management, resource optimization, framework implementation</li>
              <li><span>Factorio</span> - Dedicated server deployment, mod management, save optimization</li>
              <li><span>Space Engineers</span> - Multiplayer server configuration, world optimization, mod integration</li>
            </ul>
            <p>Game server management involves performance tuning, security hardening, automation of backups, custom mod implementation, and maintaining high-availability for optimal player experience.</p>
          </div>
          
          {/* Consulting Card */}
          <div 
            className="work-card" 
            ref={setCardRef(2)}
          >
            <div className="work-card-icon">
              <FontAwesomeIcon icon={faUserTie} />
            </div>
            <h3>Consulting Services</h3>
            <p className="work-description">
              Strategic advisor for game hosting companies and cloud providers, offering expertise in:
            </p>
            <ul className="work-list">
              <li><span>Infrastructure Optimization</span> - Designing scalable, cost-efficient hosting architectures</li>
              <li><span>Performance Tuning</span> - Identifying and resolving system bottlenecks</li>
              <li><span>Automation Solutions</span> - Implementing workflows to reduce manual intervention</li>
              <li><span>Security Hardening</span> - Protecting against DDoS attacks and vulnerabilities</li>
              <li><span>Technical Support Systems</span> - Establishing effective customer service protocols</li>
            </ul>
            <p>Consulting services typically include infrastructure audits, workflow optimization, custom solution development, and staff training to improve operational efficiency and service quality.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
