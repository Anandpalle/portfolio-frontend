import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiCode, FiArrowUpRight, FiSun, FiMoon } from 'react-icons/fi';
import { navLinks, personalInfo } from '../data/portfolioData';
import { checkHealth } from '../services/api';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isBackendOnline, setIsBackendOnline] = useState(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    checkHealth().then((status) => setIsBackendOnline(status));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <FiCode className="text-lg" />
          </div>
          <div>
            <div className="font-bold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight flex items-center gap-1">
              <span>{personalInfo.name}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-slate-500 dark:text-slate-400">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isBackendOnline === true
                    ? 'bg-emerald-500 animate-pulse'
                    : isBackendOnline === false
                    ? 'bg-amber-500'
                    : 'bg-slate-400'
                }`}
              />
              <span>{isBackendOnline ? 'Spring Boot Active' : 'Cloud Connected'}</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Action Bar */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <FiSun className="text-lg text-amber-400" />
            ) : (
              <FiMoon className="text-lg text-slate-700" />
            )}
          </button>

          {/* Quick CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all items-center gap-1.5"
          >
            <span>Let's Talk</span>
            <FiArrowUpRight className="text-sm" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}