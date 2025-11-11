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

        <div className="max-w-6xl mx-auto mt-12">
          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">Collective Resource Distribution</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  This distribution represents our initial planning. However, <span className="font-semibold text-foreground">final allocations will be determined by the Collective Recognition module</span> we're building - where contributors receive resources proportionally to mutual recognition.
                </p>
                <div className="pt-2">
                  <a 
                    href="https://playnet.gitbook.io/docs/collective-recognition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Learn about Collective Recognition <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    Resource allocation will be proportional to mutual recognition shares - determined by contributors themselves, not by central planning.
                  </p>
                </div>
              </div>
              
              {/* Right Side - TreeMap */}
              <div className="flex items-center justify-center">
                <TreeMap 
                  data={{
                    name: "Development Resources",
                    children: [
                      {
                        name: "Operations & Coordination",
                        value: 40,
                        description: "Participant support & monitoring",
                        color: "hsl(200, 85%, 55%)"
                      },
                      {
                        name: "Technology & Infrastructure",
                        value: 32,
                        description: "Secure P2P software & servers",
                        color: "hsl(150, 70%, 50%)"
                      },
                      {
                        name: "Research & Validation",
                        value: 20,
                        description: "Academic validation & measurement",
                        color: "hsl(280, 60%, 60%)"
                      },
                      {
                        name: "Contingency",
                        value: 8,
                        description: "Adaptive capacity",
                        color: "hsl(25, 85%, 60%)"
                      }
                    ]
                  }}
                  width={500}
                  height={350}
                />
              </div>
            </div>
          </Card>
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
