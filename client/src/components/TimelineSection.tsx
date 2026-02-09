import { Card } from "@/components/ui/card";
import { Lightbulb, Rocket, Globe, ExternalLink } from "lucide-react";
import { TreeMap } from "@/components/TreeMap";

const phases = [
  {
    icon: Lightbulb,
    phase: "HAPPENING NOW",
    title: "Global Living Labs",
    timeline: "Ongoing",
    description: "Interactive demonstrations at UN agencies, foundations, and coordination bodies worldwide",
    outcomes: [
      "Direct stakeholder experience",
      "Convene key decision-makers",
      "Build credibility through partnerships",
      "Gather feedback & iterate"
    ],
    status: "in_progress",
    highlighted: true
  },
  {
    icon: Rocket,
    phase: "HAPPENING NOW",
    title: "Organizational Pilots",
    timeline: "Ongoing",
    description: "Organizations piloting with portions of their budgets while being part of the coalition network",
    outcomes: [
      "Real-world validation in diverse contexts",
      "Each organization chooses scale and focus",
      "15-20 active members coordinating $500M-$1B+"
    ],
    status: "ready",
    highlighted: true
  },
  {
    icon: Globe,
    phase: "FUTURE",
    title: "Global Scale",
    timeline: "18-24 Months",
    description: "Open-source DPI adopted by governments, multilaterals, and civil society worldwide",
    outcomes: [
      "Published technical standards",
      "Implementation guidelines",
      "Policy integration recommendations"
    ],
    status: "planned"
  }
];

export default function TimelineSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">The Path Forward</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From prototype to global infrastructure - a clear roadmap for planetary coordination
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {phases.map((phase, phaseIndex) => (
            <Card 
              key={phaseIndex} 
              className={`p-6 ${phase.highlighted ? 'border-primary border-2 bg-primary/5' : ''} hover-elevate transition-all`}
              data-testid={`phase-${phaseIndex}`}
            >
              <div className="space-y-4">
                <div>
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                    phase.status === 'in_progress' ? 'bg-chart-2/10' : 
                    phase.status === 'ready' ? 'bg-primary/10' : 
                    'bg-muted'
                  }`}>
                    <phase.icon className={`w-7 h-7 ${
                      phase.status === 'in_progress' ? 'text-chart-2' : 
                      phase.status === 'ready' ? 'text-primary' : 
                      'text-muted-foreground'
                    }`} />
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground mb-2">
                    {phase.phase}
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-2">{phase.title}</h3>
                  <div className="text-sm font-medium text-primary mb-4">{phase.timeline}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {phase.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground mb-3">KEY OUTCOMES</div>
                  {phase.outcomes.map((outcome, outcomeIndex) => (
                    <div 
                      key={outcomeIndex} 
                      className="flex items-start gap-2"
                      data-testid={`phase-${phaseIndex}-outcome-${outcomeIndex}`}
                    >
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm flex-1">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto mt-10 space-y-6">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/30">
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold">Resource Allocation</h3>
                <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                  This distribution represents our initial planning. However, <span className="font-semibold text-foreground">final allocations will be determined by the Collective Recognition module</span> we're building - where contributors receive resources proportionally to mutual recognition.
                </p>
              </div>
              
              <div className="max-w-2xl mx-auto">
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
                  width={700}
                  height={400}
                />
              </div>

              <div className="text-center pt-4">
                <a 
                  href="https://docs.openassociation.org/implementation/collective-coordination"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Learn about Collective Recognition <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-xs text-muted-foreground mt-2 max-w-2xl mx-auto">
                  Once implemented, resource allocation will be proportional to mutual recognition shares - determined by contributors themselves, not by central planning.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
