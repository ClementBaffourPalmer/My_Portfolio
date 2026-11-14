import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Cybersecurity } from './components/Cybersecurity';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('cp_theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default to deep charcoal dark mode as requested
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('cp_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('cp_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-electric selection:text-white ${
        darkMode ? 'bg-charcoal text-white' : 'bg-light-bg text-charcoal'
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main id="main-content">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Cybersecurity darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
