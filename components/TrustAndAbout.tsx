import React from 'react';
import Section from './ui/Section';
import { Lock, Wallet, Eye } from 'lucide-react';

const TrustAndAbout: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* About Column */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Built on Logic, Not Hype.</h2>
          <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
            <p>
              Xaltrium isn't a "full-service" creative agency. We don't design logos or post fluff on Instagram. We build direct-response acquisition systems.
            </p>
            <p>
              We focus exclusively on the exterior cleaning industry because we know what works. We don't guess. We deploy proven frameworks to generate quotes, not just clicks.
            </p>
            
            <div className="p-6 bg-[#1fc6be]/5 border border-[#1fc6be]/20 rounded-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-3 opacity-10">
                 <Wallet className="text-[#1fc6be]" size={64} />
               </div>
               <h4 className="text-white font-medium mb-3 text-lg relative z-10">The Pilot Exchange</h4>
               <p className="text-base text-brand-muted/90 relative z-10">
                 We are running this pilot to <strong>validate our strategies</strong> in the field. We waive our standard management fees entirely. You get professional marketing management & results; we get the data & case studies.
               </p>
            </div>
          </div>
        </div>

        {/* Risk Reversal Column */}
        <div className="bg-[#0F0F10] rounded-xl p-8 border border-[#1fc6be]/30 shadow-[0_0_30px_rgba(31,198,190,0.1)] hover:border-[#1fc6be]/50 hover:shadow-[0_0_40px_rgba(31,198,190,0.15)] transition-all duration-300">
          <h3 className="text-xl font-medium text-white mb-6">Total Risk Control</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <Wallet size={24} className="text-[#1fc6be] drop-shadow-[0_0_8px_rgba(31,198,190,0.5)]" />
              </div>
              <div>
                <h4 className="text-white text-base font-medium mb-1">£0 Management Fee</h4>
                <p className="text-sm text-brand-muted">We waive our standard monthly retainer for pilot partners. You strictly pay the ad platforms.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <Eye size={24} className="text-[#1fc6be] drop-shadow-[0_0_8px_rgba(31,198,190,0.5)]" />
              </div>
              <div>
                <h4 className="text-white text-base font-medium mb-1">100% Account Transparency</h4>
                <p className="text-sm text-brand-muted">You own the ad account. You see every penny spent and every lead generated in real-time.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <Lock size={24} className="text-[#1fc6be] drop-shadow-[0_0_8px_rgba(31,198,190,0.5)]" />
              </div>
              <div>
                <h4 className="text-white text-base font-medium mb-1">No Lock-In Contracts</h4>
                <p className="text-sm text-brand-muted">We operate month-to-month. If we don't perform, you don't stay. It's that simple.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TrustAndAbout;