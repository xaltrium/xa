import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import OfferBreakdown from './components/OfferBreakdown';
import Timeline from './components/Timeline';
import TrustAndAbout from './components/TrustAndAbout';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import GlobalBackground from './components/GlobalBackground';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Modal from './components/ui/Modal';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [modalView, setModalView] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeModal = () => {
    setModalView(null);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen text-brand-text font-sans selection:bg-brand-accent selection:text-white overflow-x-hidden relative">
      <GlobalBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          {/* Always render the main landing page content */}
          <Hero />
          <ProblemSolution />
          <OfferBreakdown />
          <Timeline />
          <TrustAndAbout />
          <ContactForm 
            onOpenPrivacy={() => setModalView('privacy')} 
            onOpenTerms={() => setModalView('terms')} 
          />
        </main>

        <Footer 
          onOpenPrivacy={() => setModalView('privacy')} 
          onOpenTerms={() => setModalView('terms')} 
        />

        {/* Legal Modals */}
        <Modal 
          isOpen={modalView === 'privacy'} 
          onClose={closeModal}
          title="Privacy Policy"
        >
          <PrivacyPolicy />
        </Modal>

        <Modal 
          isOpen={modalView === 'terms'} 
          onClose={closeModal}
          title="Terms of Service"
        >
          <TermsOfService />
        </Modal>
      </div>
    </div>
  );
};

export default App;