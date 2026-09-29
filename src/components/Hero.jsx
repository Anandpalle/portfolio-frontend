import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiCheckCircle, FiCode } from 'react-icons/fi';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-slate-100"
    >
      <div className="max-w-4xl mx-auto w-full text-center space-y-7">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Open to Full-Time Developer Roles & Internships</span>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <p className="text-blue-600 font-mono text-sm tracking-widest uppercase font-bold">
            Java Full Stack Developer
          </p>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Anand Reddy <span className="text-blue-600">Palle</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed pt-1">
            Specializing in scalable <strong className="text-slate-900 font-semibold">Spring Boot</strong> backends, 
            relational databases with <strong className="text-slate-900 font-semibold">PostgreSQL & MySQL</strong>, 
            and modern <strong className="text-slate-900 font-semibold">React</strong> interfaces.
          </p>
        </div>

        {/* Core Tech Stack Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {['Java 21', 'Spring Boot 3', 'REST APIs', 'Hibernate & JPA', 'PostgreSQL', 'MySQL', 'React 19', 'Docker'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center pt-2">
          <a
            href="#projects"
            className="px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>View Projects</span>
            <FiArrowDown />
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-all cursor-pointer"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 justify-center pt-3 text-slate-600">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Links:</span>
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:text-blue-600 hover:border-blue-300 transition-all shadow-xs"
              aria-label="GitHub"
            >
              <FiGithub className="text-lg" />
            </a>
          )}
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:text-blue-600 hover:border-blue-300 transition-all shadow-xs"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-lg" />
            </a>
          )}
          {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:text-blue-600 hover:border-blue-300 transition-all shadow-xs"
              aria-label="Email"
            >
              <FiMail className="text-lg" />
            </a>
          )}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-5xl mx-auto w-full mt-16 pt-8 border-t border-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item) => (
            <div
              key={item.label}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 mt-1 font-semibold">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}