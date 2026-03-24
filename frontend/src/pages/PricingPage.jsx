import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Plus, Sparkles } from 'lucide-react';
import { SectionWrapper, SectionHeader, Container } from '../components/SectionWrapper';

// 3D Floating Price Tags
const FloatingPriceTags = () => {
  const tags = [
    { text: '₹', top: '15%', left: '8%', size: 'text-4xl' },
    { text: '%', top: '25%', right: '10%', size: 'text-3xl' },
    { text: '₹', bottom: '35%', left: '5%', size: 'text-2xl' },
    { text: '+', top: '50%', right: '8%', size: 'text-3xl' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {tags.map((tag, i) => (
        <motion.div
          key={i}
          className={`absolute ${tag.size} font-bold text-blue-300/40`}
          style={{ top: tag.top, left: tag.left, right: tag.right, bottom: tag.bottom }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {tag.text}
        </motion.div>
      ))}
    </div>
  );
};

// Animated Circles
const AnimatedCircles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-20 right-20 w-64 h-64 border-2 border-blue-200/30 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    />
    <motion.div
      className="absolute bottom-20 left-20 w-48 h-48 border-2 border-cyan-200/30 rounded-full"
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-100/30 rounded-full"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
  </div>
);

// 3D Card Stack Effect
const CardStack = ({ className = '' }) => (
  <div className={`absolute ${className}`} style={{ perspective: '1000px' }}>
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute w-20 h-28 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg border border-blue-200/50 shadow-lg"
        style={{
          transformStyle: 'preserve-3d',
          zIndex: 3 - i,
        }}
        animate={{
          rotateY: [0, 10, 0],
          rotateX: [0, 5, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: i * 0.3,
        }}
        initial={{
          x: i * 8,
          y: i * 8,
        }}
      />
    ))}
  </div>
);

const pricingPlans = [
  {
    name: 'Origin',
    subtitle: 'Starter',
    price: '₹5,000',
    description: 'Perfect for small businesses and startups looking to establish their online presence.',
    features: [
      { text: '3-5 Pages', included: true },
      { text: 'Responsive Design', included: true },
      { text: 'Basic SEO Setup', included: true },
      { text: 'Contact Form', included: true },
      { text: 'Mobile Optimized', included: true },
      { text: 'CMS Integration', included: false },
      { text: 'Advanced Animations', included: false },
      { text: 'Maintenance Support', included: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Momentum',
    subtitle: 'Most Popular',
    price: '₹17,999',
    description: 'Ideal for growing businesses that need more features and ongoing support.',
    features: [
      { text: '5-10 Pages', included: true },
      { text: 'Premium UI/UX Design', included: true },
      { text: 'CMS Integration', included: true },
      { text: 'SEO Optimized', included: true },
      { text: 'Fast Performance', included: true },
      { text: 'Social Media Integration', included: true },
      { text: '1 Year Maintenance', included: true },
      { text: 'Priority Support', included: false },
    ],
    popular: true,
    cta: 'Get Started',
  },
  {
    name: 'Apex',
    subtitle: 'Premium',
    price: '₹32,999',
    description: 'Enterprise-grade solution for businesses requiring maximum customization and support.',
    features: [
      { text: 'Fully Custom Design', included: true },
      { text: 'Advanced Animations', included: true },
      { text: 'CMS + Scalable Structure', included: true },
      { text: 'High Performance Optimization', included: true },
      { text: 'Advanced SEO Strategy', included: true },
      { text: 'E-commerce Ready', included: true },
      { text: 'Priority Support', included: true },
      { text: '1 Year Maintenance', included: true },
    ],
    cta: 'Contact Us',
  },
];

const addOns = [
  {
    name: 'SEO Setup',
    price: '₹2,399',
    description: 'Complete technical SEO setup with keyword research and on-page optimization.',
  },
  {
    name: 'eCommerce Integration',
    price: '₹14,999',
    description: 'Full shopping cart, payment gateway, and product management system.',
  },
  {
    name: 'CMS Integration',
    price: '₹3,999',
    description: 'Easy-to-use content management system for updating your website.',
  },
  {
    name: 'Branding Kit',
    price: '₹7,999',
    description: 'Logo design, color palette, typography, and brand guidelines.',
  },
  {
    name: 'Google Ads Setup',
    price: '₹6,999',
    description: 'Campaign setup, keyword research, and initial optimization.',
  },
];

const PricingPage = () => {
  return (
    <main data-testid="pricing-page" className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <AnimatedCircles />
        <FloatingPriceTags />
        <CardStack className="top-32 right-[15%] hidden lg:block" />
        <CardStack className="bottom-20 left-[10%] hidden lg:block" />
        
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-blue-600 mb-4 block">
              Pricing Plans
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mb-6">
              Transparent Pricing
              <br />
              <span className="text-blue-600">No Surprises</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Choose the package that fits your needs. All plans include quality craftsmanship 
              and dedicated support throughout the project.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <SectionWrapper className="bg-white pt-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: plan.popular ? -12 : -8 }}
                className={`relative h-full rounded-2xl ${
                  plan.popular 
                    ? 'bg-blue-600 text-white shadow-2xl shadow-blue-600/30' 
                    : 'bg-white border border-slate-200 hover:shadow-xl transition-shadow'
                }`}
                data-testid={`pricing-plan-${plan.name.toLowerCase()}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 px-4 py-1 font-mono text-xs uppercase tracking-wider rounded-full flex items-center gap-2">
                    <Sparkles size={12} />
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`font-mono text-xs uppercase tracking-wider mb-2 ${plan.popular ? 'text-blue-200' : 'text-blue-600'}`}>
                    {plan.subtitle}
                  </div>
                  <h3 className={`font-heading text-3xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className={`font-heading text-4xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                    <span className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-slate-400'}`}>onwards</span>
                  </div>
                  <p className={`text-sm mb-8 min-h-[3rem] ${plan.popular ? 'text-blue-100' : 'text-slate-600'}`}>{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li 
                        key={feature.text} 
                        className={`flex items-center gap-3 text-sm ${
                          feature.included 
                            ? plan.popular ? 'text-blue-100' : 'text-slate-700'
                            : plan.popular ? 'text-blue-300/50' : 'text-slate-400'
                        }`}
                      >
                        <Check 
                          size={16} 
                          className={`flex-shrink-0 ${
                            feature.included 
                              ? plan.popular ? 'text-cyan-400' : 'text-blue-600'
                              : plan.popular ? 'text-blue-400/30' : 'text-slate-300'
                          }`} 
                        />
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block text-center py-4 font-semibold text-sm uppercase tracking-wider transition-all rounded-xl ${
                      plan.popular
                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Add-ons */}
      <SectionWrapper className="bg-slate-50">
        <Container>
          <SectionHeader 
            overline="Add-ons"
            title="Enhance Your Package"
            description="Additional services to boost your website's functionality and reach."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white border border-slate-200 rounded-xl group cursor-pointer hover:shadow-lg hover:border-blue-200 transition-all"
                data-testid={`addon-${index}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-heading text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{addon.name}</h4>
                  <div className="flex items-center gap-1 text-blue-600">
                    <Plus size={14} />
                    <span className="font-mono text-sm font-semibold">{addon.price}</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* FAQ/Note */}
      <SectionWrapper className="bg-white">
        <Container>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 md:p-12 rounded-2xl border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">
                  Custom Requirements?
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Every business is unique. If you have specific requirements that don't fit into 
                  our standard packages, let's talk. We'll create a custom solution tailored to your needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider hover:gap-4 transition-all"
                  data-testid="custom-quote-link"
                >
                  Get Custom Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {[
                    'Free consultation and requirement analysis',
                    'Modern, responsive design',
                    'Clean, maintainable code',
                    'Testing across devices and browsers',
                    'Basic training on how to use your website',
                    'Post-launch support period'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-gradient-to-r from-blue-600 to-blue-700">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Let's discuss your requirements and find the perfect solution for your business.
            </p>
            <div className="relative mx-auto max-w-md">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-blue-50 transition-all rounded-lg shadow-lg group relative z-10"
                data-testid="pricing-footer-cta"
              >
                Contact Us
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

export default PricingPage;
