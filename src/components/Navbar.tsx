import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isBlog = location.pathname.startsWith('/blog');

  const navLinks = [
    { name: 'Home', section: 'home', path: '/' },
    { name: 'About', section: 'about', path: '/#about' },
    { name: 'Projects', section: 'projects', path: '/#projects' },
    { name: 'Experience', section: 'experience', path: '/#experience' },
    { name: 'Blog', section: 'blog', path: '/blog' },
    { name: 'Contact', section: 'contact', path: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isHomePage) {
        const sections = ['home', 'about', 'projects', 'experience', 'blog-preview', 'contact'];
        const scrollPosition = window.scrollY + 140;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const top = section.offsetTop;
            if (scrollPosition >= top) {
              setActiveSection(sections[i] === 'blog-preview' ? 'blog' : sections[i]);
              break;
            }
          }
        }
      } else if (isBlog) {
        setActiveSection('blog');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, isBlog]);

  const handleNavClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    setIsOpen(false);

    if (link.section === 'blog') {
      navigate('/blog');
      return;
    }

    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(link.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(link.section);
      }
    } else {
      // Navigate to homepage with anchor
      navigate(`/#${link.section}`);
      setTimeout(() => {
        const element = document.getElementById(link.section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? darkMode
            ? 'bg-charcoal/90 backdrop-blur-md border-b border-panel-border/80 py-3 shadow-lg'
            : 'bg-white/90 backdrop-blur-md border-b border-light-border/80 py-3 shadow-sm'
          : darkMode
            ? 'bg-transparent py-5'
            : 'bg-white/80 backdrop-blur-md border-b border-light-border/50 py-3.5 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram with subtle hover micro-interaction */}
          <Link
            to="/"
            className="flex items-center space-x-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded"
            aria-label="Clement Palmer Home"
          >
            <div className="w-10 h-10 rounded-lg bg-panel border border-panel-border flex items-center justify-center font-bold text-lg tracking-tight transition-all duration-300 group-hover:scale-105 group-hover:rotate-2 shadow-sm">
              <span className={darkMode ? 'text-white' : 'text-charcoal'}>C</span>
              <span className="text-electric">P</span>
              <span className="text-electric text-xs -ml-0.5 transition-transform duration-300 group-hover:translate-x-0.5">.</span>
            </div>
            <div className="hidden sm:block text-left">
              <span className={`block text-sm font-semibold tracking-tight transition-colors ${
                darkMode ? 'text-white group-hover:text-electric' : 'text-charcoal group-hover:text-electric'
              }`}>
                {personalInfo.displayName}
              </span>
              <span className="block text-[11px] font-mono text-muted tracking-wider uppercase">
                {isBlog ? 'Journal & Essays' : 'Software Engineer'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = (isHomePage && activeSection === link.section) || (isBlog && link.section === 'blog');
              return (
                <button
                  key={link.name}
                  onClick={(e) => handleNavClick(link, e)}
                  className={`px-2.5 lg:px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? darkMode
                        ? 'text-white bg-panel border border-panel-border font-semibold shadow-xs'
                        : 'text-charcoal bg-light-subtle border border-light-border font-semibold shadow-xs'
                      : darkMode
                      ? 'text-neutral-400 hover:text-white hover:bg-panel/50'
                      : 'text-neutral-700 hover:text-charcoal hover:bg-light-subtle/80'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Action Area: Theme Toggle & CV Download */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric ${
                darkMode
                  ? 'bg-panel border-panel-border text-neutral-300 hover:text-white hover:border-neutral-500'
                  : 'bg-light-subtle border-light-border text-neutral-700 hover:text-charcoal hover:border-neutral-400 shadow-xs'
              }`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-charcoal" />}
            </button>

            <a
              href={personalInfo.cvPath}
              download="Clement_Palmer_CV.pdf"
              className="hidden lg:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-electric hover:bg-electric-hover text-white transition-all duration-200 shadow-sm hover:shadow-blue-glow transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Download CV</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg border transition-colors ${
                darkMode
                  ? 'bg-panel border-panel-border text-white'
                  : 'bg-light-subtle border-light-border text-charcoal'
              }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          className={`md:hidden border-b px-4 pt-3 pb-6 space-y-2 transition-all ${
            darkMode
              ? 'bg-charcoal/95 border-panel-border backdrop-blur-md'
              : 'bg-white/95 border-light-border backdrop-blur-md'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = (isHomePage && activeSection === link.section) || (isBlog && link.section === 'blog');
            return (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(link, e)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? darkMode
                      ? 'bg-panel text-electric font-semibold border border-panel-border'
                      : 'bg-light-subtle text-electric font-semibold border border-light-border'
                    : darkMode
                    ? 'text-neutral-300 hover:text-white hover:bg-panel/50'
                    : 'text-neutral-700 hover:text-charcoal hover:bg-light-subtle'
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <div className="pt-3 border-t border-panel-border/50">
            <a
              href={personalInfo.cvPath}
              download="Clement_Palmer_CV.pdf"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-electric hover:bg-electric-hover text-white transition-colors"
            >
              <span>Download Full CV (PDF)</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
