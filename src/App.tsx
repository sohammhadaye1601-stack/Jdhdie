import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { WhyMtsGym } from './components/WhyMtsGym';
import { GymExperience } from './components/GymExperience';
import { Facilities } from './components/Facilities';
import { Community } from './components/Community';
import { MotivationBanner } from './components/MotivationBanner';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { MembershipPlans } from './components/MembershipPlans';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EnquiryModal } from './components/EnquiryModal';
import { ImageManagerModal } from './components/ImageManagerModal';
import { useMediaConfig } from './utils/imageStore';

export default function App() {
  const { config } = useMediaConfig();
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [ownerHubOpen, setOwnerHubOpen] = useState(false);
  const [selectedPlanForEnquiry, setSelectedPlanForEnquiry] = useState<string>('3-Month Commitment');

  const handleOpenEnquiryWithPlan = (planName: string) => {
    setSelectedPlanForEnquiry(planName);
    setEnquiryModalOpen(true);
  };

  const handleScrollToLocation = () => {
    const locSection = document.getElementById('location');
    if (locSection) {
      locSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-amber-500 selection:text-black">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenEnquiry={() => setEnquiryModalOpen(true)}
        onOpenOwnerHub={() => setOwnerHubOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          heroImage={config.heroImage}
          onOpenEnquiry={() => setEnquiryModalOpen(true)}
          onScrollToLocation={handleScrollToLocation}
        />

        {/* 2. Brand Introduction */}
        <BrandIntro introImage={config.brandIntroImage} />

        {/* 3. Why MTS Gym */}
        <WhyMtsGym />

        {/* 4. Gym Experience (Editorial Gallery) */}
        <GymExperience
          galleryImages={config.galleryImages}
          onOpenOwnerHub={() => setOwnerHubOpen(true)}
        />

        {/* 5. Training & Facilities */}
        <Facilities onOpenEnquiry={() => setEnquiryModalOpen(true)} />

        {/* 6. Community Section */}
        <Community
          communityImages={config.communityImages}
          onOpenEnquiry={() => setEnquiryModalOpen(true)}
        />

        {/* 7. Motivation Section */}
        <MotivationBanner motivationImage={config.motivationImage} />

        {/* 8. Instagram Section */}
        <InstagramSection instagramImages={config.instagramImages} />

        {/* 9. Location & Timings Section */}
        <LocationSection />

        {/* Membership Options */}
        <MembershipPlans onSelectPlan={handleOpenEnquiryWithPlan} />

        {/* 10. Contact / Membership CTA */}
        <ContactCta preselectedPlan={selectedPlanForEnquiry} />
      </main>

      {/* 11. Footer */}
      <Footer onOpenOwnerHub={() => setOwnerHubOpen(true)} />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        selectedPlan={selectedPlanForEnquiry}
      />

      {/* Owner Media Hub & Photo Customizer */}
      <ImageManagerModal
        isOpen={ownerHubOpen}
        onClose={() => setOwnerHubOpen(false)}
      />
    </div>
  );
}
