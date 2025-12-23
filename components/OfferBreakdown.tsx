import React from 'react';
import Section from './ui/Section';
import { Check, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const OfferBreakdown: React.FC = () => {
  return (
    <Section id="offer">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">The Pilot Partnership</h2>
        <p className="text-lg text-brand-muted max-w-2xl mx-auto">
          We are opening 3 spots to <strong>validate our latest strategies</strong>. You get professional agency management with £0 service fees; we get the data to prove our concept.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1: Who */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-[#0F0F10] border border-white/5 rounded-xl p-8 flex flex-col hover:border-[#1fc6be]/20 transition-colors"
        >
          <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg text-white">
            <Zap size={24} />
          </div>
          <h3 className="text-xl font-medium text-white mb-4">Partner Criteria</h3>
          <ul className="space-y-3 mb-8 flex-1">
            <li className="flex items-start gap-3 text-brand-muted text-base">
              <Check size={18} className="text-[#1fc6be] mt-0.5 shrink-0" />
              <span>UK Pressure / Soft Washing Business</span>
            </li>
            <li className="flex items-start gap-3 text-brand-muted text-base">
              <Check size={18} className="text-[#1fc6be] mt-0.5 shrink-0" />
              <span>Proven track record (reviews/portfolio)</span>
            </li>
            <li className="flex items-start gap-3 text-brand-muted text-base">
              <Check size={18} className="text-[#1fc6be] mt-0.5 shrink-0" />
              <span>Capable of handling 10-20 extra quotes a month</span>
            </li>
          </ul>
        </motion.div>

        {/* Card 2: What's Included */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gradient-to-b from-[#111113] to-[#0A0A0A] border border-[#1fc6be]/50 rounded-xl p-8 flex flex-col relative shadow-[0_0_40px_rgba(31,198,190,0.15)] overflow-hidden"
        >
          {/* Internal Glow */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1fc6be] to-transparent opacity-50"></div>
          
          <div className="absolute top-0 right-0 bg-[#1fc6be] text-xs font-bold px-3 py-1 rounded-bl-lg text-black shadow-[0_0_15px_rgba(31,198,190,0.5)]">
            PILOT ACCESS
          </div>
          <div className="mb-6 p-3 bg-[#1fc6be]/20 w-fit rounded-lg text-[#1fc6be] border border-[#1fc6be]/30 shadow-[0_0_15px_rgba(31,198,190,0.2)]">
            <Check size={24} />
          </div>
          <h3 className="text-xl font-medium text-white mb-4">The System</h3>
          <ul className="space-y-3 mb-8 flex-1">
            <li className="flex items-start gap-3 text-gray-300 text-base">
              <Check size={18} className="text-[#1fc6be] mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(31,198,190,0.5)]" />
              <span>High-Converting Meta Ads Setup</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300 text-base">
              <Check size={18} className="text-[#1fc6be] mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(31,198,190,0.5)]" />
              <span>Pre-Qualification Landing Page</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300 text-base">
              <Check size={18} className="text-[#1fc6be] mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(31,198,190,0.5)]" />
              <span>Real-Time Lead Notifications</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300 text-base">
              <Check size={18} className="text-[#1fc6be] mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(31,198,190,0.5)]" />
              <span>Automated Email/SMS Nurture</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300 text-base">
              <Check size={18} className="text-[#1fc6be] mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(31,198,190,0.5)]" />
              <span>Weekly Optimization & Reporting</span>
            </li>
          </ul>
        </motion.div>

        {/* Card 3: The Deal */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-[#0F0F10] border border-white/5 rounded-xl p-8 flex flex-col hover:border-[#1fc6be]/20 transition-colors"
        >
          <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg text-white">
            <Shield size={24} />
          </div>
          <h3 className="text-xl font-medium text-white mb-4">Why Join Now?</h3>
          <ul className="space-y-3 mb-8 flex-1">
            <li className="flex items-start gap-3 text-brand-muted text-base">
              <Check size={18} className="text-[#1fc6be] mt-0.5 shrink-0" />
              <span className="text-white font-medium">£0 Agency Management Fees</span>
            </li>
            <li className="flex items-start gap-3 text-brand-muted text-base">
              <Check size={18} className="text-[#1fc6be] mt-0.5 shrink-0" />
              <span>You Only Pay For Ad Spend</span>
            </li>
            <li className="flex items-start gap-3 text-brand-muted text-base">
              <Check size={18} className="text-[#1fc6be] mt-0.5 shrink-0" />
              <span>No Long-Term Contracts</span>
            </li>
            <li className="flex items-start gap-3 text-brand-muted text-base">
              <Check size={18} className="text-[#1fc6be] mt-0.5 shrink-0" />
              <span>Complete Data Transparency</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};

export default OfferBreakdown;