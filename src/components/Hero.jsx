import { FiArrowDown, FiDownload, FiMail, FiGithub, FiLinkedin, FiLayers } from 'react-icons/fi';
import { SiSpringboot, SiReact, SiJavascript, SiMysql } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const techBadgeIcons = {
    Java: <FaJava className="text-orange-600 text-lg" />,
    'Spring Boot': <SiSpringboot className="text-emerald-600 text-lg" />,
    React: <SiReact className="text-cyan-600 text-lg" />,
    JavaScript: <SiJavascript className="text-amber-500 text-lg" />,
    MySQL: <SiMysql className="text-blue-600 text-lg" />,
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Subtle Ambient Light Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-100/50 blur-3xl rounded-full pointer-events-none -z-0" />
      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-indigo-50/60 blur-2xl rounded-full pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to Full-Stack Opportunities</span>
          </div>

          {/* Salutation & Role */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-mono text-slate-700">
              Hi, I'm <span className="font-extrabold text-black">{personalInfo.name}</span>
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight">
              Full-Stack <span className="text-blue-600">Java Developer</span>
            </h1>
          </div>

          {/* Headline */}
          <p className="text-lg sm:text-xl font-bold text-black leading-snug">
            "{personalInfo.headline}"
          </p>

          {/* Short Introduction */}
          <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            {personalInfo.shortIntro}
          </p>

          {/* Technology Badges */}
          <div className="pt-2">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">
              Primary Tech Stack
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {personalInfo.techBadges.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-all text-xs font-bold text-black"
                >
                  {techBadgeIcons[tech] || <FiLayers className="text-blue-600" />}
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons: View My Project, Download Resume, Contact Me */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
            <a
              href="#project"
              className="px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>View My Project</span>
              <FiArrowDown className="text-base" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="Anand_Reddy_Palle_Resume.pdf"
              className="px-6 py-3 text-sm font-bold text-black bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <FiDownload className="text-base text-blue-600" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-3 pt-3 text-slate-700">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              Profiles:
            </span>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-black hover:text-blue-600 hover:border-blue-400 transition-all shadow-xs"
              aria-label="GitHub Profile"
            >
              <FiGithub className="text-lg" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-black hover:text-blue-600 hover:border-blue-400 transition-all shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="text-lg" />
            </a>
            <a
              href={personalInfo.socials.email}
              className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-black hover:text-blue-600 hover:border-blue-400 transition-all shadow-xs"
              aria-label="Send Email"
            >
              <FiMail className="text-lg" />
            </a>
          </div>
        </div>

        {/* Right Column: Professional Profile Image */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Ambient Border Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-500" />
            
            {/* Card Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-white p-2 border border-slate-200 shadow-xl">
              <img
                src={personalInfo.profilePhoto}
                alt={personalInfo.name}
                className="w-64 sm:w-72 md:w-80 h-80 sm:h-92 md:h-96 object-cover rounded-xl group-hover:scale-[1.02] transition-all duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML += `
                    <div class="w-64 sm:w-72 md:w-80 h-80 sm:h-92 md:h-96 flex flex-col items-center justify-center bg-slate-100 text-slate-800 rounded-xl p-6 text-center">
                      <div class="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-3xl font-bold text-blue-600">AP</div>
                      <h3 class="font-extrabold text-lg text-black">${personalInfo.name}</h3>
                      <p class="text-xs text-slate-600 mt-1">${personalInfo.role}</p>
                    </div>
                  `;
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 p-3 rounded-lg text-left shadow-sm">
                <p className="text-xs font-mono text-blue-600 font-bold">Specialization</p>
                <p className="text-xs text-black font-bold">Java • Spring Boot • React • MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}