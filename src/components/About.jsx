import { FiMapPin, FiMail, FiAward, FiCheck } from 'react-icons/fi';
import { personalInfo, aboutMe, education } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">
            Background & Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            My background, technical strengths, and educational milestones.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Core Strengths */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                Professional Summary
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {aboutMe.summary}
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-mono text-slate-500 font-semibold tracking-wider">
                  Key Capabilities
                </h4>
                {aboutMe.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-100">
                      <FiCheck className="text-xs" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Contact Snapshot */}
              <div className="pt-4 border-t border-slate-100 grid sm:grid-cols-3 gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-blue-600 text-base" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 sm:col-span-2">
                  <FiMail className="text-blue-600 text-base flex-shrink-0" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-blue-600 transition truncate"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div id="education" className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FiAward className="text-blue-600" />
                Education Journey
              </h3>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                Academics
              </span>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 group shadow-xs hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-medium">{edu.year}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {edu.degree}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    {edu.institution}, {edu.location}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Performance:</span>
                    <span className="font-bold text-emerald-600">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}