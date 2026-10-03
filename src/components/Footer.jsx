import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks } from 'react-icons/si';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8 text-slate-600 dark:text-slate-400 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding */}
        <div className="text-center md:text-left space-y-1">
          <div className="text-slate-900 dark:text-white font-bold text-lg tracking-tight">
            {personalInfo.name}{' '}
            <span className="text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold">
              — {personalInfo.role}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Architected with Spring Boot, Spring Data JPA, MySQL, React & Tailwind CSS.
          </p>
        </div>

        {/* Center: Navigation */}
        <ul className="flex flex-wrap justify-center gap-5 text-xs font-semibold text-slate-600 dark:text-slate-400">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
              className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 transition"
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
              className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 transition"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          )}
          {personalInfo.socials.leetcode && (
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:text-amber-500 border border-slate-200 dark:border-slate-800 transition"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
          )}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 transition cursor-pointer"
            aria-label="Back to Top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 text-center text-xs text-slate-500 dark:text-slate-500">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}