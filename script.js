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

    // Fetch GitHub repositories
    fetchGitHubRepos();
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

// Function to fetch GitHub pinned repositories
async function fetchGitHubRepos() {
    try {
        // GitHub username
        const username = 'karutoil';
        
        // Fetch user repositories
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }
        
        const repos = await response.json();
        
        // GitHub doesn't have a direct API for pinned repos, so we'll display the most starred ones
        // and let GitHub API determine which are most relevant
        const topRepos = repos
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 4);
        
        // Clear the placeholder repos
        const reposGrid = document.querySelector('.repos-grid');
        reposGrid.innerHTML = '';
        
        // Add the actual repos
        topRepos.forEach((repo, index) => {
            // Create repo card with animation delay based on index
            const repoCard = document.createElement('div');
            repoCard.className = 'repo-card';
            repoCard.style.setProperty('--i', index + 1);
            
            // Sanitize the description to handle null values
            const description = repo.description 
                ? repo.description 
                : 'No description available';
            
            repoCard.innerHTML = `
                <div class="repo-header">
                    <i class="fa-brands fa-github"></i>
                    <h3>${repo.name}</h3>
                </div>
                <p class="repo-description">${description}</p>
                <div class="repo-footer">
                    <span><i class="fa-solid fa-code-branch"></i> ${repo.forks_count}</span>
                    <span><i class="fa-solid fa-star"></i> ${repo.stargazers_count}</span>
                    <a href="${repo.html_url}" target="_blank" class="repo-link">View Project <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            `;
            
            reposGrid.appendChild(repoCard);
        });
        
    } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        
        // Show error message in the repo section
        const reposContent = document.querySelector('.repos-content');
        const errorMsg = document.createElement('p');
        errorMsg.className = 'repos-error';
        errorMsg.textContent = 'Failed to load GitHub repositories. Please check back later.';
        
        // Add error styling
        errorMsg.style.color = '#ff4545';
        errorMsg.style.textAlign = 'center';
        errorMsg.style.margin = '2rem 0';
        
        // Clear the placeholder repos
        const reposGrid = document.querySelector('.repos-grid');
        reposGrid.innerHTML = '';
        
        // Add the error message
        reposContent.appendChild(errorMsg);
    }
}