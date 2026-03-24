import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search,
  FileText,
  Palette,
  Code2,
  Bug,
  Rocket,
  Package,
  Wrench,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import { SectionWrapper, SectionHeader, Container } from '../components/SectionWrapper';

// 3D Pipeline Flow Animation
const PipelineFlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Flowing dots */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-blue-400/30 rounded-full"
          style={{ left: `${10 + i * 8}%`, top: '50%' }}
          animate={{
            x: [0, 100, 200],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

// Rotating Gears
const RotatingGears = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-20 right-[10%] w-32 h-32"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-blue-200/40">
        <path
          fill="currentColor"
          d="M50 15a35 35 0 0 1 0 70 35 35 0 0 1 0-70m0 10a25 25 0 0 0 0 50 25 25 0 0 0 0-50"
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="45"
            y="0"
            width="10"
            height="20"
            fill="currentColor"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </svg>
    </motion.div>
    <motion.div
      className="absolute bottom-32 left-[5%] w-24 h-24"
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-200/40">
        <path
          fill="currentColor"
          d="M50 20a30 30 0 0 1 0 60 30 30 0 0 1 0-60m0 10a20 20 0 0 0 0 40 20 20 0 0 0 0-40"
        />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <rect
            key={angle}
            x="45"
            y="5"
            width="10"
            height="15"
            fill="currentColor"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </svg>
    </motion.div>
  </div>
);

// Connected Nodes Animation
const ConnectedNodes = () => {
  const nodes = [
    { x: '20%', y: '20%' },
    { x: '80%', y: '25%' },
    { x: '15%', y: '60%' },
    { x: '85%', y: '70%' },
    { x: '50%', y: '40%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full">
        {/* Lines */}
        <motion.line
          x1="20%" y1="20%" x2="50%" y2="40%"
          stroke="rgba(59, 130, 246, 0.15)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.line
          x1="80%" y1="25%" x2="50%" y2="40%"
          stroke="rgba(59, 130, 246, 0.15)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
        />
        <motion.line
          x1="50%" y1="40%" x2="15%" y2="60%"
          stroke="rgba(59, 130, 246, 0.15)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity }}
        />
        <motion.line
          x1="50%" y1="40%" x2="85%" y2="70%"
          stroke="rgba(59, 130, 246, 0.15)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
        />
      </svg>
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-blue-400/30 rounded-full"
          style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and requirements.',
    details: ['Initial consultation', 'Business analysis', 'Competitor research', 'Requirements gathering']
  },
  {
    number: '02',
    icon: FileText,
    title: 'Planning',
    description: 'Creating a comprehensive project plan with structure, timeline, and milestones.',
    details: ['Site architecture', 'Technology selection', 'Timeline planning', 'Content strategy']
  },
  {
    number: '03',
    icon: Palette,
    title: 'Design',
    description: 'Creating stunning visual mockups and prototypes for your approval.',
    details: ['Wireframing', 'UI/UX design', 'Visual mockups', 'Design approval']
  },
  {
    number: '04',
    icon: Code2,
    title: 'Development',
    description: 'Building your website with clean, efficient, and scalable code.',
    details: ['Frontend development', 'Backend development', 'API integration', 'CMS setup']
  },
  {
    number: '05',
    icon: Bug,
    title: 'Testing',
    description: 'Rigorous testing to ensure everything works perfectly across all devices.',
    details: ['Functionality testing', 'Cross-browser testing', 'Performance optimization', 'Bug fixes']
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Deployment',
    description: 'Launching your website to production with proper configurations.',
    details: ['Server setup', 'Domain configuration', 'SSL installation', 'Go live']
  },
  {
    number: '07',
    icon: Package,
    title: 'What We Provide',
    description: 'Providing access, documentation, and handover for your team.',
    details: ['Credentials handover', 'Documentation', 'Best practices', 'Maintenance']
  },
  {
    number: '08',
    icon: Wrench,
    title: 'Maintenance',
    description: 'Ongoing support to keep your website running smoothly.',
    details: ['Regular updates', 'Security patches', 'Performance monitoring', 'Feature enhancements']
  }
];

// Visual Flowchart Component
const ProcessFlowchart = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-slate-50">
      <Container>
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600 mb-4 block">
            Visual Workflow
          </span>
          <h3 className="font-heading text-2xl font-bold text-slate-900">Our Development Journey</h3>
        </div>
        
        {/* Desktop Flowchart */}
        <div className="hidden lg:block relative">
          {/* First row */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {processSteps.slice(0, 4).map((step, index) => (
              <div key={step.number} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="w-32 h-32 bg-white border-2 border-blue-200 rounded-2xl flex flex-col items-center justify-center transition-all group-hover:border-blue-500 group-hover:shadow-lg shadow-md">
                    <step.icon size={28} className="text-blue-600 mb-2" strokeWidth={1.5} />
                    <span className="font-mono text-xs text-blue-500">{step.number}</span>
                    <span className="font-semibold text-sm text-slate-800 mt-1">{step.title}</span>
                  </div>
                </motion.div>
                
                {index < 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    className="flex items-center mx-3"
                  >
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full" />
                    <ArrowRight size={20} className="text-blue-400 -ml-2" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          
          {/* Vertical connector */}
          <div className="flex justify-end pr-20 mb-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-blue-300 rounded-full" />
              <ArrowDown size={20} className="text-blue-400 -mt-2" />
            </motion.div>
          </div>
          
          {/* Second row (reversed) */}
          <div className="flex items-center justify-center gap-4 flex-row-reverse">
            {processSteps.slice(4, 8).map((step, index) => (
              <div key={step.number} className="flex items-center flex-row-reverse">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="w-32 h-32 bg-white border-2 border-blue-200 rounded-2xl flex flex-col items-center justify-center transition-all group-hover:border-blue-500 group-hover:shadow-lg shadow-md">
                    <step.icon size={28} className="text-blue-600 mb-2" strokeWidth={1.5} />
                    <span className="font-mono text-xs text-blue-500">{step.number}</span>
                    <span className="font-semibold text-sm text-slate-800 mt-1">{step.title}</span>
                  </div>
                </motion.div>
                
                {index < 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                    className="flex items-center mx-3 rotate-180"
                  >
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full" />
                    <ArrowRight size={20} className="text-blue-400 -ml-2" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Flowchart */}
        <div className="lg:hidden">
          <div className="flex flex-col items-center">
            {processSteps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="w-full max-w-xs px-6 py-4 bg-white border-2 border-blue-200 rounded-xl flex items-center gap-4 shadow-md"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon size={24} className="text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-blue-500">{step.number}</span>
                    <h4 className="font-semibold text-lg text-slate-800">{step.title}</h4>
                  </div>
                </motion.div>
                
                {index < processSteps.length - 1 && (
                  <div className="flex flex-col items-center my-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-300 rounded-full" />
                    <ArrowDown size={16} className="text-blue-400 -mt-1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

const ProcessPage = () => {
  return (
    <main data-testid="process-page" className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <RotatingGears />
        <ConnectedNodes />
        <PipelineFlow />
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-100/40 to-transparent rounded-full blur-3xl" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-blue-600 mb-4 block">
              Our Process
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mb-6">
              How We Bring Your
              <br />
              <span className="text-blue-600">Vision to Life</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our proven 8-step process ensures every project is delivered on time, 
              within budget, and exceeds expectations.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Visual Flowchart */}
      <ProcessFlowchart />

      {/* Process Steps Detail */}
      <div className="bg-white">
        {processSteps.map((step, index) => (
          <SectionWrapper 
            key={step.number}
            id={`step-${step.number}`}
            className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
          >
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                      <span className="font-mono text-2xl text-white font-bold">{step.number}</span>
                    </div>
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                      <step.icon size={28} className="text-blue-600" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                    {step.title}
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed mb-8">
                    {step.description}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-lg ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <h4 className="font-mono text-xs uppercase tracking-wider text-blue-600 mb-6">
                    What's Included
                  </h4>
                  <ul className="space-y-4">
                    {step.details.map((detail, i) => (
                      <motion.li 
                        key={detail}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-center gap-4 text-slate-700"
                      >
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="font-mono text-xs text-blue-600 font-semibold">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </Container>
          </SectionWrapper>
        ))}
      </div>

      {/* CTA */}
      <SectionWrapper className="bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_60%)]" />
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Let's transform your ideas into reality with our proven development process.
            </p>
            <div className="relative mx-auto max-w-md">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-blue-50 transition-all rounded-lg shadow-lg group relative z-10"
                data-testid="process-footer-cta"
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

export default ProcessPage;
