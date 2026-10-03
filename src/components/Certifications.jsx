import { FiAward, FiExternalLink } from 'react-icons/fi';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">
            Verified Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Certifications
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-normal">
            Professional credentials in full-stack Java development, relational databases, and enterprise REST APIs.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <FiAward className="text-xl" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-bold">
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-black leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-bold text-blue-700">
                    {cert.organization}
                  </p>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200 flex items-center justify-between">
                <div className="text-[11px] font-mono text-slate-600">
                  ID: <span className="text-black font-bold">{cert.credentialId}</span>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
                >
                  <span>Verify</span>
                  <FiExternalLink className="text-[11px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
