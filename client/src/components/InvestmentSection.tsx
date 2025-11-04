import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server, Users, Globe } from "lucide-react";

const initiatives = [
  {
    icon: Code,
    name: "Development & Deployment",
    description: "Core infrastructure development - algorithm refinement, secure federated servers, and integration tools for organizations",
    amount: "$250K immediate",
    color: "text-primary"
  },
  {
    icon: Globe,
    name: "Interactive Demonstrations",
    description: "Living labs at global coordination bodies - UN agencies, foundations, and regional partners - showing real-time allocation",
    amount: "Part of $250K phase",
    color: "text-chart-2",
  },
  {
    icon: Server,
    name: "Secure Infrastructure",
    description: "Federated server deployment enabling privacy-preserving, peer-to-peer coordination across institutional boundaries",
    amount: "Ongoing development",
    color: "text-chart-3"
  },
  {
    icon: Users,
    name: "Landmark Pilot Program",
    description: "12-month validation with 15-20 entities coordinating $1B+ across climate, health, and humanitarian sectors",
    amount: "$25M institutional focus",
    color: "text-primary",
    roi: "Direct comparison: >95% efficiency vs ~70% traditional"
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
    <section id="investment" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Join the Initiative</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Supporting development, deployment, and validation of planetary coordination infrastructure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {initiatives.map((initiative, index) => (
            <Card 
              key={index} 
              className={`p-6 ${initiative?.highlighted ? 'border-primary border-2 bg-primary/5' : ''} hover-elevate transition-all`}
              data-testid={`card-initiative-${index}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 ${initiative?.highlighted ? 'bg-primary/10' : 'bg-muted'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <initiative.icon className={`w-6 h-6 ${initiative.color}`} />
                </div>
                {initiative?.highlighted && (
                  <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    PRIMARY FOCUS
                  </div>
                )}
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">{initiative.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{initiative.description}</p>
              {initiative.roi && (
                <div className="bg-chart-2/10 text-chart-2 px-4 py-2 rounded-lg text-sm font-medium mb-3">
                  {initiative.roi}
                </div>
              )}
              <div className="text-lg font-semibold text-primary">
                {initiative.amount}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
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
