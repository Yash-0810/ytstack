import { motion } from 'framer-motion';

export const SectionWrapper = ({ children, className = '', id = '' }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`py-24 md:py-32 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export const SectionHeader = ({ overline, title, description, center = false }) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {overline && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs uppercase tracking-widest text-blue-600 mb-4 block"
        >
          {overline}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-slate-600 text-base md:text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export const Container = ({ children, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-24 ${className}`}>
      {children}
    </div>
  );
};
