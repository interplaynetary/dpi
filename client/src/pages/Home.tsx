import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ExampleSection from "@/components/ExampleSection";
import TechnicalSection from "@/components/TechnicalSection";
import MarketSection from "@/components/MarketSection";
import TractionSection from "@/components/TractionSection";
import TimelineSection from "@/components/TimelineSection";
import InvestmentSection from "@/components/InvestmentSection";
import DemoSection from "@/components/DemoSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <ExampleSection />
      <TechnicalSection />
      <MarketSection />
      <TractionSection />
      <TimelineSection />
      <InvestmentSection />
      <DemoSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
