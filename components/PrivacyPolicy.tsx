import React from 'react';
import { Shield, Lock, Database, Globe, Scale } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1fc6be]/10 border border-[#1fc6be]/20 text-xs text-[#1fc6be] mb-6">
          <Shield size={12} />
          <span>Last Updated: {new Date().toLocaleDateString()}</span>
        </div>
        <p className="text-brand-muted text-lg leading-relaxed">
          At Xaltrium, we believe in radical transparency. We are a marketing agency, not a data broker. 
          This policy outlines exactly what we collect, why we collect it, and how we protect it. By using our website and services, you agree to the collection and use of information in accordance with this policy.
        </p>
      </div>

      <div className="space-y-12">
        {/* Section 1: Information Collection */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Database className="text-[#1fc6be]" size={20} />
            <h3 className="text-xl font-semibold text-white m-0">1. Information We Collect</h3>
          </div>
          <p className="text-brand-muted leading-relaxed">
            We only collect information necessary to evaluate your suitability for our Pilot Partnership and to deliver our services.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-[#0F0F10] p-5 rounded-xl border border-white/5">
              <h4 className="text-white font-medium mb-2">Personal Data</h4>
              <p className="text-sm text-brand-muted leading-relaxed mb-3">
                Identifiable information provided during application:
              </p>
              <ul className="list-disc list-inside text-sm text-brand-muted space-y-1">
                <li>Name and Business Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Business Location (City/County)</li>
                <li>Advertising Budget Capacity</li>
              </ul>
            </div>

            <div className="bg-[#0F0F10] p-5 rounded-xl border border-white/5">
              <h4 className="text-white font-medium mb-2">Usage Data</h4>
              <p className="text-sm text-brand-muted leading-relaxed">
                Information on how the Service is accessed (IP address, browser type, visit duration) to help us optimize our infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: How We Use Data */}
        <div className="space-y-4">
           <div className="flex items-center gap-3">
            <Globe className="text-[#1fc6be]" size={20} />
            <h3 className="text-xl font-semibold text-white m-0">2. How We Use Your Data</h3>
          </div>
          <ul className="space-y-2 text-brand-muted">
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1fc6be] mt-2.5 shrink-0"></span>
              <span><strong>Pilot Assessment:</strong> Vetting applications for our partnership program.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1fc6be] mt-2.5 shrink-0"></span>
              <span><strong>Communication:</strong> Contacting you about your application or service updates.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1fc6be] mt-2.5 shrink-0"></span>
              <span><strong>Analytics:</strong> Improving the performance of our website and funnel.</span>
            </li>
          </ul>
        </div>

        {/* Section 3: Data Retention & Security */}
        <div className="space-y-4">
           <div className="flex items-center gap-3">
            <Lock className="text-[#1fc6be]" size={20} />
            <h3 className="text-xl font-semibold text-white m-0">3. Data Retention & Security</h3>
          </div>
          <p className="text-brand-muted leading-relaxed">
            We retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We employ commercially acceptable means to protect your data, though no digital transmission is 100% secure.
          </p>
        </div>

        {/* Section 4: GDPR Rights */}
        <div className="space-y-4">
           <div className="flex items-center gap-3">
            <Scale className="text-[#1fc6be]" size={20} />
            <h3 className="text-xl font-semibold text-white m-0">4. Your Data Protection Rights (GDPR)</h3>
          </div>
          <p className="text-brand-muted leading-relaxed">
            If you are a resident of the EEA or UK, you have rights to access, rectify, erasure, restrict processing, and object to processing of your Personal Data.
          </p>
        </div>

        {/* Section 5: Contact */}
        <div className="pt-8 border-t border-white/10 mt-8">
          <h3 className="text-xl font-semibold text-white mb-2">Contact Us</h3>
          <p className="text-brand-muted mb-4">
            For any privacy-related inquiries:
          </p>
          <a 
            href="mailto:henri@xaltrium.com" 
            target="_self"
            className="text-[#1fc6be] hover:text-[#5eead4] transition-colors font-medium"
          >
            henri@xaltrium.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;