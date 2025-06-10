import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import IntegrationCarousel from "@/components/IntegrationCarousel";
import DataIntegritySection from "@/components/DataIntegritySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProcessSection />
      <IntegrationCarousel />
      <DataIntegritySection />
      <FinalCTASection />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
