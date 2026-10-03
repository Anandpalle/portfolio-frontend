import { FiDownload, FiEye, FiFileText, FiCheckCircle } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/40 dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-6 shadow-sm">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold uppercase tracking-widest">
            Curriculum Vitae
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Download My Resume
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Review my verified qualifications, Java & Spring Boot technical capabilities, relational database design skills, and full-stack project implementations.
            </p>
          </div>

          {/* Quick PDF Specs Card */}
          <div className="max-w-md mx-auto p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center text-xl shrink-0">
                <FiFileText />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900 dark:text-white">
                  Anand_Reddy_Palle_Resume.pdf
                </p>
                <p className="text-[11px] text-slate-500 font-mono">
                  Full-Stack Java Developer • Verified PDF
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
              Ready
            </span>
          </div>

          {/* Action Buttons: View Resume & Download Resume */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-sm font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
            >
              <FiEye className="text-base" />
              <span>View Resume</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="Anand_Reddy_Palle_Resume.pdf"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all flex items-center gap-2 shadow-md shadow-blue-500/20"
            >
              <FiDownload className="text-base" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
