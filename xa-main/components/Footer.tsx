import React from 'react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="border-t border-white/5 bg-[#020202] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left: Logo */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2 relative">
            {/* Ambient Backlight Glow - Reduced to 5% opacity */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 blur-[35px] rounded-full pointer-events-none"></div>
            
            <img 
              src="https://i.postimg.cc/YC1DRZwJ/xa-LTRIUM-HORIZONTAL-white-NO-BG.png" 
              alt="Xaltrium" 
              className="h-12 w-auto object-contain relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
          </div>
        </div>
        
        {/* Center: Copyright & Email */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-brand-muted text-sm text-center">
            &copy; {new Date().getFullYear()} Xaltrium. All rights reserved.
          </p>
          <a 
            href="mailto:henri@xaltrium.com"
            target="_self"
            className="text-base text-brand-muted hover:text-white transition-colors cursor-pointer"
          >
            henri@xaltrium.com
          </a>
        </div>
        
        {/* Right: Legal Links */}
        <div className="flex flex-row justify-center md:justify-end gap-6">
          <button 
            onClick={onOpenPrivacy}
            className="text-base text-brand-muted hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            Privacy Policy
          </button>
          <button 
            onClick={onOpenTerms}
            className="text-base text-brand-muted hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;