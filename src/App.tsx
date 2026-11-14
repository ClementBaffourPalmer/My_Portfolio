import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';

const AppContent: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('cp_theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default to deep charcoal dark mode
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
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
          <Route path="/blog" element={<BlogPage darkMode={darkMode} />} />
          <Route path="/blog/:slug" element={<BlogPostPage darkMode={darkMode} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
