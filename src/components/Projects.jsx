import { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiFolder, FiCheckCircle } from 'react-icons/fi';
import { defaultProjects } from '../data/portfolioData';
import { getProjects } from '../services/api';

export default function Projects() {
  const [projectList, setProjectList] = useState(defaultProjects);
  const [isFromBackend, setIsFromBackend] = useState(false);

  useEffect(() => {
    getProjects().then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        const mapped = data.map((p, idx) => ({
          id: p.id || idx,
          title: p.title,
          description: p.description,
          tech: p.technologies ? p.technologies.split(',').map((t) => t.trim()) : ['Java', 'Spring Boot'],
          github: p.link || 'https://github.com/Anandpalle',
          live: '',
          metrics: 'PostgreSQL Live Record',
        }));
        setProjectList(mapped);
        setIsFromBackend(true);
      }
    });
  }, []);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">
              Engineering Work
            </span>
            {isFromBackend && (
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Synced with PostgreSQL
              </span>
            )}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            End-to-end full-stack applications with Spring Boot, SQL databases, and modern interfaces.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectList.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl bg-white border border-slate-200 hover:border-blue-400 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Card Top */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                    <FiFolder className="text-2xl" />
                  </div>

                  <div className="flex items-center gap-2 text-slate-500">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600 transition text-lg p-2 rounded-lg hover:bg-slate-100"
                        title="View Source Code"
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600 transition text-lg p-2 rounded-lg hover:bg-slate-100"
                        title="Live Preview"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key feature / metric */}
                {project.metrics && (
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                    <FiCheckCircle className="text-xs" />
                    <span>{project.metrics}</span>
                  </div>
                )}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {t}
                    </span>
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