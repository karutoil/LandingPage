import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/GitHubRepos.css';

interface Repo {
  name: string;
  description: string;
  html_url: string;
  forks_count: number;
  stargazers_count: number;
}

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch GitHub repositories
    const fetchGitHubRepos = async () => {
      try {
        // GitHub username
        const username = 'karutoil';
        
        // Fetch user repositories
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        
        // GitHub doesn't have a direct API for pinned repos, so we'll display the most starred ones
        const topRepos = data
          .sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4);
        
        setRepos(topRepos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        setError('Failed to load GitHub repositories. Please check back later.');
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  return (
    <div className="github-repos">
      <div className="repos-content">
        <h2>Pinned Repositories</h2>
        <div className="repos-grid">
          {loading ? (
            <div className="repo-loading">
              <div className="loading-spinner"></div>
              <p>Loading repositories...</p>
            </div>
          ) : error ? (
            <p className="repos-error">{error}</p>
          ) : (
            repos.map((repo, index) => (
              <div 
                className="repo-card" 
                key={repo.name}
                style={{ '--i': index + 1 } as React.CSSProperties}
              >
                <div className="repo-header">
                  <FontAwesomeIcon icon={faGithub} />
                  <h3>{repo.name}</h3>
                </div>
                <p className="repo-description">
                  {repo.description || 'No description available'}
                </p>
                <div className="repo-footer">
                  <span>
                    <FontAwesomeIcon icon={faCodeBranch} /> {repo.forks_count}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faStar} /> {repo.stargazers_count}
                  </span>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
                    View Project <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="github-profile-link">
          <a href="https://github.com/karutoil" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> View All Repositories
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHubRepos;