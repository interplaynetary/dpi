import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Lock, TrendingUp, Zap, Globe, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

declare global {
  interface Window {
    MathJax: {
      typesetPromise: () => Promise<void>;
    };
  }
}

const guarantees = [
  {
    icon: Scale,
    title: "Proportional Allocation",
    description: "Voluntary Association: Capacity follows Recognition of contribution toward Goals",
    color: "text-primary",
    bgColor: "bg-primary/10",
    details: {
      explanation: "We define this as the axiom of Voluntary Association:",
      logic: [
        { line: "Entities allocate their Capacity (C)" },
        { line: "in proportion to their Recognition (R)" },
        { line: "of contribution toward their Goals (G)." },
        { line: "" },
        { line: "$$ A_i \\propto \\frac{R_i}{\\sum R} $$", indent: 1 }
      ],
      conclusion: "No central authority decides who gets what. Allocation is the mathematical result of sovereign recognition."
    }
  },
  {
    icon: CheckCircle2,
    title: "Strategy-Proof",
    description: "The best strategy is honest reporting - the math neutralizes attempts to game the system",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    details: {
      explanation: "False recognition undermines your own well-being. Here's why:",
      logic: [
        { line: "Total Recognition = 100%" },
        { line: "Total Recognition = True-Recognition + False-Recognition" },
        { line: "Therefore:", indent: 0 },
        { line: "↑ False-Recognition = ↓ True-Recognition", indent: 1 },
        { line: "∴ ↓ Mutual-Recognition with beneficial contributors", indent: 2 },
        { line: "∴ ↓ Access to beneficial capacities", indent: 3 },
        { line: "∴ ↓ Self-actualization", indent: 4 }
      ],
      conclusion: "The system mathematically punishes false recognition - not through authority, but through the logic of allocation itself. Recognition that works is validated; recognition that fails is negated."
    }
  },
  {
    icon: Zap,
    title: "Alignment Velocity",
    description: "Rapid feedback loop between Recognition and Outcomes",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    details: {
      explanation: "The system optimizes itself through a high-frequency feedback loop:",
      logic: [
        { line: "1. Recognition (R) defines Allocation (A)" },
        { line: "2. Allocation (A) produces Outcomes (O)" },
        { line: "3. Outcomes (O) educate new Recognition (R')" },
        { line: "" },
        { line: "Velocity = ΔAlignment / ΔTime" },
        { line: "High Velocity → Rapid convergence to optimal structure" }
      ],
      conclusion: "Unlike rigid bureaucratic budgets, this 'liquid' structure adapts instantly. Bad allocations manifest as poor outcomes, with immediate correction of recognition fully supported by infrastructure."
    }
  },
  {
    icon: Lock,
    title: "Privacy-Preserving",
    description: "Each entity only publishes its own data - no central authority controls information",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    details: {
      explanation: "Peer-to-peer architecture with minimal data sharing:",
      logic: [
        { line: "What you publish:" },
        { line: "• Your recognition weights (who you value)", indent: 1 },
        { line: "• Your capacity (what you can offer)", indent: 1 },
        { line: "• Your stated needs (what you require)", indent: 1 },
        { line: "" },
        { line: "What you DON'T publish:" },
        { line: "• Private decision-making processes", indent: 1 },
        { line: "• Internal priorities or strategies", indent: 1 },
        { line: "• Detailed transaction histories", indent: 1 }
      ],
      conclusion: "Because the allocation formula is deterministic, everyone computes the same results independently. No central database, no surveillance, no single point of control."
    }
  }
];

const features = [
  {
    icon: Globe,
    title: "Peer-to-Peer",
    description: "Decentralized architecture eliminates single points of failure and control"
  },
  {
    icon: Shield,
    title: "Open Source",
    description: "Fully auditable AGPL-3.0 licensed code - transparent and community-governed"
  }
];

function Scale(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 11V3h5v8" />
      <path d="M3 11V3h5v8" />
      <path d="M19 11a7 7 0 0 1-14 0" />
      <path d="M12 11V3" />
    </svg>
  );
}

export default function TechnicalSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    if (expandedIndex !== null && window.MathJax) {
      // Small delay to ensure DOM is ready after accordion expansion
      const timer = setTimeout(() => {
        window.MathJax.typesetPromise?.();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [expandedIndex]);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Digital Public Infrastructure</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built on mathematically proven principles that ensure integrity and fairness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {guarantees.map((guarantee, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all cursor-pointer"
              data-testid={`card-guarantee-${index}`}
              onClick={() => toggleExpand(index)}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className={`w-12 h-12 ${guarantee.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <guarantee.icon className={`w-6 h-6 ${guarantee.color}`} />
                  </div>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
                <h3 className="font-semibold text-lg">{guarantee.title}</h3>
                <p className="text-sm text-muted-foreground leading-snug">{guarantee.description}</p>

                {expandedIndex === index && (
                  <div className="pt-3 mt-3 border-t space-y-3">
                    <p className="text-sm text-muted-foreground italic">{guarantee.details.explanation}</p>
                    <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs space-y-1">
                      {guarantee.details.logic.map((item, i) => (
                        <div
                          key={i}
                          className={item.line === "" ? "h-2" : ""}
                          style={{
                            paddingLeft: 'indent' in item && item.indent ? `${item.indent * 1.5}rem` : '0'
                          }}
                        >
                          {item.line}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed">{guarantee.details.conclusion}</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border-primary/20" data-testid={`card-feature-${index}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/30">
          <div className="text-center space-y-4">
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Like GPS, internet protocols, and other foundational technologies - Free Association is designed as <span className="font-semibold text-primary">neutral, open infrastructure</span> that serves humanity's coordination needs without favoring any particular entity or ideology.
            </p>
            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="gap-2"
              >
                <a
                  href="https://docs.openassociation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-technical-docs"
                >
                  <BookOpen className="w-4 h-4" />
                  Read Full Documentation
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
