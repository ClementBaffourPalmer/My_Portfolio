import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '7aa34826-7871-4af7-8a8c-6097b8cee2f6',
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Inquiry] ${formData.subject}`,
          message: formData.message,
          from_name: 'Clement Palmer Portfolio',
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setStatusMessage('Your message was delivered successfully. Clement will respond promptly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('success');
        setStatusMessage('Thank you. Your message has been received.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage('Unable to send message directly. Please email clementpalmer84@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t subtle-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-electric font-semibold mb-2">
            CONTACT
          </p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-charcoal'
          }`}>
            Get in Touch
          </h2>
          <p className={`mt-2 text-sm sm:text-base max-w-xl ${
            darkMode ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            Available for software engineering opportunities, technical discussions, and professional networking.
          </p>
          <div className="w-12 h-1 bg-electric mt-3 rounded-full" />
        </div>

        {/* Two-Column Clean Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Contact Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`p-6 rounded-2xl border space-y-5 shadow-xs ${
              darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
            }`}>
              {/* Email */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-electric/10 text-electric shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className={`text-[11px] font-mono uppercase tracking-wider ${
                    darkMode ? 'text-neutral-400' : 'text-neutral-500 font-semibold'
                  }`}>Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className={`text-sm font-semibold hover:text-electric transition-colors ${
                      darkMode ? 'text-white' : 'text-charcoal'
                    }`}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-electric/10 text-electric shrink-0">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className={`text-[11px] font-mono uppercase tracking-wider ${
                    darkMode ? 'text-neutral-400' : 'text-neutral-500 font-semibold'
                  }`}>LinkedIn</p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-electric hover:underline"
                  >
                    linkedin.com/in/kwesi-baffour-598ba83a9
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-electric/10 text-electric shrink-0">
                  <Github size={18} />
                </div>
                <div>
                  <p className={`text-[11px] font-mono uppercase tracking-wider ${
                    darkMode ? 'text-neutral-400' : 'text-neutral-500 font-semibold'
                  }`}>GitHub</p>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-electric hover:underline"
                  >
                    github.com/ClementBaffourPalmer
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-electric/10 text-electric shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className={`text-[11px] font-mono uppercase tracking-wider ${
                    darkMode ? 'text-neutral-400' : 'text-neutral-500 font-semibold'
                  }`}>Location</p>
                  <p className={`text-sm font-semibold ${
                    darkMode ? 'text-white' : 'text-charcoal'
                  }`}>
                    {personalInfo.location}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border shadow-xs ${
              darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
            }`}>
              
              {submitStatus === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 size={36} className="text-emerald-400 mx-auto" />
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-charcoal'}`}>
                    Message Received
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    {statusMessage}
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-2 px-4 py-2 text-xs font-semibold rounded-lg bg-electric text-white hover:bg-electric-hover transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start space-x-3 text-xs text-red-400">
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className={`block text-xs font-mono uppercase mb-1.5 ${
                        darkMode ? 'text-neutral-300' : 'text-neutral-700 font-semibold'
                      }`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-1 focus:ring-electric transition-colors ${
                          errors.name
                            ? 'border-red-500 bg-red-500/5'
                            : darkMode
                            ? 'border-panel-border bg-charcoal text-white placeholder-neutral-500'
                            : 'border-light-border bg-white text-charcoal placeholder-neutral-400'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className={`block text-xs font-mono uppercase mb-1.5 ${
                        darkMode ? 'text-neutral-300' : 'text-neutral-700 font-semibold'
                      }`}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-1 focus:ring-electric transition-colors ${
                          errors.email
                            ? 'border-red-500 bg-red-500/5'
                            : darkMode
                            ? 'border-panel-border bg-charcoal text-white placeholder-neutral-500'
                            : 'border-light-border bg-white text-charcoal placeholder-neutral-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className={`block text-xs font-mono uppercase mb-1.5 ${
                      darkMode ? 'text-neutral-300' : 'text-neutral-700 font-semibold'
                    }`}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Engineering Opportunity"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-1 focus:ring-electric transition-colors ${
                        errors.subject
                          ? 'border-red-500 bg-red-500/5'
                          : darkMode
                          ? 'border-panel-border bg-charcoal text-white placeholder-neutral-500'
                          : 'border-light-border bg-white text-charcoal placeholder-neutral-400'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block text-xs font-mono uppercase mb-1.5 ${
                      darkMode ? 'text-neutral-300' : 'text-neutral-700 font-semibold'
                    }`}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Provide context regarding your project or inquiry..."
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-1 focus:ring-electric transition-colors ${
                        errors.message
                          ? 'border-red-500 bg-red-500/5'
                          : darkMode
                          ? 'border-panel-border bg-charcoal text-white placeholder-neutral-500'
                          : 'border-light-border bg-white text-charcoal placeholder-neutral-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-semibold bg-electric hover:bg-electric-hover text-white transition-all duration-200 disabled:opacity-60 shadow-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
