import { FiMapPin, FiCalendar } from 'react-icons/fi';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Education
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-normal">
            Formal engineering degree and foundational academic achievements.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-black">
                  {item.degree}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  {item.institution}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-600 pt-1">
                  <span className="flex items-center gap-1">
                    <FiMapPin className="text-slate-500" />
                    <span>{item.location}</span>
                  </span>
                  <span className="flex items-center gap-1 font-mono font-medium">
                    <FiCalendar className="text-slate-500" />
                    <span>{item.year}</span>
                  </span>
                </div>
              </div>

              <div className="sm:text-right shrink-0">
                <div className="inline-flex sm:flex sm:flex-col items-center sm:items-end gap-1 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <span className="text-xs text-slate-500 font-mono uppercase tracking-wider font-bold">Score</span>
                  <span className="text-sm sm:text-base font-black font-mono text-blue-700">
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
