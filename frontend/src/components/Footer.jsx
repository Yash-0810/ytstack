import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <>
    <footer className="bg-slate-50 border-t border-slate-200 py-16 relative overflow-hidden" data-testid="footer">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6 group">
              <img 
                src="https://customer-assets.emergentagent.com/job_ytstack-futuristic/artifacts/qk7vqaj0_ssfds.png" 
                alt="YTSTACK" 
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Build • Code • Deploy<br />
              Engineering-first web solutions for modern businesses.
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="https://www.instagram.com/ytstack.llp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-slate-300 flex items-center justify-center hover:border-pink-500 hover:bg-pink-50 transition-all rounded-lg"
                whileHover={{ y: -2 }}
                data-testid="footer-instagram"
              >
                <svg className="w-5 h-5 text-slate-600 hover:text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5z"/>
                  <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
                  <circle cx="17.5" cy="6.5" r="1.2" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-slate-300 flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all rounded-lg"
                whileHover={{ y: -2 }}
                data-testid="footer-linkedin"
              >
                <svg className="w-5 h-5 text-slate-600 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-800 mb-6">Quick Links</h4>

            <ul className="space-y-3">

              {['Home', 'Services', 'Pricing', 'Process', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-slate-600 text-sm hover:text-blue-600 transition-colors flex items-center gap-1 group"
                    data-testid={`footer-link-${link.toLowerCase()}`}
                  >
                    {link}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-800 mb-6">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'SEO Optimization', 'Performance'].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-slate-600 text-sm hover:text-blue-600 transition-colors flex items-center gap-1 group"
                  >
                    {service}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-800 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+918093284061" 
                  className="text-slate-600 text-sm hover:text-blue-600 transition-colors flex items-start gap-3 group"
                  data-testid="footer-phone"
                >
                  <Phone size={16} className="mt-0.5 text-blue-600" />
                  <span className="group-hover:text-blue-600 transition-colors">+91 80932 84061</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@ytstack.in" 
                  className="text-slate-600 text-sm hover:text-blue-600 transition-colors flex items-start gap-3 group"
                  data-testid="footer-email"
                >
                  <Mail size={16} className="mt-0.5 text-blue-600" />
                  <span className="group-hover:text-blue-600 transition-colors">info@ytstack.in</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-600 text-sm">
                <MapPin size={16} className="mt-0.5 text-blue-600 flex-shrink-0" />
                <span>31, Chowringhee Road,<br />Park Street, Kolkata-700016</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} YTSTACK LLP. All rights reserved.
          </p>
          <div className="flex gap-6">

            <Link to="/privacy" className="text-slate-500 text-sm hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 text-sm hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>

    <a
      href="https://wa.me/message/3YUULPRQPVP6A1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3 text-white shadow-lg hover:from-emerald-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-all"
      data-testid="whatsapp-connect-button"
      aria-label="Connect now on WhatsApp"
    >
      <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.2c-.27-.14-1.57-.77-1.81-.85-.24-.09-.42-.14-.59.14-.17.27-.68.85-.83 1.02-.15.17-.3.19-.57.07-.27-.14-1.12-.41-2.13-1.3-.79-.7-1.32-1.56-1.47-1.83-.15-.27-.02-.42.12-.56.12-.12.27-.3.41-.45.14-.15.19-.27.28-.45.09-.17.05-.32-.02-.45-.07-.14-.59-1.42-.81-1.95-.21-.5-.43-.43-.59-.44h-.5c-.17 0-.45.07-.68.32-.24.27-.9.88-.9 2.14 0 1.26.92 2.48 1.05 2.65.14.17 1.8 2.74 4.37 3.84.61.27 1.09.43 1.46.55.62.2 1.19.17 1.63.1.5-.07 1.57-.64 1.79-1.26.22-.62.22-1.15.15-1.26-.06-.12-.24-.19-.5-.32z"/>
        <path d="M16.02 3.2c-6.95 0-12.6 5.65-12.6 12.6 0 2.22.58 4.39 1.67 6.3L3 29l7.1-2.05a12.56 12.56 0 0 0 5.92 1.5h.01c6.95 0 12.6-5.65 12.6-12.6S22.98 3.2 16.03 3.2h-.01zm0 22.95h-.01a10.4 10.4 0 0 1-5.29-1.45l-.38-.23-4.21 1.22 1.23-4.1-.25-.42a10.36 10.36 0 0 1-1.6-5.51c0-5.73 4.66-10.39 10.4-10.39 2.78 0 5.39 1.08 7.35 3.04a10.34 10.34 0 0 1 3.04 7.35c0 5.73-4.66 10.39-10.39 10.39z"/>
      </svg>
      <span className="text-sm font-semibold">Connect now</span>
    </a>
    </>
  );
};

