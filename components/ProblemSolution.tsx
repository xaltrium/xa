import React from 'react';
import Section from './ui/Section';
import { XCircle, CheckCircle2, TrendingUp, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemSolution: React.FC = () => {
  return (
    <Section id="approach" className="border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-white mb-6">Stop Burning Cash on<br />"Generalist" Agencies.</h2>
          <p className="text-lg text-brand-muted mb-8 leading-relaxed">
            Most local ads fail because they treat driveway cleaning the same as selling t-shirts. They run generic ads, send traffic to a slow homepage, and never follow up.
          </p>
          
          <div className="space-y-4">
            {[
              "Leads that never answer the phone",
              "Paying for 'clicks' that don't convert",
              "No system to nurture enquiries into bookings"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-brand-muted/80 text-lg">
                <XCircle size={24} className="text-red-500/50 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#1fc6be]/20 to-[#5eead4]/20 rounded-2xl blur-xl opacity-60"></div>
          <div className="relative bg-[#0F0F10] border border-white/10 rounded-xl p-8 overflow-hidden hover:border-[#1fc6be]/30 transition-colors duration-300">
            
            <h3 className="text-xl font-medium text-white mb-6">The Xaltrium Protocol</h3>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex gap-4 group"
              >
                <div className="p-3 rounded-lg bg-[#1fc6be]/10 text-brand-accent border border-[#1fc6be]/20 h-fit shadow-[0_0_15px_rgba(31,198,190,0.15)] group-hover:shadow-[0_0_20px_rgba(31,198,190,0.3)] transition-shadow">
                  <Filter size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-[#1fc6be] transition-colors text-lg">Active Qualification</h4>
                  <p className="text-base text-brand-muted">We filter out the tyre-kickers. You only speak to homeowners ready to book a quote.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex gap-4 group"
              >
                <div className="p-3 rounded-lg bg-[#1fc6be]/10 text-brand-accent border border-[#1fc6be]/20 h-fit shadow-[0_0_15px_rgba(31,198,190,0.15)] group-hover:shadow-[0_0_20px_rgba(31,198,190,0.3)] transition-shadow">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-[#1fc6be] transition-colors text-lg">Profit-First Tracking</h4>
                  <p className="text-base text-brand-muted">We don't care about 'likes'. We track booked jobs and revenue to prove ROI.</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex gap-4 group"
              >
                <div className="p-3 rounded-lg bg-[#1fc6be]/10 text-brand-accent border border-[#1fc6be]/20 h-fit shadow-[0_0_15px_rgba(31,198,190,0.15)] group-hover:shadow-[0_0_20px_rgba(31,198,190,0.3)] transition-shadow">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-[#1fc6be] transition-colors text-lg">Rapid Iteration</h4>
                  <p className="text-base text-brand-muted">We test new angles weekly. If an ad doesn't bring in quotes, we cut it immediately.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProblemSolution;