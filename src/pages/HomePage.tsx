import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Cybersecurity } from '../components/Cybersecurity';
import { PersonalInterests } from '../components/PersonalInterests';
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
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Cybersecurity darkMode={darkMode} />
      <PersonalInterests darkMode={darkMode} />
      <HomeBlogSection darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </>
  );
};
