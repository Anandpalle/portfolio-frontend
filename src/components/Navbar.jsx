import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiCode, FiArrowUpRight } from 'react-icons/fi';
import { navLinks, personalInfo } from '../data/portfolioData';
import { checkHealth } from '../services/api';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBackendOnline, setIsBackendOnline] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    
    // Check backend health
    checkHealth().then((status) => setIsBackendOnline(status));

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20 group-hover:bg-blue-700 transition">
            <FiCode className="text-xl" />
          </div>
          <div>
            <div className="font-bold text-lg text-slate-900 tracking-tight flex items-center gap-1">
              <span>{personalInfo.name.split(' ')[0]}</span>
              <span className="text-blue-600">.dev</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
              <span
                className={`w-2 h-2 rounded-full ${
                  isBackendOnline === true
                    ? 'bg-emerald-500'
                    : isBackendOnline === false
                    ? 'bg-amber-500'
                    : 'bg-slate-400'
                }`}
              />
              <span>{isBackendOnline ? 'Backend Online' : 'Cloud Ready'}</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5"
          >
            <span>Get in Touch</span>
            <FiArrowUpRight className="text-base" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-slate-700 hover:text-slate-950 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-semibold text-slate-700 hover:text-blue-600 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}