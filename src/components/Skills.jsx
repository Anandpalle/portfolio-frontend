import { useState } from 'react';
import { FiLayers, FiDatabase, FiLayout, FiTool } from 'react-icons/fi';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [
    <FiLayers className="text-lg" />,
    <FiDatabase className="text-lg" />,
    <FiLayout className="text-lg" />,
    <FiTool className="text-lg" />,
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">
            Technical Stack
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Skills & <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Technologies and frameworks I utilize to architect and deliver full-stack systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 cursor-pointer ${
                activeTab === idx
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {icons[idx]}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {skillCategories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all duration-300 flex items-center justify-between group shadow-2xs hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 group-hover:scale-125 transition" />
                <span className="text-sm font-semibold text-slate-800 group-hover:text-slate-950 transition">
                  {skill.name}
                </span>
              </div>
              <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-white text-blue-700 border border-slate-200">
                {skill.level}
              </span>
            </div>
          ))}
        </div>

        {/* All skills quick snapshot badges */}
        <div className="mt-16 pt-10 border-t border-slate-200 max-w-5xl mx-auto text-center">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-6">
            Core Technology Snapshot
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              'Java 21',
              'Spring Boot 3',
              'Spring Data JPA',
              'Hibernate',
              'RESTful APIs',
              'PostgreSQL',
              'MySQL 8',
              'Docker',
              'Render Cloud',
              'React 19',
              'Tailwind CSS',
              'Maven',
              'Git & GitHub',
            ].map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}