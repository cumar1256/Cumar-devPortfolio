import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, MessageCircle, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Quick validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Let's Work Together
          </h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Contact Information
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                Have an exciting project in mind? Or just want to say hi? 
                Feel free to drop a message, and I will get back to you as soon as possible.
              </p>
            </div>

            {/* List of Contact Details */}
            <div className="space-y-4">
              <div className="flex min-w-0 items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="block break-all text-sm sm:text-base font-bold text-gray-800 hover:text-orange-500 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex min-w-0 items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Location
                  </span>
                  <span className="block text-sm sm:text-base font-bold text-gray-800">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex min-w-0 items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-600 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    WhatsApp
                  </span>
                  <span className="block break-words text-sm sm:text-base font-bold text-gray-800 hover:text-orange-500 transition-colors">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50/50 border border-gray-100 p-4 sm:p-10 rounded-2xl sm:rounded-[2rem] shadow-sm">
              
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-10 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-500 shadow-sm animate-pulse">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">Message Sent Successfully!</h4>
                    <p className="text-gray-500 text-sm max-w-sm">
                      Thank you for reaching out, Cumar. Your message has been received, and I'll respond shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl font-medium">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                        Full Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="w-full bg-white border border-gray-200 focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="w-full bg-white border border-gray-200 focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Brand Design Project"
                      className="w-full bg-white border border-gray-200 focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                      Message <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      required
                      className="w-full bg-white border border-gray-200 focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
