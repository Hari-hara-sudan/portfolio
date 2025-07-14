import React from 'react';
import { motion } from 'framer-motion';
import { useMobile, useReducedMotion } from '../hooks/use-mobile';

interface PerformanceWrapperProps {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  whileInView?: any;
  viewport?: any;
  whileHover?: any;
  whileTap?: any;
}

const PerformanceWrapper: React.FC<PerformanceWrapperProps> = ({
  children,
  className,
  initial,
  animate,
  transition,
  whileInView,
  viewport,
  whileHover,
  whileTap,
  ...props
}) => {
  const isMobile = useMobile();
  const prefersReducedMotion = useReducedMotion();

  // Disable animations on mobile or when reduced motion is preferred
  const shouldDisableAnimations = isMobile || prefersReducedMotion;

  if (shouldDisableAnimations) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={whileInView}
      viewport={viewport}
      whileHover={whileHover}
      whileTap={whileTap}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default PerformanceWrapper; 