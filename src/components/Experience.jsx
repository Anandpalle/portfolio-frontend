import { FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">
            Professional Trajectory
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-normal">
            Professional readiness, production-standard software engineering practices, and career positioning.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-200 gap-2">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{item.status}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-black pt-1">
                    {item.role}
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 self-start sm:self-center shadow-2xs">
                  {item.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5 font-normal">
                {item.desc}
              </p>

              <div className="space-y-2.5">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Engineering Highlights:
                </p>
                {item.highlights.map((point, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-blue-600 text-base shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-black">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
