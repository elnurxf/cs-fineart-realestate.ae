import { useState } from 'react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import HeroSection from '@/components/sections/HeroSection';
import WelcomeSection from '@/components/sections/WelcomeSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyDubaiSection from '@/components/sections/WhyDubaiSection';
import PartnersSection from '@/components/sections/PartnersSection';
import PropertiesSection from '@/components/sections/PropertiesSection';
import FAQSection from '@/components/sections/FAQSection';
import ReviewsSection from '@/components/sections/ReviewsSection';

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <SEO />
      <Header />
      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
      <main>
        <HeroSection />
        <WelcomeSection />
        <AboutSection />
        <ServicesSection />
        <WhyDubaiSection />
        <PartnersSection />
        <PropertiesSection />
        <FAQSection onOpenBookingModal={() => setBookingModalOpen(true)} />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
