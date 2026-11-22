import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { HomeBlogSection } from '../components/HomeBlogSection';
import { Contact } from '../components/Contact';

interface HomePageProps {
  darkMode: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({ darkMode }) => {
  useEffect(() => {
    document.title = "Clement Palmer | Full-Stack Developer & Software Engineer";
  }, []);

  return (
    <>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <HomeBlogSection darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </>
  );
};
