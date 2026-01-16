import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server, Users, Globe, ExternalLink } from "lucide-react";
import { TreeMap } from "@/components/TreeMap";
import { FloatingSDG } from "@/components/FloatingSDG";

const initiatives = [
  {
    icon: Code,
    name: "Core Development",
    description: "Algorithm refinement, security hardening, and integration tools - built in the open with contributor recognition",
    color: "text-primary"
  },
  {
    icon: Globe,
    name: "Living Labs",
    description: "Interactive demonstrations showing real-time coordination - open for any organization to participate",
    color: "text-chart-2",
  },
  {
    icon: Server,
    name: "P2P Infrastructure",
    description: "Secure, federated architecture enabling coordination without central control",
    color: "text-chart-3"
  },
  {
    icon: Users,
    name: "Pilot Programs",
    description: "Real-world validation with organizations ready to experiment with values-driven resource coordination",
    color: "text-primary"
  }
];

export default function InvestmentSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="investment" className="py-16 md:py-24 relative overflow-hidden">
      {/* SDG Icons Background */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <FloatingSDG sdgNumber={17} size="lg" />
        <FloatingSDG sdgNumber={9} size="md" />
        <FloatingSDG sdgNumber={16} size="sm" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Current Focus Areas</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building planetary coordination infrastructure through open collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {initiatives.map((initiative, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all"
              data-testid={`card-initiative-${index}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <initiative.icon className={`w-6 h-6 ${initiative.color}`} />
                </div>
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">{initiative.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{initiative.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            Contributors receive recognition through the same mutual recognition system we're building. Support flows to those who create value.
          </p>
          <Button
            size="lg"
            className="gap-2"
            onClick={() => scrollToSection('contact')}
          >
            Get Involved <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
