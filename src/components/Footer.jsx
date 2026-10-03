import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8 text-slate-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding */}
        <div className="text-center md:text-left space-y-1">
          <div className="text-black font-bold text-lg tracking-tight">
            {personalInfo.name}{' '}
            <span className="text-blue-600 font-mono text-xs font-bold">
              — {personalInfo.role}
            </span>
          </div>
          <p className="text-xs text-slate-600 font-normal">
            Architected with Spring Boot, Spring Data JPA, MySQL, React & Tailwind CSS.
          </p>
        </div>

        {/* Center: Navigation */}
        <ul className="flex flex-wrap justify-center gap-5 text-xs font-bold text-slate-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Social & Back to Top */}
        <div className="flex items-center gap-2">
          {personalInfo.socials.github && (
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-50 hover:text-blue-600 border border-slate-200 transition text-black"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
          )}
          {personalInfo.socials.linkedin && (
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-50 hover:text-blue-600 border border-slate-200 transition text-black"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          )}
          {personalInfo.socials.email && (
            <a
              href={personalInfo.socials.email}
              className="p-2 rounded-lg bg-slate-50 hover:text-blue-600 border border-slate-200 transition text-black"
              aria-label="Email"
            >
              <FiMail />
            </a>
          )}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-50 hover:text-blue-600 border border-slate-200 transition cursor-pointer text-black"
            aria-label="Back to Top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}