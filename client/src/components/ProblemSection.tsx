import { Card } from "@/components/ui/card";
import { AlertTriangle, Clock, Globe, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Misaligned Resources",
    description: "Capacity flows to whoever negotiates best, not what we actually value most"
  },
  {
    icon: AlertTriangle,
    title: "Unmet Needs",
    description: "People and organizations struggle to get resources despite contributing to shared priorities"
  },
  {
    icon: Clock,
    title: "Disconnected Processes",
    description: "Applications, proposals, and negotiations separate priorities from allocation"
  },
  {
    icon: Globe,
    title: "Coordination Failures",
    description: "Markets exclude, charity is unsustainable, bureaucracy is slow - we need a 4th way"
  }
];

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">The Coordination Challenge</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Resources rarely flow to what people and organizations actually value most. Priorities get lost in negotiation. Needs go unmet while capacity sits idle. We need better coordination infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {problems.map((problem, index) => (
            <Card key={index} className="p-5 hover-elevate transition-all" data-testid={`card-problem-${index}`}>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-semibold">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-snug">{problem.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 max-w-4xl mx-auto">
          <p className="text-center leading-relaxed">
            <span className="font-semibold">The challenge isn't lack of resources or goodwill.</span>{" "}
            <span className="text-muted-foreground">It's that our mechanisms - markets, charity, and bureaucracy - can't align capacity with priorities and satisfy needs efficiently. We need infrastructure for mutual recognition.</span>
          </p>
        </Card>
      </div>
    </section>
  );
}
