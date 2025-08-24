import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
// import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
