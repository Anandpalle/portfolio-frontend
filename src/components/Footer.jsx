import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8 text-slate-600">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding */}
        <div className="text-center md:text-left space-y-1">
          <div className="text-slate-900 font-bold text-lg tracking-tight">
            {personalInfo.name}{' '}
            <span className="text-blue-600 font-mono text-sm font-semibold">
              — {personalInfo.role}
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Engineered with Spring Boot 3, PostgreSQL, Docker, React & Tailwind CSS.
          </p>
        </div>

        {/* Center: Navigation */}
        <ul className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-600">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-600 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Social & Back to Top */}
        <div className="flex items-center gap-3">
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white hover:text-blue-600 border border-slate-200 shadow-2xs transition"
              title="GitHub"
            >
              <FiGithub />
            </a>
          )}
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white hover:text-blue-600 border border-slate-200 shadow-2xs transition"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
          )}
          {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-white hover:text-blue-600 border border-slate-200 shadow-2xs transition"
              title="Email"
            >
              <FiMail />
            </a>
          )}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-white hover:text-blue-600 hover:border-blue-300 border border-slate-200 shadow-2xs transition cursor-pointer"
            title="Back to Top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-200 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}