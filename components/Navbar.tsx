import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close menu when a link is clicked
    
    // Add a small delay to ensure the menu state updates and layout stabilizes before scrolling
    setTimeout(() => {
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
    }, 100);
  };

  const navLinks = [
    { name: 'Approach', href: '#approach' },
    { name: 'Pilot Offer', href: '#offer' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
  ];

  // Ensure background is visible if scrolled OR if mobile menu is open
  const isBackgroundVisible = scrolled || mobileMenuOpen;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isBackgroundVisible ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-24 flex items-center justify-between relative z-50">
        <a href="#" className="flex items-center relative group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          {/* Ambient Backlight Glow - Reduced opacity */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-2/3 bg-white/5 blur-[25px] rounded-full pointer-events-none"></div>
          
          <img 
            src="https://i.postimg.cc/YC1DRZwJ/xa-LTRIUM-HORIZONTAL-white-NO-BG.png" 
            alt="Xaltrium" 
            className="h-16 w-auto object-contain relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-base text-brand-muted hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#apply"
            onClick={(e) => handleLinkClick(e, '#apply')}
            className="text-base font-medium px-4 py-2 bg-white/5 border border-[#1fc6be]/30 rounded text-white hover:bg-[#1fc6be]/10 transition-all shadow-[0_0_10px_rgba(31,198,190,0.1)] hover:shadow-[0_0_15px_rgba(31,198,190,0.2)] cursor-pointer"
          >
            Apply for Pilot
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none hover:text-[#1fc6be] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0A0A0A] border-b border-white/10 overflow-hidden absolute top-full left-0 right-0 w-full shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-brand-muted hover:text-white hover:pl-2 transition-all text-lg cursor-pointer font-medium border-b border-white/5 pb-2 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#apply"
                onClick={(e) => handleLinkClick(e, '#apply')}
                className="text-center font-medium px-4 py-4 bg-[#1fc6be]/10 border border-[#1fc6be]/30 rounded-lg text-[#1fc6be] hover:bg-[#1fc6be]/20 transition-all text-lg cursor-pointer mt-2"
              >
                Apply for Pilot
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;