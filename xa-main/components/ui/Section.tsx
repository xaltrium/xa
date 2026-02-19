import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  darker?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, darker = false }) => {
  return (
    <section 
      id={id} 
      // Using backdrop-blur and lower opacity on darker sections to allow subtle bleed-through of background blobs
      className={`relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto ${darker ? 'bg-[#050505]/60 backdrop-blur-sm' : ''} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;