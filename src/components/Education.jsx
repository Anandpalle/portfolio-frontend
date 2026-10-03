import { FiBookOpen, FiMapPin, FiCalendar, FiAward } from 'react-icons/fi';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-widest font-bold">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Formal engineering degree and foundational academic achievements.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {item.degree}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  {item.institution}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <FiMapPin className="text-slate-400" />
                    <span>{item.location}</span>
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <FiCalendar className="text-slate-400" />
                    <span>{item.year}</span>
                  </span>
                </div>
              </div>

              <div className="sm:text-right shrink-0">
                <div className="inline-flex sm:flex sm:flex-col items-center sm:items-end gap-1 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Score</span>
                  <span className="text-sm sm:text-base font-bold font-mono text-blue-600 dark:text-blue-400">
                    {item.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
