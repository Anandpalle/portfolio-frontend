import { FiDownload, FiEye, FiFileText } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center space-y-6 shadow-sm">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest">
            Curriculum Vitae
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
              Download My Resume
            </h2>
            <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed font-normal">
              Review my verified qualifications, Java & Spring Boot technical capabilities, relational database design skills, and full-stack project implementations.
            </p>
          </div>

          {/* Quick PDF Specs Card */}
          <div className="max-w-md mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center text-xl shrink-0">
                <FiFileText />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-black">
                  Anand_Reddy_Palle_Resume.pdf
                </p>
                <p className="text-[11px] text-slate-600 font-mono">
                  Full-Stack Java Developer • Verified PDF
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded">
              Ready
            </span>
          </div>

          {/* Action Buttons: View Resume & Download Resume */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-black border border-slate-300 text-sm font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <FiEye className="text-base text-blue-600" />
              <span>View Resume</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="Anand_Reddy_Palle_Resume.pdf"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-all flex items-center gap-2 shadow-md shadow-blue-600/20 cursor-pointer"
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
