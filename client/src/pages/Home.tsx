import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import EconomicRelationshipSection from "@/components/EconomicRelationshipSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ExampleSection from "@/components/ExampleSection";
import AudienceSection from "@/components/AudienceSection";
import TechnicalSection from "@/components/TechnicalSection";
import InvestmentSection from "@/components/InvestmentSection";
import DemoSection from "@/components/DemoSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import PledgeFormSection from "@/components/PledgeFormSection";
import CoalitionMembersSection from "@/components/CoalitionMembersSection";
import Footer from "@/components/Footer";
import { NetworkBackground } from "@/components/NetworkBackground";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <NetworkBackground />
      <div className="relative z-10 overflow-x-hidden">
        <Navigation />
        <HeroSection />
        <ProblemSection />
        <EconomicRelationshipSection />
        <HowItWorksSection />
        <ExampleSection />
        <AudienceSection />
        <TechnicalSection />
        <DemoSection />
        <VisionSection />
        <InvestmentSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
