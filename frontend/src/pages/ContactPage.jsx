import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, ArrowRight } from 'lucide-react';
import { SectionWrapper, Container } from '../components/SectionWrapper';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// 3D Envelope Animation
const FloatingEnvelopes = () => {
  const envelopes = [
    { top: '12%', left: '6%', size: 40, delay: 0, duration: 7 },
    { top: '22%', right: '9%', size: 30, delay: 1.2, duration: 9 },
    { bottom: '30%', left: '4%', size: 35, delay: 0.6, duration: 8 },
    { top: '55%', right: '6%', size: 45, delay: 2, duration: 10 },
    { bottom: '15%', right: '12%', size: 28, delay: 1.5, duration: 6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {envelopes.map((env, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: env.top,
            left: env.left,
            right: env.right,
            bottom: env.bottom,
            perspective: '500px',
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: env.duration,
            repeat: Infinity,
            delay: env.delay,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            style={{
              width: env.size,
              height: env.size * 0.7,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateY: [0, 15, 0, -15, 0],
              rotateX: [0, 8, 0],
            }}
            transition={{
              duration: env.duration * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-cyan-200/20 border border-blue-300/40 rounded-lg backdrop-blur-sm"
              style={{ transform: `translateZ(${env.size / 4}px)` }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-blue-200/10 border border-blue-200/30 rounded-lg"
              style={{ transform: `translateZ(-${env.size / 4}px)` }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

// Signal Wave Animation
const SignalWaves = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute border border-blue-200/30 rounded-full"
          style={{
            width: 200 * i,
            height: 200 * i,
            left: `${-100 * i}px`,
            top: `${-100 * i}px`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  </div>
);

// Floating connection dots
const ConnectionDots = () => {
  const dots = [...Array(12)].map((_, i) => ({
    x: 5 + Math.random() * 90,
    y: 5 + Math.random() * 90,
    size: 3 + Math.random() * 4,
    duration: 4 + Math.random() * 3,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
            boxShadow: `0 0 ${dot.size * 3}px ${dot.size}px rgba(59, 130, 246, 0.2)`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
};

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 80932 84061',
    href: 'tel:+918093284061',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ytstack.in',
    href: 'mailto:info@ytstack.in',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '31, Chowringhee Road, Park Street, Kolkata-700016',
    href: 'https://maps.google.com/?q=31+Chowringhee+Road+Park+Street+Kolkata',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon - Sat: 10:00 AM - 7:00 PM',
    href: null,
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_r8fsd4q',  // Service ID
        'template_g7dovvl', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        'r_qANPUMmvTUoCUfL' // Public Key
      );
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main data-testid="contact-page" className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <FloatingEnvelopes />
        <SignalWaves />
        <ConnectionDots />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-100/60 to-cyan-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-50/50 to-transparent rounded-full blur-3xl" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-blue-600 mb-4 block">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mb-6">
              Let's Start a
              <br />
              <span className="text-blue-600">Conversation</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how
              we can help bring your vision to life.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <SectionWrapper className="bg-white pt-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    data-testid={`contact-info-${info.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.label === 'Address' ? '_blank' : undefined}
                        rel={info.label === 'Address' ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-all">
                          <info.icon size={20} className="text-blue-600" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1">
                            {info.label}
                          </div>
                          <div className="text-slate-800 group-hover:text-blue-600 transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon size={20} className="text-blue-600" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1">
                            {info.label}
                          </div>
                          <div className="text-slate-700">{info.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Yash-0810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-slate-300 rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all"
                    data-testid="contact-github"
                  >
                    <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yash-tripathi-0b044b215/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-slate-300 rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all"
                    data-testid="contact-linkedin"
                  >
                    <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/yash.h.h/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-slate-300 rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all"
                    data-testid="contact-instagram"
                  >
                    <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="p-8 md:p-10 bg-slate-50 border border-slate-200 rounded-2xl">
                <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-500 text-sm mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
                        placeholder="John Doe"
                        data-testid="contact-name-input"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
                        placeholder="john@example.com"
                        data-testid="contact-email-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
                        placeholder="+91 98765 43210"
                        data-testid="contact-phone-input"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2 block">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
                        placeholder="Project Inquiry"
                        data-testid="contact-subject-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2 block">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none rounded-xl"
                      placeholder="Tell us about your project..."
                      data-testid="contact-message-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-blue-600 text-white px-10 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
                    data-testid="contact-submit-btn"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Map Section */}
      <SectionWrapper className="bg-slate-50">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2363492908897!2d88.34815931495991!3d22.56520798517892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b75f1bb0e3%3A0x6a4a8d9a9e2d2d5a!2sChowringhee%20Rd%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="YTSTACK Location"
              data-testid="contact-map"
            />
          </div>
        </Container>
      </SectionWrapper>
    </main>
  );
};

export default ContactPage;
