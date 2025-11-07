import { Card } from "@/components/ui/card";
import { Building2, Landmark, Globe2, Building } from "lucide-react";
import { FloatingSDG } from "@/components/FloatingSDG";

const useCases = [
  {
    icon: Building2,
    name: "Climate Coordination",
    description: "Adaptation funds, technology transfer, capacity building",
    color: "chart-1"
  },
  {
    icon: Landmark,
    name: "Humanitarian Response",
    description: "Emergency relief, refugee support, disaster recovery",
    color: "chart-2"
  },
  {
    icon: Globe2,
    name: "Development Programs",
    description: "Health systems, education, infrastructure, agriculture",
    color: "chart-3"
  },
  {
    icon: Building,
    name: "Local Commons",
    description: "Community resources, mutual aid, cooperative projects",
    color: "chart-4"
  }
];

export default function MarketSection() {
  return (
    <section id="impact" className="py-20 md:py-32 relative overflow-hidden">
      {/* SDG Icons Background */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <FloatingSDG sdgNumber={13} size="md" />
        <FloatingSDG sdgNumber={3} size="lg" />
        <FloatingSDG sdgNumber={11} size="sm" />
        <FloatingSDG sdgNumber={2} size="md" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Coordination Use Cases</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Applicable wherever entities need to coordinate resources based on shared values and mutual recognition
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-sector-${index}`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-${useCase.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <useCase.icon className={`w-6 h-6 text-${useCase.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{useCase.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
