import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import { sendContactMessage } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.message.trim()) {
      setStatus({ loading: false, success: null, error: 'Please enter both an email and a message.' });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    try {
      await sendContactMessage({
        email: formData.email,
        message: formData.message,
      });

      setStatus({
        loading: false,
        success: 'Thank you! Your message was sent and stored in the database. I will contact you shortly.',
        error: null,
      });
      setFormData({ email: '', message: '' });
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        loading: false,
        success: null,
        error: 'Unable to reach backend API right now. Please email directly at ' + personalInfo.email,
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Have an opportunity, full-stack opening, or technical project in mind? Reach out anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900">Direct Contact</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                I am actively seeking Java Full Stack Developer opportunities. Feel free to contact me directly via email, phone, or the message form.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 transition group shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-lg group-hover:bg-blue-600 group-hover:text-white transition">
                    <FiMail />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 font-medium">Email</div>
                    <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 transition group shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-lg group-hover:bg-blue-600 group-hover:text-white transition">
                    <FiPhone />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 font-medium">Phone</div>
                    <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
                    <FiMapPin />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 font-medium">Location</div>
                    <div className="text-sm font-semibold text-slate-800">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Social profile links */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500 font-semibold">Profiles:</span>
                {personalInfo.github && (
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-white text-slate-700 hover:text-blue-600 hover:border-blue-300 border border-slate-200 transition shadow-2xs"
                    title="GitHub"
                  >
                    <FiGithub />
                  </a>
                )}
                {personalInfo.linkedin && (
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-white text-slate-700 hover:text-blue-600 hover:border-blue-300 border border-slate-200 transition shadow-2xs"
                    title="LinkedIn"
                  >
                    <FiLinkedin />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (API Connected) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">Send a Message</h3>
                <span className="text-[11px] font-mono font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Connected to PostgreSQL API
                </span>
              </div>

              {/* Feedback Notifications */}
              {status.success && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
                  <FiCheckCircle className="text-lg mt-0.5 flex-shrink-0 text-emerald-600" />
                  <span>{status.success}</span>
                </div>
              )}

              {status.error && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
                  <FiAlertCircle className="text-lg mt-0.5 flex-shrink-0 text-rose-600" />
                  <span>{status.error}</span>
                </div>
              )}

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                  Your Email <span className="text-blue-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                  Your Message <span className="text-blue-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Anand, I'd like to discuss a Java Full Stack Developer position with you..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 transition shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                {status.loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Saving to Database...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="text-base" />
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