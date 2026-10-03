import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function SocialProfiles() {
  const profileItems = [
    {
      name: 'GitHub',
      handle: 'Anandpalle',
      desc: 'Source code repositories, full-stack architectures, commits, and collaborative contributions.',
      url: personalInfo.socials.github,
      icon: <FiGithub className="text-2xl text-black" />,
      tag: 'Code Repositories',
    },
    {
      name: 'LinkedIn',
      handle: 'anand-reddy-palle',
      desc: 'Professional engineering network, technical credentials, and career updates.',
      url: personalInfo.socials.linkedin,
      icon: <FiLinkedin className="text-2xl text-blue-600" />,
      tag: 'Professional Network',
    },
    {
      name: 'Email',
      handle: personalInfo.email,
      desc: 'Direct communication for technical interviews, opportunities, and software discussions.',
      url: personalInfo.socials.email,
      icon: <FiMail className="text-2xl text-red-600" />,
      tag: 'Direct Contact',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <p className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">
            Profiles & Connections
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
            Developer & Professional Profiles
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 font-normal">
            Connect with me across GitHub, LinkedIn, or send an email directly.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {profileItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-black text-black group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                  <span>{item.name}</span>
                  <FiArrowUpRight className="text-sm opacity-60 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs font-mono text-slate-600 mt-0.5 truncate font-medium">
                  {item.handle}
                </p>
                <p className="text-xs text-slate-700 mt-2.5 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 text-xs font-bold text-blue-600 flex items-center gap-1">
                <span>View Profile</span>
                <FiArrowUpRight className="text-xs" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
