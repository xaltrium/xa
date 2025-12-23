import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-text text-brand-dark hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
    secondary: "bg-brand-surface border border-zinc-800 text-brand-text hover:border-zinc-600 hover:bg-zinc-800",
    outline: "bg-transparent border border-zinc-700 text-brand-muted hover:text-brand-text hover:border-brand-text",
    accent: "bg-brand-accent text-brand-dark hover:bg-brand-accentGlow hover:text-brand-dark shadow-none font-semibold",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;