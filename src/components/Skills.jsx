import { FaJava, FaCss3Alt } from 'react-icons/fa';
import {
  SiJavascript,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiIntellijidea,
} from 'react-icons/si';
import { FiLayers, FiServer, FiCode, FiTerminal } from 'react-icons/fi';
import { technicalSkills } from '../data/portfolioData';

export default function Skills() {
  const getSkillIcon = (name) => {
    switch (name) {
      case 'Java':
        return <FaJava className="text-orange-600 text-lg" />;
      case 'JavaScript':
        return <SiJavascript className="text-amber-500 text-lg" />;
      case 'HTML5':
        return <SiHtml5 className="text-orange-600 text-lg" />;
      case 'CSS3':
        return <FaCss3Alt className="text-blue-600 text-lg" />;
      case 'React.js':
        return <SiReact className="text-cyan-600 text-lg" />;
      case 'Tailwind CSS':
        return <SiTailwindcss className="text-cyan-500 text-lg" />;
      case 'Spring Boot':
        return <SiSpringboot className="text-emerald-600 text-lg" />;
      case 'Spring Data JPA':
        return <FiLayers className="text-emerald-500 text-lg" />;
      case 'REST API':
        return <FiServer className="text-blue-600 text-lg" />;
      case 'J2EE':
        return <FaJava className="text-red-600 text-lg" />;
      case 'MySQL':
        return <SiMysql className="text-blue-600 text-lg" />;
      case 'Git':
        return <SiGit className="text-orange-600 text-lg" />;
      case 'GitHub':
        return <SiGithub className="text-black text-lg" />;
      case 'Postman':
        return <SiPostman className="text-orange-600 text-lg" />;
      case 'VS Code':
        return <FiCode className="text-blue-600 text-lg" />;
      case 'IntelliJ IDEA':
        return <SiIntellijidea className="text-purple-600 text-lg" />;
      default:
        return <FiTerminal className="text-slate-600 text-lg" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">
            Technical Proficiency
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Categorized Core Competencies
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-normal">
            Structured full-stack skills spanning modern frontend development, backend Java architectures, database engineering, and developer toolchains.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl bg-slate-50 border border-slate-200 p-6 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                  <h3 className="text-base font-semibold text-black flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <span>{cat.category}</span>
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200 font-bold">
                    {cat.skills.length} items
                  </span>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2.5">
                          <div className="shrink-0">{getSkillIcon(skill.name)}</div>
                          <span className="text-sm font-bold text-black">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 pl-7 leading-normal">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}