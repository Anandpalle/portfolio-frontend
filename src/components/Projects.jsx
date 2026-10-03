import { useState } from 'react';
import {
  FiGithub,
  FiExternalLink,
  FiFileText,
  FiX,
  FiCheckCircle,
  FiLayers,
  FiShield,
  FiUsers,
  FiTool,
  FiMaximize2,
  FiMonitor,
} from 'react-icons/fi';
import { mechanicBuddyData } from '../data/portfolioData';

export default function Projects() {
  const [selectedRole, setSelectedRole] = useState('user');
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);

  const activeRoleData = mechanicBuddyData.roles.find((r) => r.id === selectedRole) || mechanicBuddyData.roles[0];

  return (
    <section
      id="project"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200 transition-colors duration-300 relative"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-widest uppercase">
            Featured Full-Stack Project
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight">
            {mechanicBuddyData.title}
          </h2>
          <p className="text-lg font-semibold text-blue-600">
            {mechanicBuddyData.tagline}
          </p>
          <p className="text-slate-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            {mechanicBuddyData.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {mechanicBuddyData.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white text-black border border-slate-200 shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <a
              href={mechanicBuddyData.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
            >
              <FiGithub className="text-base" />
              <span>View Source Code</span>
            </a>
            <a
              href="#project"
              onClick={(e) => {
                e.preventDefault();
                setIsCaseStudyOpen(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-md shadow-blue-600/20 cursor-pointer"
            >
              <FiFileText className="text-base" />
              <span>View Case Study</span>
            </a>
          </div>
        </div>

        {/* 1. PROJECT ARCHITECTURE: 3 MAIN ROLES */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-2xl font-bold text-black">
              Multi-Role Platform Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Select a persona to explore dedicated capabilities and privilege boundaries.
            </p>
          </div>

          {/* Role Tabs */}
          <div className="flex justify-center gap-3">
            {mechanicBuddyData.roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  selectedRole === role.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 ring-2 ring-blue-500/30'
                    : 'bg-white text-black border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {role.id === 'admin' && <FiShield />}
                {role.id === 'user' && <FiUsers />}
                {role.id === 'mechanic' && <FiTool />}
                <span>{role.name}</span>
              </button>
            ))}
          </div>

          {/* Active Role Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-200 gap-2">
              <div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
                  {activeRoleData.badge}
                </span>
                <h4 className="text-xl font-bold text-black mt-2">
                  {activeRoleData.name} Workspace
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 max-w-md">
                {activeRoleData.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {activeRoleData.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <FiCheckCircle className="text-emerald-600 text-base shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-black">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. PROJECT FEATURES (13 Features) */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-2xl font-bold text-black">
              Core Platform Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              End-to-end functionality engineered for reliability and scalability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mechanicBuddyData.features.map((feat) => (
              <div
                key={feat.title}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                  <FiLayers className="text-base" />
                </div>
                <h4 className="text-sm font-semibold text-black mb-1">
                  {feat.title}
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. PROJECT WORKFLOW (10-Step Interactive Workflow) */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-2xl font-bold text-black">
              End-to-End Service Workflow
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              From breakdown report to verified mechanic completion and customer rating.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {mechanicBuddyData.workflow.map((item, idx) => (
              <div
                key={item.step}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs relative flex flex-col justify-between hover:border-blue-400 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-blue-700 px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                      {item.step}
                    </span>
                    {idx < mechanicBuddyData.workflow.length - 1 && (
                      <span className="text-slate-400 text-xs hidden lg:inline font-bold">→</span>
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-black mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SYSTEM ARCHITECTURE DIAGRAM */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-2xl font-bold text-black">
              Layered System Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Multi-tiered clean architecture from React client layers down to relational persistence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            {/* Top Personas */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
                <FiShield className="text-purple-700 mx-auto text-lg mb-1" />
                <span className="text-xs font-bold text-purple-900">Admin</span>
              </div>
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                <FiUsers className="text-blue-700 mx-auto text-lg mb-1" />
                <span className="text-xs font-bold text-blue-900">User</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                <FiTool className="text-amber-700 mx-auto text-lg mb-1" />
                <span className="text-xs font-bold text-amber-900">Mechanic</span>
              </div>
            </div>

            <div className="text-center text-slate-500 font-mono text-sm font-bold">↓ Connects To ↓</div>

            {/* Architectural Flow Stack */}
            <div className="space-y-3">
              {mechanicBuddyData.architectureLayers.map((layer, idx) => (
                <div
                  key={layer.name}
                  className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      L{idx + 1}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-black">
                        {layer.name}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-700 font-medium sm:text-right">
                    {layer.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. PROJECT SCREENSHOT GALLERY (9 Interfaces) */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-2xl font-bold text-black">
              Application Interfaces & Views
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Interactive preview gallery of all 9 core interfaces. Click any view for full preview.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mechanicBuddyData.screenshots.map((screen) => (
              <div
                key={screen.title}
                onClick={() => setSelectedScreenshot(screen)}
                className="group cursor-pointer rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Header / Mockup Preview */}
                <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 p-4 relative flex flex-col justify-between overflow-hidden border-b border-slate-200">
                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-600 text-white shadow-xs">
                      {screen.badge}
                    </span>
                    <span className="text-slate-500 group-hover:text-black transition-colors">
                      <FiMaximize2 className="text-sm" />
                    </span>
                  </div>

                  {/* Clean Wireframe UI Illustration */}
                  <div className="space-y-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="h-2 w-24 bg-slate-300 rounded" />
                    <div className="h-4 w-40 bg-slate-400 rounded" />
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="h-10 bg-white border border-slate-300 rounded" />
                      <div className="h-10 bg-white border border-slate-300 rounded" />
                      <div className="h-10 bg-white border border-slate-300 rounded" />
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 space-y-1">
                  <h4 className="text-sm font-bold text-black group-hover:text-blue-600 transition-colors">
                    {screen.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-snug">
                    {screen.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CASE STUDY MODAL */}
      {isCaseStudyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 relative text-black">
            <button
              onClick={() => setIsCaseStudyOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-500 hover:text-black bg-slate-100 cursor-pointer"
              aria-label="Close Case Study"
            >
              <FiX className="text-xl" />
            </button>

            <div>
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">
                Comprehensive Case Study
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mt-1">
                Mechanic Buddy — Engineering Deep Dive
              </h3>
            </div>

            {/* Problem & Solution */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 space-y-1.5">
                <h4 className="text-sm font-bold text-red-900">The Problem</h4>
                <p className="text-xs text-slate-800 leading-relaxed font-normal">
                  {mechanicBuddyData.caseStudy.problem}
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                <h4 className="text-sm font-bold text-emerald-900">The Solution</h4>
                <p className="text-xs text-slate-800 leading-relaxed font-normal">
                  {mechanicBuddyData.caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Tech & Architectures */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  Backend Architecture (Spring Boot & REST API)
                </h4>
                <p className="text-xs text-slate-800 leading-relaxed">
                  {mechanicBuddyData.caseStudy.backendArchitecture}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  Frontend Architecture (React.js Component Design)
                </h4>
                <p className="text-xs text-slate-800 leading-relaxed">
                  {mechanicBuddyData.caseStudy.frontendArchitecture}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  Database Persistence (MySQL Relational Schema)
                </h4>
                <p className="text-xs text-slate-800 leading-relaxed">
                  {mechanicBuddyData.caseStudy.databaseArchitecture}
                </p>
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-black">
                Technical Challenges & Implemented Solutions
              </h4>
              <div className="space-y-2.5">
                {mechanicBuddyData.caseStudy.challenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1"
                  >
                    <p className="text-xs font-bold text-blue-700">
                      Challenge: {item.challenge}
                    </p>
                    <p className="text-xs text-slate-700">
                      Solution: {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-1">
              <h4 className="text-sm font-bold text-blue-900">Project Results & Usability</h4>
              <p className="text-xs text-slate-800 leading-relaxed">
                {mechanicBuddyData.caseStudy.results}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SCREENSHOT LIGHTBOX MODAL */}
      {selectedScreenshot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 space-y-4 relative text-black">
            <button
              onClick={() => setSelectedScreenshot(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-black bg-slate-100 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <FiX className="text-xl" />
            </button>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-600 text-white">
                {selectedScreenshot.badge}
              </span>
              <h3 className="text-lg font-bold text-black">
                {selectedScreenshot.title}
              </h3>
            </div>

            {/* Mock Visual Presentation */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-8 min-h-[220px] flex flex-col justify-center items-center text-center space-y-3">
              <FiMonitor className="text-4xl text-blue-600" />
              <div className="space-y-1 max-w-md">
                <p className="text-sm font-bold text-black">{selectedScreenshot.title}</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedScreenshot.description}
                </p>
              </div>
              <div className="pt-2 text-[11px] font-mono text-slate-500 font-bold">
                Responsive Viewport • Role Authenticated Session
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-black text-xs font-bold cursor-pointer border border-slate-300"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}