import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { NetworkBackground } from "@/components/NetworkBackground";
import AbundanceHeroSection from "@/components/abundance/AbundanceHeroSection";
import ProblemSolutionSection from "@/components/abundance/ProblemSolutionSection";
import AbundanceInRelationsSection from "@/components/abundance/AbundanceInRelationsSection";
import NonTransferableSection from "@/components/abundance/NonTransferableSection";
import ThreeDataPointsSection from "@/components/abundance/ThreeDataPointsSection";
import AllocationAlgorithmSection from "@/components/abundance/AllocationAlgorithmSection";
import MathematicalPropertiesSection from "@/components/abundance/MathematicalPropertiesSection";
import WhyMinimumSection from "@/components/abundance/WhyMinimumSection";
import Why100Section from "@/components/abundance/Why100Section";
import AbundanceCTASection from "@/components/abundance/AbundanceCTASection";

export default function Abundance() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-background">
      <NetworkBackground />
      <div className="relative z-10">
        <Navigation />
        <AbundanceHeroSection />
        <ProblemSolutionSection />
        <AbundanceInRelationsSection />
        <NonTransferableSection />
        <ThreeDataPointsSection />
        <AllocationAlgorithmSection />
        <MathematicalPropertiesSection />
        <WhyMinimumSection />
        <Why100Section />
        <AbundanceCTASection />
        <Footer />
      </div>
    </div>
  );
}

