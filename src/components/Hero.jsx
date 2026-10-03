import { FiArrowDown, FiDownload, FiMail, FiGithub, FiLinkedin, FiLayers } from 'react-icons/fi';
import { SiSpringboot, SiReact, SiJavascript, SiMysql } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const techBadgeIcons = {
    Java: <FaJava className="text-orange-500 text-lg" />,
    'Spring Boot': <SiSpringboot className="text-emerald-500 text-lg" />,
    React: <SiReact className="text-cyan-400 text-lg" />,
    JavaScript: <SiJavascript className="text-yellow-400 text-lg" />,
    MySQL: <SiMysql className="text-blue-500 text-lg" />,
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl rounded-full pointer-events-none -z-0" />
      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 blur-2xl rounded-full pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to Full-Stack Opportunities</span>
          </div>

          {/* Salutation & Role */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-mono text-slate-700 dark:text-slate-300">
              Hi, I'm <span className="font-bold text-slate-900 dark:text-white">{personalInfo.name}</span>
            </h2>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 tracking-tight">
              {personalInfo.role}
            </h1>
          </div>

          {/* Headline */}
          <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-snug">
            "{personalInfo.headline}"
          </p>

          {/* Short Introduction */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {personalInfo.shortIntro}
          </p>

          {/* Technology Badges */}
          <div className="pt-2">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-semibold">
              Primary Tech Stack
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {personalInfo.techBadges.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-blue-500/50 transition-all text-xs font-semibold text-slate-800 dark:text-slate-200"
                >
                  {techBadgeIcons[tech] || <FiLayers className="text-blue-500" />}
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons: View My Project, Download Resume, Contact Me */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
            <a
              href="#project"
              className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-600/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>View My Project</span>
              <FiArrowDown className="text-base" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="Anand_Reddy_Palle_Resume.pdf"
              className="px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <FiDownload className="text-base text-blue-500" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-blue-200 dark:border-blue-800/60 rounded-xl transition-all cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-3 pt-3 text-slate-600 dark:text-slate-400">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Profiles:
            </span>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-all shadow-xs"
              aria-label="GitHub Profile"
            >
              <FiGithub className="text-lg" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-all shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="text-lg" />
            </a>
            <a
              href={personalInfo.socials.email}
              className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-all shadow-xs"
              aria-label="Send Email"
            >
              <FiMail className="text-lg" />
            </a>
          </div>
        </div>

        {/* Right Column: Professional Profile Image */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-700" />
            
            {/* Card Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 p-2 border border-slate-200/20 dark:border-slate-700/60 shadow-2xl">
              <img
                src={personalInfo.profilePhoto}
                alt={personalInfo.name}
                className="w-64 sm:w-72 md:w-80 h-80 sm:h-92 md:h-96 object-cover rounded-xl grayscale-15 contrast-105 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML += `
                    <div class="w-64 sm:w-72 md:w-80 h-80 sm:h-92 md:h-96 flex flex-col items-center justify-center bg-slate-800 text-slate-300 rounded-xl p-6 text-center">
                      <div class="w-20 h-20 rounded-full bg-blue-600/30 flex items-center justify-center mb-4 text-3xl font-bold text-blue-400">AP</div>
                      <h3 class="font-bold text-lg text-white">${personalInfo.name}</h3>
                      <p class="text-xs text-slate-400 mt-1">${personalInfo.role}</p>
                    </div>
                  `;
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-700/50 p-3 rounded-lg text-left">
                <p className="text-xs font-mono text-blue-400 font-semibold">Specialization</p>
                <p className="text-xs text-slate-200 font-medium">Java • Spring Boot • React • MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}