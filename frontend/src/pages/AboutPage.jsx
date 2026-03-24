import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Users, Award } from 'lucide-react';
import { SectionWrapper, SectionHeader, Container } from '../components/SectionWrapper';

// Floating Shapes Animation
const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-20 left-[10%] w-20 h-20 border-2 border-blue-200/50 rounded-full"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 180, 360],
      }}
      transition={{ duration: 10, repeat: Infinity }}
    />
    <motion.div
      className="absolute top-40 right-[15%] w-16 h-16 border-2 border-cyan-200/50"
      style={{ transform: 'rotate(45deg)' }}
      animate={{
        y: [0, 20, 0],
        rotate: [45, 90, 45],
      }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-40 left-[20%] w-12 h-12 bg-blue-100/30 rounded-lg"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 15, 0],
      }}
      transition={{ duration: 6, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-20 right-[10%] w-24 h-24 border-2 border-blue-200/40 rounded-2xl"
      animate={{
        y: [0, -15, 0],
        x: [0, 10, 0],
      }}
      transition={{ duration: 7, repeat: Infinity }}
    />
  </div>
);

// Animated Team Icon
const TeamAnimation = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
    >
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-blue-200/30 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: `rotate(${angle}deg) translateX(250px) translateY(-50%)`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </motion.div>
  </div>
);

// DNA Helix Animation
const DNAHelix = ({ className = '' }) => (
  <div className={`absolute ${className} h-80 w-20`}>
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-full"
        style={{ top: `${i * 10}%` }}
      >
        <motion.div
          className="w-3 h-3 bg-blue-300/40 rounded-full"
          animate={{
            x: [0, 30, 0, -30, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
        <motion.div
          className="w-3 h-3 bg-cyan-300/40 rounded-full absolute right-0"
          animate={{
            x: [0, -30, 0, 30, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      </motion.div>
    ))}
  </div>
);

const values = [
  {
    icon: Zap,
    title: 'Engineering First',
    description: 'We approach every project with an engineering mindset. Clean code, scalable architecture, and performance optimization are at the core of everything we build.'
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'Our focus is on delivering measurable results. Every design decision and line of code is aimed at achieving your business objectives.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We believe in building long-term partnerships. Your success is our success, and we\'re committed to supporting you beyond project delivery.'
  },
  {
    icon: Award,
    title: 'Quality Obsessed',
    description: 'We don\'t compromise on quality. Every pixel, every interaction, every feature is crafted with attention to detail and excellence.'
  }
];

const AboutPage = () => {
  return (
    <main data-testid="about-page" className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <FloatingShapes />
        <TeamAnimation />
        <DNAHelix className="left-[5%] top-20 hidden lg:block" />
        <DNAHelix className="right-[5%] top-40 hidden lg:block" />
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-100/40 to-transparent rounded-full blur-3xl" />
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-blue-600 mb-4 block">
                About Us
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mb-6">
                We Are
                <br />
                <span className="text-blue-600">YTSTACK</span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                YTSTACK LLP is an engineering-first web development company based in Kolkata, India. 
                We specialize in creating fast, scalable, and modern web solutions that help businesses 
                establish a powerful digital presence.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our tagline <span className="text-slate-900 font-semibold">"Build • Code • Deploy"</span> represents 
                our end-to-end approach to web development – from initial concept and design to development 
                and final deployment.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="YTSTACK Team"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
              </div>
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-blue-600 p-6 rounded-xl shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="font-heading text-4xl text-white font-bold">2026</div>
                <div className="text-blue-100 text-sm">Founded</div>
              </motion.div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-blue-200 rounded-2xl" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <SectionWrapper className="bg-slate-50">
        <Container>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-blue-200 mb-4 block">
                  Our Mission
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                  Building the Future of Web
                </h2>
              </div>
              <div>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Our mission is to democratize high-quality web development by providing businesses 
                  of all sizes access to enterprise-grade digital solutions. We believe every business 
                  deserves a website that's not just beautiful, but also fast, secure, and built to grow.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-white">
        <Container>
          <SectionHeader 
            overline="Our Values"
            title="What Drives Us"
            description="The principles that guide our work and relationships."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-white border border-slate-200 rounded-2xl group hover:shadow-xl hover:border-blue-200 transition-all"
                data-testid={`value-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <value.icon size={28} className="text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{value.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper className="bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader 
                overline="Why YTSTACK"
                title="What Sets Us Apart"
                description="We're not just another web agency. Here's why businesses choose to work with us."
              />
              
              <ul className="space-y-4">
                {[
                  'Modern tech stack with React, Next.js, and Node.js',
                  'Focus on performance and Core Web Vitals',
                  'Transparent pricing with no hidden costs',
                  'Dedicated support throughout and after the project',
                  'Clean, maintainable code that scales',
                  'Local presence with global standards'
                ].map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=500&fit=crop"
                alt="Modern workspace"
                className="w-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-100/50 rounded-2xl" />
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_60%)]" />
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Ready to start your project? We'd love to hear about your ideas.
            </p>
            <div className="relative mx-auto max-w-md">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-blue-50 transition-all rounded-lg shadow-lg group relative z-10"
                data-testid="about-footer-cta"
              >
                Get In Touch
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

export default AboutPage;
