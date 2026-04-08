import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Search, 
  Zap,
  ArrowRight,
  Check,
  ExternalLink,
  Phone,
  Mail,
  Send,
  Terminal
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { SectionWrapper, SectionHeader, Container } from '../components/SectionWrapper';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// 3D Isometric Grid
const IsometricGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full opacity-30" viewBox="0 0 1000 800">
        <defs>
          <pattern id="isoGrid" width="60" height="35" patternUnits="userSpaceOnUse">
            <path d="M0 35 L30 17.5 L60 35 M30 17.5 L30 0" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" fill="none"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#isoGrid)" />
      </svg>
    </div>
  );
};

// 3D Floating Cubes with proper perspective
const Floating3DCubes = () => {
  const isMobileOrReduced = window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches;
  const cubes = isMobileOrReduced ? [] : [
    { x: '10%', y: '20%', size: 40, delay: 0, duration: 12 },
    { x: '80%', y: '70%', size: 35, delay: 2, duration: 15 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform translate-z-0" style={{ transform: 'translateZ(0)' }}>
      {cubes.map((cube, i) => (
        <motion.div
          key={i}
          className="absolute will-change-transform"
          style={{ left: cube.x, top: cube.y, perspective: '300px' }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: cube.duration,
            repeat: Infinity,
            delay: cube.delay,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            className="will-change-transform"
            style={{
              width: cube.size,
              height: cube.size,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: cube.duration * 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Simplified 3 faces */}
            <div 
              className="absolute bg-gradient-to-br from-blue-400/15 to-blue-500/10 border border-blue-300/30"
              style={{ 
                width: cube.size, 
                height: cube.size,
                transform: `translateZ(${cube.size/2}px)`,
              }}
            />
            <div 
              className="absolute bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border border-blue-300/20"
              style={{ 
                width: cube.size, 
                height: cube.size,
                transform: `rotateY(-90deg) translateZ(${cube.size/2}px)`,
              }}
            />
            <div 
              className="absolute bg-gradient-to-br from-blue-200/20 to-cyan-300/10 border border-blue-300/30"
              style={{ 
                width: cube.size, 
                height: cube.size,
                transform: `rotateX(90deg) translateZ(${cube.size/2}px)`,
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

// Animated Orbit Rings
const OrbitRings = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Outer ring */}
      <motion.div
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 border border-blue-200/30 rounded-full"
        style={{ left: '50%', top: '50%' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div 
          className="absolute w-4 h-4 bg-blue-400/60 rounded-full shadow-lg shadow-blue-400/30"
          style={{ top: '-8px', left: '50%', transform: 'translateX(-50%)' }}
        />
      </motion.div>
      
      {/* Middle ring */}
      <motion.div
        className="absolute w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 border border-cyan-200/25 rounded-full"
        style={{ left: '50%', top: '50%' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div 
          className="absolute w-3 h-3 bg-cyan-400/60 rounded-full shadow-lg shadow-cyan-400/30"
          style={{ top: '-6px', left: '50%', transform: 'translateX(-50%)' }}
        />
      </motion.div>
      
      {/* Inner ring */}
      <motion.div
        className="absolute w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 border border-blue-300/20 rounded-full"
        style={{ left: '50%', top: '50%' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div 
          className="absolute w-2 h-2 bg-blue-300/60 rounded-full"
          style={{ top: '-4px', left: '50%', transform: 'translateX(-50%)' }}
        />
      </motion.div>
    </div>
  </div>
);

// Floating Tech Icons
const FloatingTechIcons = () => {
  const icons = [
    { symbol: '</>', x: '12%', y: '25%' },
    { symbol: '{ }', x: '88%', y: '35%' },
    { symbol: '< >', x: '5%', y: '55%' },
    { symbol: '( )', x: '92%', y: '65%' },
    { symbol: '[ ]', x: '18%', y: '85%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-2xl text-blue-400/30 font-bold"
          style={{ left: icon.x, top: icon.y }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {icon.symbol}
        </motion.div>
      ))}
    </div>
  );
};

// Glowing Particles
const GlowingParticles = () => {
  const isMobileOrReduced = window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches;
  const particleCount = isMobileOrReduced ? 6 : 12;
  const particles = [...Array(particleCount)].map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1.5 + Math.random() * 2,
    duration: 4 + Math.random() * 3,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform" style={{ transform: 'translateZ(0)' }}>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/80"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 2}px rgba(59, 130, 246, 0.2)`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

// Gradient Mesh Background
const GradientMesh = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-blue-100/70 via-cyan-50/50 to-transparent rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50/60 via-indigo-50/40 to-transparent rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 via-transparent to-cyan-100/20 rounded-full blur-3xl" />
  </div>
);

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white" data-testid="hero-section">
      {/* Layered 3D Effects */}
      <GradientMesh />
      <IsometricGrid />
      <OrbitRings />
      <Floating3DCubes />
      <FloatingTechIcons />
      <GlowingParticles />
      
      <Container className="relative z-10 pt-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Terminal size={18} className="text-blue-600" />
            </div>
            <motion.span 
              className="font-mono text-sm uppercase tracking-widest text-blue-600 font-medium"
              animate={{
                text: ['Build • Code • Deploy', '', 'Build • Code • Deploy']
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                times: [0, 0.5, 1],
                ease: 'linear'
              }}
            >
              Build • Code • Deploy
            </motion.span>
            <motion.span 
              className="w-2 h-5 bg-blue-600 rounded-sm"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-6 leading-[1.1]"
          >
            We Build
            <motion.span 
              className="text-blue-600 ml-4 inline-block"
              animate={{ 
                textShadow: [
                  '0 0 0px rgba(59, 130, 246, 0)',
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                  '0 0 0px rgba(59, 130, 246, 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Digital
            </motion.span>
            <br />
            Experiences That
            <br />
            <span className="relative inline-block">
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{ backgroundPosition: ['0%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                Matter
              </motion.span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
              />
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          >
            YTSTACK is your engineering-first partner for creating fast, scalable, 
            and stunning web solutions. From concept to deployment, we turn ideas into reality.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 rounded-lg"
              data-testid="hero-cta"
            >
              <span>Start Your Project</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-700 px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:border-blue-500 hover:text-blue-600 transition-all rounded-lg"
              data-testid="hero-secondary-cta"
            >
              Our Services
            </Link>
          </motion.div>
          
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-3"
          >
            {['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'].map((tech, i) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-mono hover:border-blue-400 hover:text-blue-600 transition-all cursor-default rounded-lg shadow-sm hover:shadow-md"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            className="w-7 h-11 border-2 border-blue-300 rounded-full flex justify-center p-1"
            animate={{ borderColor: ['rgba(147, 197, 253, 0.5)', 'rgba(59, 130, 246, 0.8)', 'rgba(147, 197, 253, 0.5)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-blue-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// Services Section
const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom-built websites and web applications using modern frameworks and technologies.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Strategic optimization to improve visibility and drive organic traffic to your site.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed enhancements and optimizations for lightning-fast load times.',
  },
];

const ServicesSection = () => {
  return (
    <SectionWrapper className="bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="services">
      <GradientMesh />
      <IsometricGrid />
      <Container className="relative z-10">
        <SectionHeader 
          overline="What We Do"
          title="Services Built for Growth"
          description="Comprehensive digital solutions tailored to elevate your business and drive results."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative p-8 bg-white/80 border border-slate-200/50 backdrop-blur-sm group cursor-pointer overflow-hidden hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all rounded-2xl"
              data-testid={`service-card-${index}`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-2xl" />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-14 h-14 bg-blue-50/80 border border-blue-100/50 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-all"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <service.icon size={26} className="text-blue-600 drop-shadow-sm" strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-heading text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-all drop-shadow-sm">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed drop-shadow-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider hover:gap-4 transition-all group drop-shadow-lg"
            data-testid="services-view-all"
          >
            View All Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
};

// Pricing Preview Section
const pricingPlans = [
  {
    name: 'Origin',
    subtitle: 'Starter',
    price: '₹5,000',
    description: 'Perfect for small businesses starting their digital journey.',
    features: ['3-5 Pages', 'Responsive Design', 'Basic SEO', 'Contact Form'],
  },
  {
    name: 'Momentum',
    subtitle: 'Most Popular',
    price: '₹17,999',
    description: 'Ideal for growing businesses needing more features.',
    features: ['5-10 Pages', 'Premium UI/UX', 'CMS Integration', 'SEO Optimized', '1 Year Maintenance'],
    popular: true,
  },
  {
    name: 'Apex',
    subtitle: 'Premium',
    price: '₹32,999',
    description: 'Enterprise-grade solution for maximum impact.',
    features: ['Custom Design', 'Advanced Animations', 'CMS + Scalable', 'Priority Support', '1 Year Maintenance'],
  },
];

const PricingSection = () => {
  return (
    <SectionWrapper className="bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden" id="pricing">
      <Container className="relative z-10">
        <SectionHeader 
          overline="Pricing"
          title="Transparent Pricing"
          description="Choose a package that fits your needs. All plans include quality craftsmanship."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: plan.popular ? -12 : -8 }}
              className={`relative p-8 rounded-2xl ${
                plan.popular 
                  ? 'bg-blue-600 text-white shadow-2xl shadow-blue-600/30' 
                  : 'bg-white border border-slate-200 hover:shadow-xl transition-shadow'
              }`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 px-4 py-1 font-mono text-xs uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              <div className={`font-mono text-xs uppercase tracking-wider mb-2 ${plan.popular ? 'text-blue-200' : 'text-blue-600'}`}>{plan.subtitle}</div>
              <h3 className={`font-heading text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-800'}`}>{plan.name}</h3>
              <div className={`font-mono text-3xl mb-4 ${plan.popular ? 'text-white' : 'text-slate-800'}`}>{plan.price}<span className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-slate-400'}`}>+</span></div>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-blue-100' : 'text-slate-600'}`}>{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-3 text-sm ${plan.popular ? 'text-blue-100' : 'text-slate-600'}`}>
                    <Check size={16} className={`flex-shrink-0 ${plan.popular ? 'text-cyan-400' : 'text-blue-600'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/pricing"
                className={`block text-center py-3 font-semibold text-sm uppercase tracking-wider transition-all rounded-xl ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};

// Process Section
const processSteps = [
  { name: 'Discover', icon: '01' },
  { name: 'Plan', icon: '02' },
  { name: 'Design', icon: '03' },
  { name: 'Build', icon: '04' },
  { name: 'Deploy', icon: '05' },
  { name: 'Support', icon: '06' },
];

const ProcessSection = () => {
  return (
    <SectionWrapper className="bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden" id="process">
      <GradientMesh />
      <OrbitRings />
      <Container className="relative z-10">
        <SectionHeader 
          overline="Our Process"
          title="How We Work"
          description="A streamlined approach to delivering exceptional results."
          center
        />
        
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5">
            <motion.div 
              className="h-full bg-gradient-to-r from-transparent via-blue-300/50 to-transparent backdrop-blur-sm"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative text-center group cursor-pointer"
                data-testid={`process-step-${index}`}
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 bg-white/70 border-2 border-slate-200/60 backdrop-blur-sm rounded-2xl flex items-center justify-center relative z-10 group-hover:border-blue-400 group-hover:bg-gradient-to-br from-blue-50 to-indigo-50 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-200/50"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  <span className="font-mono text-2xl text-blue-600 font-bold drop-shadow-lg group-hover:text-blue-700">{step.icon}</span>
                </motion.div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-700 group-hover:text-blue-600 transition-all drop-shadow-sm font-mono text-shadow-sm">{step.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link
            to="/process"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl backdrop-blur-sm drop-shadow-2xl"
          >
            View Detailed Process
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
};

// Portfolio Section
const portfolioItems = [
  {
    title: 'Yash Tripathi',
    category: 'Personal Portfolio',
    url: 'https://yashtripathi.online',
    image: '/yashtripathi.png',
  },
  {
    title: 'Vrinaa Occasions',
    category: 'Business Website',
    url: 'https://vrinaaoccasions.in',
    image: '/VrinnaOcc.png',
  },
  {
    title: 'Corridor',
    category: 'Business Website',
    url: 'https://corridor-website.vercel.app/',
    image: '/Corridors.png',
  },
];



const PortfolioSection = () => {
  return (
    <SectionWrapper className="bg-slate-50 relative" id="portfolio">
      <Container>
        <SectionHeader 
          overline="Our Work"
          title="Recent Projects"
          description="A showcase of our recent web development and design projects."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden aspect-video rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              data-testid={`portfolio-item-${index}`}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="font-mono text-xs uppercase tracking-wider text-blue-400 mb-2">{item.category}</div>
                <h3 className="font-heading text-xl font-semibold text-white flex items-center gap-2">
                  {item.title}
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:bg-blue-600 group-hover:border-blue-600">
                <ArrowRight size={16} className="text-white -rotate-45" />
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <SectionWrapper className="bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden" id="cta">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_60%)]" />
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full" />
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-blue-200 mb-6 block"
          >
            Ready to Start?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Let's Build Something
            <br />
            <span className="text-cyan-300">Powerful</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg mb-10"
          >
            Transform your vision into a high-performance digital reality. 
            Let's discuss your project today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative mx-auto max-w-md">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-blue-50 transition-colors group rounded-xl shadow-lg relative z-10"
                data-testid="cta-button"
              >
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
{/* CTAArrowPointer */}
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

// Get Connected Section
const GetConnectedSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper className="bg-white relative" id="connect">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader 
              overline="Get Connected"
              title="Let's Talk About Your Project"
              description="Have an idea? Let's bring it to life together. Reach out and let's start the conversation."
            />
            
            <div className="space-y-6">
              <motion.a 
                href="tel:+918093284061" 
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
                data-testid="connect-phone"
              >
                <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-all">
                  <Phone size={22} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1">Phone</div>
                  <div className="text-slate-800 font-medium group-hover:text-blue-600 transition-colors">+91 80932 84061</div>
                </div>
              </motion.a>
              
              <motion.a 
                href="mailto:info@ytstack.in" 
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
                data-testid="connect-email"
              >
                <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-all">
                  <Mail size={22} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1">Email</div>
                  <div className="text-slate-800 font-medium group-hover:text-blue-600 transition-colors">info@ytstack.in</div>
                </div>
              </motion.a>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 bg-slate-50 border border-slate-200 rounded-2xl"
            data-testid="quick-connect-form"
          >
            <h3 className="font-heading text-xl font-semibold text-slate-800 mb-6">Quick Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
                data-testid="connect-name-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
                data-testid="connect-email-input"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none rounded-xl"
                data-testid="connect-message-input"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 font-semibold text-sm uppercase tracking-wider hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 rounded-xl"
                data-testid="connect-submit-btn"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

// Main Home Page Component
const HomePage = () => {
  return (
    <main data-testid="home-page" className="bg-white">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <PortfolioSection />
      <CTASection />
      <GetConnectedSection />
    </main>
  );
};

export default HomePage;
