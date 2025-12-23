import React from 'react';
import { Scale, AlertTriangle, FileText, Check, Shield } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="border-b border-white/10 pb-8">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1fc6be]/10 border border-[#1fc6be]/20 text-xs text-[#1fc6be] mb-6">
          <Scale size={12} />
          <span>Effective Date: {new Date().toLocaleDateString()}</span>
        </div>
        <p className="text-brand-muted text-lg leading-relaxed">
          These terms govern your application to and participation in the Xaltrium Pilot Program. 
          We value clarity over legalese, but it is important we agree on the nature of this partnership.
        </p>
      </div>

      <div className="space-y-12">
        {/* Section 1: Nature of Pilot */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FileText className="text-[#1fc6be]" size={20} />
            <h3 className="text-xl font-semibold text-white m-0">1. Nature of the Pilot Program</h3>
          </div>
          <p className="text-brand-muted leading-relaxed">
            You acknowledge that the Xaltrium Pilot Program is a <strong>validation phase</strong> service. While we utilize proven marketing principles, specific results (lead volume, cost per lead) vary by location and market conditions.
          </p>
          <div className="p-4 bg-[#1fc6be]/10 border border-[#1fc6be]/20 rounded-xl flex gap-4 mt-2">
            <AlertTriangle className="text-[#1fc6be] shrink-0 mt-1" size={20} />
            <div>
              <h4 className="text-[#1fc6be] font-medium text-sm mb-1">No Guaranteed Results</h4>
              <p className="text-brand-muted text-xs md:text-sm leading-relaxed">
                We do not guarantee a specific number of leads or a specific Return on Ad Spend (ROAS). Marketing involves testing and iteration. We guarantee disciplined execution of our protocol, not the market's reaction to it.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Financials */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="text-[#1fc6be]" size={20} />
            <h3 className="text-xl font-semibold text-white m-0">2. Ad Spend & Payments</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#0F0F10] p-5 rounded-xl border border-white/5">
              <h4 className="text-white font-medium mb-3">Client Responsibilities</h4>
              <ul className="space-y-2 text-brand-muted text-sm">
                <li className="flex gap-2">
                  <Check size={16} className="text-[#1fc6be] mt-0.5 shrink-0" />
                  <span>You pay the ad platforms (Meta/Google) directly.</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-[#1fc6be] mt-0.5 shrink-0" />
                  <span>You must maintain a valid payment method on your ad account.</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0F0F10] p-5 rounded-xl border border-white/5">
              <h4 className="text-white font-medium mb-3">Agency Fees</h4>
              <ul className="space-y-2 text-brand-muted text-sm">
                <li className="flex gap-2">
                  <Check size={16} className="text-[#1fc6be] mt-0.5 shrink-0" />
                  <span><strong>£0 Management Fee</strong> for pilot duration.</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-[#1fc6be] mt-0.5 shrink-0" />
                  <span>No hidden setup costs or retainers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: IP */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">3. Intellectual Property</h3>
          <p className="text-brand-muted leading-relaxed">
            <strong>Your Assets:</strong> You retain ownership of your ad accounts and any specific creative assets (photos/videos) you provide.
          </p>
          <p className="text-brand-muted leading-relaxed">
            <strong>Our Protocol:</strong> Xaltrium retains ownership of our proprietary methodologies, ad copy templates, and funnel structures, though you are granted a license to use the specific instance built for you during our engagement.
          </p>
        </div>

        {/* Section 4: Termination */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">4. Termination</h3>
          <p className="text-brand-muted leading-relaxed">
            <strong>No Lock-in:</strong> During the pilot phase, services operate on a month-to-month basis. Either party may terminate the agreement with 7 days' written notice before the next billing cycle.
          </p>
        </div>

        {/* Section 5: Liability */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">5. Liability</h3>
          <p className="text-brand-muted leading-relaxed">
            To the maximum extent permitted by UK law, Xaltrium shall not be liable for any indirect, incidental, or consequential damages (including loss of profits) arising from the use of our services or the performance of ad campaigns.
          </p>
        </div>

        {/* Section 6: Governing Law */}
        <div className="space-y-2 border-t border-white/10 pt-8">
          <h3 className="text-xl font-semibold text-white">6. Governing Law</h3>
          <p className="text-brand-muted leading-relaxed">
            These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;