import { Card } from "@/components/ui/card";
import { Lightbulb, Rocket, Globe } from "lucide-react";

const phases = [
  {
    icon: Lightbulb,
    phase: "CURRENT",
    title: "Global Living Labs",
    timeline: "Ongoing",
    description: "Interactive demonstrations at UN agencies, foundations, and coordination bodies worldwide",
    outcomes: [
      "Direct stakeholder experience",
      "Convene key decision-makers",
      "Build credibility through partnerships",
      "Gather feedback & iterate"
    ],
    status: "in_progress"
  },
  {
    icon: Rocket,
    phase: "NEXT",
    title: "Landmark Pilot",
    timeline: "12 Months",
    description: "15-20 entities coordinating $1B across climate, health, humanitarian aid, and development",
    outcomes: [
      ">95% efficiency vs ~70% traditional",
      "Fair distribution (Gini <0.3)",
      "Parallel comparison with status quo"
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
      "Impleentation guidelines",
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
        
        <div className="max-w-4xl mx-auto mt-10">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/30">
            <div className="text-center space-y-4">
              <p className="text-xl font-semibold mb-4">
                We're seeking <span className="text-primary">$25 million</span> to fund the 12-month landmark pilot program
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">$8M</div>
                  <div className="text-sm text-muted-foreground">Technology & Infrastructure</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">$10M</div>
                  <div className="text-sm text-muted-foreground">Operations & Coordination</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">$5M</div>
                  <div className="text-sm text-muted-foreground">Research & Validation</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">$2M</div>
                  <div className="text-sm text-muted-foreground">Contingency</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
