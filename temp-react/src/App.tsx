import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import GitHubRepos from './components/GitHubRepos';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Set up global GSAP animations or effects here if needed
  }, []);

  return (
    <div className="App">
      <main>
        <Hero />
        <About />
        <GitHubRepos />
      </main>
      <Footer />
    </div>
  );
}

export default App;
