import { motion } from 'framer-motion';

export default function HolographicCard({ 
  title, 
  description, 
  icon, 
  delay = 0,
  className = '',
  glowColor = 'neon-blue',
  children 
}) {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    hover: {
      boxShadow: [
        `var(--shadow-card)`,
        `0 8px 40px hsl(var(--${glowColor}) / 0.4), 0 0 0 1px hsl(var(--${glowColor}) / 0.3)`,
        `var(--shadow-card)`
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      className={`glass-panel p-6 group cursor-pointer ${className}`}
    >
      <motion.div
        variants={glowVariants}
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: 'var(--gradient-glass)',
          border: '1px solid hsl(var(--glass-border))'
        }}
      />
      
      <div className="relative z-10">
        {icon && (
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-button-hover transition-glow"
          >
            {icon}
          </motion.div>
        )}
        
        {title && (
          <motion.h3
            whileHover={{ scale: 1.02 }}
            className="text-xl font-bold mb-3 neon-text"
          >
            {title}
          </motion.h3>
        )}
        
        {description && (
          <motion.p
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            className="text-foreground/80 leading-relaxed mb-4"
          >
            {description}
          </motion.p>
        )}
        
        {children}
      </div>
      
      {/* Holographic shimmer effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-hologram opacity-10 animate-hologram-shift rounded-3xl"></div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 bg-${glowColor} rounded-full opacity-0 group-hover:opacity-60`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [-10, -20, -10],
              x: [-5, 5, -5],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}