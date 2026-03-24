import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';


const CTAArrowPointer = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none ${className}`} style={{ zIndex: 20 }}>
      {/* Animated arrow pointing to button */}
      <motion.div
        className="absolute -right-16 top-1/2 -translate-y-1/2 w-20 h-6 bg-blue-500/20 border border-blue-400/40 rounded-full backdrop-blur-sm flex items-center justify-center shadow-lg"
        animate={{
          x: [-10, 0, -10],
          scale: [0.9, 1, 0.9],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <ArrowRight size={16} className="text-blue-300" strokeWidth={2} />
      </motion.div>

      {/* Pulsing glow rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-lg border-2 border-blue-400/20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Floating sparkles */}
      <div className="absolute top-2 right-2">
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <Sparkles size={16} className="text-yellow-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default CTAArrowPointer;

