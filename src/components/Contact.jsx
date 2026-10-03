import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import { sendContactMessage } from '../services/api';

export default function Contact({ onNavigateToAdmin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanName = formData.name.trim().toLowerCase();
    const cleanEmail = formData.email.trim().toLowerCase();

    // Secret Admin Access Shortcut
    // When owner inputs Name: "Anand" and Email: "palleanandreddy6@gmail.com", redirect to /admin
    if (
      (cleanName === 'anand' || cleanName === 'anand reddy' || cleanName === 'anand reddy palle') &&
      (cleanEmail === 'palleanandreddy6@gmail.com' || cleanEmail === 'pallenanandreddy6@gmail.com')
    ) {
      if (onNavigateToAdmin) {
        onNavigateToAdmin();
      } else {
        window.history.pushState({}, '', '/admin');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({
        loading: false,
        success: null,
        error: 'Please fill out all required fields (Name, Email, Subject, Message).',
      });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    try {
      await sendContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      setStatus({
        loading: false,
        success: 'Thank you! Your message has been sent successfully. I will reply to you promptly.',
        error: null,
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        loading: false,
        success: null,
        error: `Could not send message right now. You can also contact me directly at ${personalInfo.email}.`,
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200 transition-colors duration-300 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Contact Me
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-normal">
            Have an open role, technical interview, or full-stack software project? Send me a message and I will get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                  Direct Communication
                </span>
                <h3 className="text-xl font-black text-black">
                  Available for Hire
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1 font-normal">
                  Actively interviewing for Full-Stack Java Developer and Software Engineer roles. Feel free to connect via any channel.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors group shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                    <FiMail />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase font-bold">Email</div>
                    <div className="text-xs sm:text-sm font-bold text-black group-hover:text-blue-600 transition-colors truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors group shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                    <FiPhone />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase font-bold">Phone</div>
                    <div className="text-xs sm:text-sm font-bold text-black group-hover:text-blue-600 transition-colors">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg">
                    <FiMapPin />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase font-bold">Location</div>
                    <div className="text-xs sm:text-sm font-bold text-black">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Quick Links */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500 font-bold">Direct Links:</span>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-50 text-black hover:text-blue-600 border border-slate-200 transition"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-50 text-black hover:text-blue-600 border border-slate-200 transition"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm"
            >
              <div className="pb-3 border-b border-slate-200">
                <h3 className="text-lg font-black text-black">
                  Send Message
                </h3>
              </div>

              {/* Success Notification */}
              {status.success && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
                  <FiCheckCircle className="text-base mt-0.5 shrink-0 text-emerald-600" />
                  <span className="font-medium">{status.success}</span>
                </div>
              )}

              {/* Error Notification */}
              {status.error && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-3">
                  <FiAlertCircle className="text-base mt-0.5 shrink-0 text-rose-600" />
                  <span className="font-medium">{status.error}</span>
                </div>
              )}

              {/* Form Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-800 font-bold">
                    Your Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-black placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm font-medium transition"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-800 font-bold">
                    Email Address <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-black placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm font-medium transition"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-800 font-bold">
                  Subject <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Full-Stack Java Developer Opening / Technical Interview"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-black placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm font-medium transition"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-800 font-bold">
                  Message <span className="text-blue-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Anand, we were impressed by your Mechanic Buddy architecture and full-stack background. We would like to discuss an opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-black placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm font-medium transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 transition shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                {status.loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="text-sm" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}