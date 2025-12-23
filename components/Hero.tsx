import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 100;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Specific Hero Spotlight - Enhanced intensity using new teal */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,198,190,0.18),rgba(0,0,0,0)70%)]" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1fc6be]/15 border border-[#1fc6be]/30 text-sm text-brand-muted mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(31,198,190,0.15)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1fc6be] animate-pulse shadow-[0_0_8px_rgba(31,198,190,0.8)]"></span>
          Q1 Pilot Access: 3 Spots Remaining
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          A Low-Risk Pilot Offer for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1fc6be] to-[#5eead4] drop-shadow-[0_0_15px_rgba(31,198,190,0.3)]">
            Exterior Cleaning Companies.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Stop relying on referrals and "boosted" posts. We build automated acquisition systems for pressure washing, roof, and render cleaning businesses.
          <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1fc6be] to-[#5eead4] font-medium drop-shadow-[0_0_10px_rgba(31,198,190,0.5)]">
            Partner with us for £0 management fees during the pilot.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#apply" 
            onClick={(e) => handleScroll(e, '#apply')}
            className="w-full sm:w-auto cursor-pointer"
          >
            <Button className="w-full sm:w-auto relative overflow-hidden group hover:shadow-[0_0_25px_rgba(31,198,190,0.6)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1fc6be] to-[#5eead4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Apply for Pilot
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </a>
          <a 
            href="#process" 
            onClick={(e) => handleScroll(e, '#process')}
            className="w-full sm:w-auto cursor-pointer"
          >
            <Button variant="secondary" className="w-full sm:w-auto hover:border-[#1fc6be]/50 hover:text-[#1fc6be]">
              See Our Protocol
            </Button>
          </a>
        </motion.div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#1fc6be]/40 to-transparent shadow-[0_0_15px_rgba(31,198,190,0.5)]"></div>
    </section>
  );
};

export default Hero;