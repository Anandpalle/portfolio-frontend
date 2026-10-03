import { FiServer, FiLayout, FiDatabase, FiCpu } from 'react-icons/fi';
import { aboutMe, stats } from '../data/portfolioData';

export default function About() {
  const iconMap = [
    <FiServer className="text-xl text-blue-600" />,
    <FiLayout className="text-xl text-cyan-600" />,
    <FiDatabase className="text-xl text-emerald-600" />,
    <FiCpu className="text-xl text-indigo-600" />,
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Engineering Purposeful Full-Stack Solutions
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
            {aboutMe.intro}
          </p>
        </div>

        {/* 4 Technical Pillars */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {aboutMe.points.map((point, idx) => (
            <div
              key={point.title}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  {iconMap[idx % iconMap.length]}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-black flex items-center gap-2">
                    <span>{point.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stat Cards: Full-Stack Project, Technologies Used, REST APIs, Database */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item) => (
            <div
              key={item.label}
              className="p-5 rounded-2xl bg-white border border-slate-200 text-center relative overflow-hidden shadow-xs hover:border-blue-400 hover:shadow-sm transition-all"
            >
              <div className="text-2xl sm:text-3xl font-black text-blue-600 font-mono">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-black mt-1">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-600 mt-0.5">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}