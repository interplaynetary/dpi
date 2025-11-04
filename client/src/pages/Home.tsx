import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import EconomicRelationshipSection from "@/components/EconomicRelationshipSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ExampleSection from "@/components/ExampleSection";
import AudienceSection from "@/components/AudienceSection";
import MetricsSection from "@/components/MetricsSection";
import TechnicalSection from "@/components/TechnicalSection";
import MomentumSection from "@/components/MomentumSection";
import TimelineSection from "@/components/TimelineSection";
import InvestmentSection from "@/components/InvestmentSection";
import DemoSection from "@/components/DemoSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { NetworkBackground } from "@/components/NetworkBackground";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <NetworkBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ProblemSection />
        <EconomicRelationshipSection />
        <HowItWorksSection />
        <ExampleSection />
        <AudienceSection />
        <MetricsSection />
        <TechnicalSection />
        <MomentumSection />
        <DemoSection />
        <VisionSection />
        <TimelineSection />
        <InvestmentSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
