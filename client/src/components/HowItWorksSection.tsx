import { Card } from "@/components/ui/card";
import { Percent, DollarSign, TrendingUp, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: "01",
    icon: Percent,
    title: "Recognition Weights",
    description: "Who do I value as a contributor to my goals?",
    detail: "Allocate 100% recognition across partners (e.g., Partner A 20%, Partner B 30%, Partner C 50%)",
    example: "Foundation recognizes 3 partners at 40%, 35%, 25%",
    expandedContent: {
      concept: "Contribution Trees",
      explanation: "Recognition emerges from a hierarchical structure tracking who helps with what:",
      tree: [
        { line: "My Well-Being (100%)", indent: 0 },
        { line: "├─ Healthcare (70 points)", indent: 0 },
        { line: "│  ├─ Dr. Smith (80 points) → 56% recognition", indent: 0 },
        { line: "│  └─ Nurse Chen (20 points) → 14% recognition", indent: 0 },
        { line: "└─ Food (30 points)", indent: 0 },
        { line: "   ├─ Alice (50 points) → 15% recognition", indent: 0 },
        { line: "   └─ Bob (50 points) → 15% recognition", indent: 0 }
      ],
      properties: [
        "Non-transferable: Cannot be bought, sold, or inherited",
        "Dynamically adjustable: Changes as relationships evolve",
        "Global: Same recognition applies across all resource types",
        "Mutual: min(your recognition of them, their recognition of you)"
      ]
    }
  },
  {
    number: "02",
    icon: DollarSign,
    title: "Capacity",
    description: "What resources can I offer?",
    detail: "Declare your available resources - funding, expertise, infrastructure, or other assets",
    example: "UN agency has $500M in grant funding available",
    expandedContent: {
      concept: "Slots: Time × Location × Type",
      explanation: "Every capacity offering is a slot with three dimensions:",
      slots: [
        { label: "Time Window", detail: "When is this available? (e.g., 'Tuesday 2-4pm', 'Every Monday in February')" },
        { label: "Location", detail: "Where is this available? (e.g., 'Downtown clinic', 'Online', 'Global')" },
        { label: "Type", detail: "What kind of resource? (e.g., 'Healthcare', 'Funding', 'Expertise')" }
      ],
      matching: "Allocation only happens when slots are compatible:",
      matchExample: [
        { line: "Kitchen offers: 'Tuesday 2-4pm, Downtown, 100 meals'" },
        { line: "Alice needs: 'Tuesday 3-5pm, Downtown, 40 meals' → ✅ Compatible" },
        { line: "Bob needs: 'Wednesday 2-4pm, Downtown, 30 meals' → ❌ Wrong day" }
      ],
      specialization: "Providers naturally specialize - surgeons offer surgery, GPs offer diagnostics, each contributing what they're best at."
    }
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Stated Need",
    description: "What resources do I require?",
    detail: "Publish your resource needs transparently so the system can optimize allocation",
    example: "Organization needs $2B for mission-critical work",
    expandedContent: {
      concept: "Convergence Through Multiple Providers",
      explanation: "Your needs are satisfied through coordinated allocation from all providers who recognize you:",
      convergence: [
        { phase: "Round 1", description: "Multiple providers allocate based on mutual recognition shares" },
        { phase: "Round 2", description: "Remaining needs update automatically: Need(new) = Need(old) - Received" },
        { phase: "Round 3+", description: "Process repeats until all needs converge to zero" }
      ],
      formula: [
        { line: "Your allocation from each provider:" },
        { line: "= (Your-MR-Share) × (Your-Need / Sum-All-Needs) × Provider-Capacity", indent: 1 },
        { line: "" },
        { line: "Total received = Sum of allocations from all providers" },
        { line: "Remaining-Need = max(0, Declared-Need - Total-Received)" }
      ],
      properties: [
        "Multi-provider: Receive from everyone who recognizes you simultaneously",
        "Real-time updates: Needs decrease as allocations arrive",
        "Guaranteed convergence: Needs approach zero in 5-10 rounds (~1 second)",
        "No accumulation: Can never receive more than your stated need"
      ],
      multiDimensional: "Each need type tracked independently: food, healthcare, housing - all converging in parallel."
    }
  }
];

export default function HowItWorksSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">How It Works</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three simple data points published by each participant - the algorithm handles the rest
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card 
                className="p-6 h-full hover-elevate transition-all cursor-pointer" 
                data-testid={`card-step-${index}`}
                onClick={() => toggleExpand(index)}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-5xl font-bold text-muted-foreground/20">{step.number}</span>
                      {expandedIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-semibold text-lg">{step.title}</h3>
                    <p className="text-primary font-medium text-sm">{step.description}</p>
                    <p className="text-sm text-muted-foreground">{step.detail}</p>
                    <div className="pt-2 mt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground italic">{step.example}</p>
                    </div>
                    
                    {expandedIndex === index && (
                      <div className="pt-4 mt-4 border-t space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-primary mb-2">{step.expandedContent.concept}</h4>
                          <p className="text-sm text-muted-foreground italic mb-3">{step.expandedContent.explanation}</p>
                        </div>
                        
                        {step.expandedContent.tree && (
                          <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs space-y-1">
                            {step.expandedContent.tree.map((item, i) => (
                              <div key={i}>{item.line}</div>
                            ))}
                          </div>
                        )}
                        
                        {step.expandedContent.properties && (
                          <ul className="space-y-2">
                            {step.expandedContent.properties.map((prop, i) => (
                              <li key={i} className="text-sm flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{prop}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {step.expandedContent.slots && (
                          <div className="space-y-2">
                            {step.expandedContent.slots.map((slot, i) => (
                              <div key={i} className="bg-muted/30 rounded p-3">
                                <div className="font-semibold text-sm text-primary">{slot.label}</div>
                                <div className="text-xs text-muted-foreground mt-1">{slot.detail}</div>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {step.expandedContent.matching && (
                          <div>
                            <p className="text-sm font-medium mb-2">{step.expandedContent.matching}</p>
                            <div className="bg-muted/50 rounded-lg p-3 font-mono text-xs space-y-1">
                              {step.expandedContent.matchExample.map((item, i) => (
                                <div key={i}>{item.line}</div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {step.expandedContent.specialization && (
                          <p className="text-sm italic text-muted-foreground">{step.expandedContent.specialization}</p>
                        )}
                        
                        {step.expandedContent.convergence && (
                          <div className="space-y-2">
                            {step.expandedContent.convergence.map((conv, i) => (
                              <div key={i} className="bg-muted/30 rounded p-3">
                                <div className="font-semibold text-sm text-primary">{conv.phase}</div>
                                <div className="text-xs text-muted-foreground mt-1">{conv.description}</div>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {step.expandedContent.formula && (
                          <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs space-y-1">
                            {step.expandedContent.formula.map((item, i) => (
                              <div 
                                key={i} 
                                className={item.line === "" ? "h-2" : ""}
                                style={{ 
                                  paddingLeft: item.indent ? `${item.indent * 1.5}rem` : '0' 
                                }}
                              >
                                {item.line}
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {step.expandedContent.multiDimensional && (
                          <p className="text-sm italic text-muted-foreground">{step.expandedContent.multiDimensional}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-10">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/20 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <h3 className="font-semibold text-xl">Automatic Optimization</h3>
              <p className="text-lg leading-relaxed">
                The algorithm automatically computes the <span className="font-semibold text-primary">optimal flow of resources</span>, prioritizing allocations between entities that <span className="font-semibold">mutually recognize each other</span>. The system converges to a fair and stable equilibrium in <span className="font-semibold text-chart-2">real-time</span>, continuously adapting as circumstances evolve.
              </p>
              <div className="pt-4 flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-chart-2">5-10</div>
                  <div className="text-sm text-muted-foreground">Calculation Rounds</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-chart-2">&lt;1s</div>
                  <div className="text-sm text-muted-foreground">Convergence Time</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
