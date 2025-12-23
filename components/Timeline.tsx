import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Validation",
    desc: "A 15-minute call to confirm your service area and capacity. We only partner if we're confident we can deliver results."
  },
  {
    number: "02",
    title: "System Build",
    desc: "We build your landing pages, tracking, and ad creatives. We set up the entire infrastructure within 3-5 days."
  },
  {
    number: "03",
    title: "Live Launch",
    desc: "We turn on the traffic. Our systems start filtering for local homeowners looking for exterior cleaning immediately."
  },
  {
    number: "04",
    title: "Optimise",
    desc: "We review data weekly. We cut wasted spend and scale the winning ads to drive down your cost per quote."
  }
];

const Timeline: React.FC = () => {
  return (
    <Section id="process" className="bg-[#0A0A0A] border-y border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-white mb-4">From Audit to Leads</h2>
        <p className="text-lg text-brand-muted">A streamlined onboarding process designed to get you live in under a week.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1fc6be]/30 to-transparent"></div>

        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative z-10"
          >
            <div className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-[#1fc6be]/40 flex items-center justify-center text-base font-mono text-[#1fc6be] mb-6 mx-auto md:mx-0 shadow-[0_0_15px_rgba(31,198,190,0.3)] hover:scale-110 transition-transform duration-300">
              {step.number}
            </div>
            <h3 className="text-lg font-medium text-white mb-3 text-center md:text-left">{step.title}</h3>
            <p className="text-base text-brand-muted leading-relaxed text-center md:text-left">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Timeline;