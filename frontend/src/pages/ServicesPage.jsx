import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Search, 
  Zap,
  ArrowRight,
  Check,
  Monitor,
  Globe,
  Shield,
  Gauge
} from 'lucide-react';
import { SectionWrapper, SectionHeader, Container } from '../components/SectionWrapper';

// 3D Floating Code Blocks Effect
const FloatingCodeBlocks = () => {
  const codeBlocks = [
    { code: '<div>', top: '10%', left: '5%', delay: 0 },
    { code: 'function()', top: '20%', right: '8%', delay: 1 },
    { code: '{...}', bottom: '30%', left: '10%', delay: 2 },
    { code: '</>', top: '60%', right: '5%', delay: 0.5 },
    { code: 'npm run', bottom: '20%', right: '15%', delay: 1.5 },
    { code: 'const', top: '40%', left: '3%', delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeBlocks.map((block, i) => (
        <motion.div
          key={i}
          className="absolute px-3 py-2 bg-blue-100/50 border border-blue-200/50 rounded-lg font-mono text-xs text-blue-600/60 backdrop-blur-sm"
          style={{ top: block.top, left: block.left, right: block.right, bottom: block.bottom }}
          animate={{
            y: [0, -15, 0],
            rotateX: [0, 5, 0],
            rotateY: [0, 5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: block.delay,
          }}
        >
          {block.code}
        </motion.div>
      ))}
    </div>
  );
};

// 3D Rotating Cube
const RotatingCube = ({ size = 80, className = '' }) => (
  <div className={`absolute ${className}`} style={{ perspective: '500px' }}>
    <motion.div
      className="relative"
      style={{
        width: size,
        height: size,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {[0, 1, 2, 3, 4, 5].map((face) => (
        <div
          key={face}
          className="absolute border-2 border-blue-300/30 bg-blue-100/20 backdrop-blur-sm"
          style={{
            width: size,
            height: size,
            transform: [
              `translateZ(${size / 2}px)`,
              `rotateY(180deg) translateZ(${size / 2}px)`,
              `rotateY(90deg) translateZ(${size / 2}px)`,
              `rotateY(-90deg) translateZ(${size / 2}px)`,
              `rotateX(90deg) translateZ(${size / 2}px)`,
              `rotateX(-90deg) translateZ(${size / 2}px)`,
            ][face],
          }}
        />
      ))}
    </motion.div>
  </div>
);

// Animated Grid Background
const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px),
          linear-gradient(rgba(59, 130, 246, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
      animate={{
        backgroundPosition: ['0px 0px', '40px 40px'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  </div>
);

const services = [
  {
    id: 'web-development',
    icon: Code2,
    title: 'Custom Website Development',
    description: 'We build custom websites from the ground up, tailored to your specific business needs. Using modern frameworks like React, Next.js, and Node.js, we create fast, secure, and scalable web solutions.',
    features: [
      'Custom React/Next.js Development',
      'Responsive Design for All Devices',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'E-commerce Solutions',
      'Database Design & Management'
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Optimization',
    description: 'Increase your online visibility with our comprehensive SEO services. We implement proven strategies to improve your search rankings and drive qualified organic traffic to your website.',
    features: [
      'Technical SEO Audit',
      'On-Page Optimization',
      'Keyword Research & Strategy',
      'Content Optimization',
      'Local SEO Setup',
      'Performance Monitoring'
    ],
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop'
  },
  {
    id: 'performance',
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed matters. We analyze and optimize every aspect of your website to achieve lightning-fast load times, improving user experience and search engine rankings.',
    features: [
      'Core Web Vitals Optimization',
      'Image & Asset Optimization',
      'Code Splitting & Lazy Loading',
      'Caching Strategies',
      'CDN Configuration',
      'Performance Monitoring'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  }
];

const stats = [
  { icon: Monitor, value: '50+', label: 'Projects Delivered' },
  { icon: Globe, value: '30+', label: 'Happy Clients' },
  { icon: Gauge, value: '99%', label: 'Client Satisfaction' },
  { icon: Shield, value: '24/7', label: 'Support Available' },
];

const ServicesPage = () => {
  return (
    <main data-testid="services-page" className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <AnimatedGrid />
        <FloatingCodeBlocks />
        <RotatingCube size={60} className="top-20 right-[10%] opacity-50" />
        <RotatingCube size={40} className="bottom-20 left-[5%] opacity-40" />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/60 to-cyan-100/40 rounded-full blur-3xl" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-blue-600 mb-4 block">
              Our Services
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mb-6">
              Digital Solutions That
              <br />
              <span className="text-blue-600">Drive Results</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              From concept to deployment, we provide comprehensive web development and digital 
              services to help your business thrive in the digital landscape.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-slate-200 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon size={24} className="text-blue-600" strokeWidth={1.5} />
                </div>
                <div className="font-heading text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <SectionWrapper 
          key={service.id}
          id={service.id}
          className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
        >
          <Container>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center">
                    <service.icon size={28} className="text-blue-600" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-blue-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                      <Check size={16} className="text-blue-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 font-semibold text-sm uppercase tracking-wider hover:bg-blue-700 transition-all rounded-lg shadow-lg shadow-blue-600/25 group"
                  data-testid={`service-cta-${service.id}`}
                >
                  Get Started
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-blue-200 rounded-xl" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100/50 rounded-xl" />
              </motion.div>
            </div>
          </Container>
        </SectionWrapper>
      ))}

      {/* CTA */}
      <SectionWrapper className="bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_60%)]" />
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Let's discuss your project and find the perfect solution for your business.
            </p>
            <div className="relative mx-auto max-w-md">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-blue-50 transition-all rounded-lg shadow-lg group relative z-10"
                data-testid="services-footer-cta"
              >
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
{/* CTAArrowPointer */}
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </main>
  );
};

export default ServicesPage;
