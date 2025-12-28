import React, { useState } from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      ...Object.fromEntries(formData.entries()),
      submittedAt: new Date().toISOString(),
      source: window.location.hostname
    };

    console.log('Submitting to Make.com:', data);

    try {
      const response = await fetch('https://hook.eu1.make.com/1gc7mgpxsl4adht731nr59bv3ceu6jjl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
      setStatus('idle');
    }
  };

  return (
    <Section id="apply" className="max-w-3xl mx-auto">
      <div className="bg-[#0F0F10] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden relative">
        {/* Accent Glow - Updated to brand accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1fc6be]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Secure Your Pilot Spot</h2>
          <p className="text-brand-muted text-base">Limited availability for Q3. <strong>£0 management fees for approved partners.</strong></p>
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl text-white font-medium mb-2">Application Received</h3>
              <p className="text-brand-muted max-w-sm">We'll review your details and be in touch within 24 hours to schedule a brief qualification call.</p>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit} 
              className="space-y-5"
            >
              {/* Row 1: Name */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm uppercase tracking-wider text-brand-muted font-medium">First Name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1fc6be]/50 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm uppercase tracking-wider text-brand-muted font-medium">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1fc6be]/50 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Row 2: Business & Location */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="business" className="text-sm uppercase tracking-wider text-brand-muted font-medium">Business Name</label>
                  <input 
                    type="text" 
                    id="business"
                    name="business"
                    required
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1fc6be]/50 transition-colors"
                    placeholder="JD Exterior Cleaning"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm uppercase tracking-wider text-brand-muted font-medium">Location (City/County)</label>
                  <input 
                    type="text" 
                    id="location"
                    name="location"
                    required
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1fc6be]/50 transition-colors"
                    placeholder="e.g. Manchester, UK"
                  />
                </div>
              </div>

              {/* Row 3: Phone & Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <label htmlFor="phone" className="text-sm uppercase tracking-wider text-brand-muted font-medium">Phone Number</label>
                    <span className="text-[10px] text-brand-muted/50 uppercase tracking-wider">Optional</span>
                  </div>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1fc6be]/50 transition-colors"
                    placeholder="07700 900000"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm uppercase tracking-wider text-brand-muted font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1fc6be]/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Row 4: Budget */}
              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm uppercase tracking-wider text-brand-muted font-medium">Monthly Ad Budget Capacity</label>
                <select 
                  id="budget"
                  name="budget"
                  className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1fc6be]/50 transition-colors appearance-none"
                >
                  <option value="£500 - £1,000">£500 - £1,000</option>
                  <option value="£1,000 - £2,000">£1,000 - £2,000</option>
                  <option value="£2,000+">£2,000+</option>
                </select>
              </div>

              {/* Agreement Checkbox */}
              <div className="pt-2">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center h-5">
                    <input 
                      type="checkbox" 
                      id="terms-agreement" 
                      name="terms-agreement" 
                      required
                      className="w-4 h-4 rounded border-gray-600 bg-[#050505] text-[#1fc6be] focus:ring-[#1fc6be]/50 focus:ring-offset-0 cursor-pointer accent-[#1fc6be]"
                    />
                  </div>
                  <label htmlFor="terms-agreement" className="text-sm text-brand-muted leading-relaxed cursor-pointer select-none">
                    I confirm that I have read and agree to the{' '}
                    <button type="button" onClick={onOpenTerms} className="text-[#1fc6be] hover:text-[#5eead4] underline underline-offset-2 transition-colors inline-block z-10 relative">Terms of Service</button>
                    {' '}and{' '}
                    <button type="button" onClick={onOpenPrivacy} className="text-[#1fc6be] hover:text-[#5eead4] underline underline-offset-2 transition-colors inline-block z-10 relative">Privacy Policy</button>
                    . I also confirm that I am ready to start accepting leads within the next 7 days.
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full !bg-[#1fc6be] !text-black hover:!bg-[#5eead4] shadow-[0_0_20px_rgba(31,198,190,0.5)] border-none font-semibold" 
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Processing...
                    </>
                  ) : (
                    <>
                      Submit Application <Send size={18} />
                    </>
                  )}
                </Button>
              </div>
              
              <p className="text-center text-xs text-brand-muted/50 mt-4">
                Your data is secure. We hate spam as much as you do.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default ContactForm;