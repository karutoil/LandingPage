// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Animate the about section when scrolled into view
    gsap.to('.about-content', {
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

    // Create a particle effect in the background
    createParticles();

    // Add hover effect to the glitch title
    const glitchElement = document.querySelector('.glitch');
    glitchElement.addEventListener('mouseover', () => {
        glitchElement.style.animationDuration = '0.5s';
        setTimeout(() => {
            glitchElement.style.animationDuration = '5s';
        }, 1000);
    });
});

// Function to create background particles
function createParticles() {
    const hero = document.querySelector('.hero');
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
        
        // Add keyframes for the animation
        const styleSheet = document.styleSheets[0];
        const keyframes = `
            @keyframes float {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        
        try {
            styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        } catch (e) {
            // Fallback for browsers that don't support insertRule
            const style = document.createElement('style');
            style.innerHTML = keyframes;
            document.head.appendChild(style);
        }
        
        hero.appendChild(particle);
    }
}

// Add a simple cursor effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    document.body.appendChild(cursor);
    
    // Remove the element after animation completes
    setTimeout(() => {
        cursor.remove();
    }, 500);
});

// Add cursor trail style
const cursorStyle = document.createElement('style');
cursorStyle.innerHTML = `
    .cursor-trail {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: var(--accent-color);
        position: absolute;
        pointer-events: none;
        transform: translate(-50%, -50%);
        opacity: 0.7;
        z-index: 9999;
        animation: cursorFade 0.5s forwards;
    }
    
    @keyframes cursorFade {
        0% {
            opacity: 0.7;
            width: 5px;
            height: 5px;
        }
        100% {
            opacity: 0;
            width: 25px;
            height: 25px;
        }
    }
`;
document.head.appendChild(cursorStyle);