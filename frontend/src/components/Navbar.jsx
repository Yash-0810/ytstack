import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Process', path: '/process' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg py-1.5' 
          : 'bg-white/80 backdrop-blur-lg py-3'
      }`}
      data-testid="navbar"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-blue-50/50 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between relative">
        <Link to="/" className="flex items-center group" data-testid="logo-link">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
              <img 
                src="https://customer-assets.emergentagent.com/job_ytstack-futuristic/artifacts/qk7vqaj0_ssfds.png" 
                alt="YTSTACK" 
                className="h-20 w-auto object-contain"
              />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-medium text-sm tracking-wide transition-all duration-300 ${
                location.pathname === link.path 
                  ? 'text-blue-600' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
              data-testid={`nav-${link.name.toLowerCase()}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* CTA Button Desktop */}
        <Link
          to="/contact"
          className="hidden md:flex items-center gap-2 relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 font-semibold text-sm tracking-wide group"
          data-testid="nav-cta"
        >
          <span className="relative z-10">Start Project</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-400"
            initial={{ x: '100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-slate-700 p-2 hover:text-blue-600 transition-colors"
          data-testid="mobile-menu-btn"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 mt-2 overflow-hidden"
            data-testid="mobile-menu"
          >
            <div className="py-6 px-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`font-medium text-base tracking-wide py-2 block transition-colors ${
                      location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                    }`}
                    data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 font-semibold text-sm text-center mt-4 block"
                  data-testid="mobile-nav-cta"
                >
                  Start Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
