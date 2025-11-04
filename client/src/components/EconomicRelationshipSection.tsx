import { Card } from "@/components/ui/card";
import { XCircle, Store, Heart, Shield, Sparkles } from "lucide-react";

const relationships = [
  {
    icon: Store,
    type: "Market",
    logic: "I'll give you X if you give me Y.",
    limitation: "Excludes those without purchasing power.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20"
  },
  {
    icon: Heart,
    type: "Charity",
    logic: "I'll give you X because you need it.",
    limitation: "Unsustainable and creates dependency.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20"
  },
  {
    icon: Shield,
    type: "Bureaucracy",
    logic: "An authority decides who gets what.",
    limitation: "Slow, political, and inflexible.",
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/20"
  }
];

export default function EconomicRelationshipSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">A New Economic Relationship</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not here to propose another framework - we're here to <span className="font-semibold text-primary">deploy</span> a fourth type of economic relationship
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {relationships.map((rel, index) => (
            <Card key={index} className={`p-5 ${rel.borderColor} border-2 relative overflow-hidden`} data-testid={`card-relationship-${index}`}>
              <div className="space-y-3">
                <div className={`w-10 h-10 ${rel.bgColor} rounded-lg flex items-center justify-center`}>
                  <rel.icon className={`w-5 h-5 ${rel.color}`} />
                </div>
                <h3 className="font-semibold text-lg">{rel.type}</h3>
                <div className="space-y-1.5">
                  <p className="text-sm font-medium">{rel.logic}</p>
                  <div className="flex items-start gap-2 pt-1">
                    <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-destructive">{rel.limitation}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/10 to-chart-3/10 border-primary/30 border-2 relative overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Free Association</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Logic</p>
                <p className="text-lg font-medium">
                  "I recognize your contribution towards my goals; you recognize mine."
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Result</p>
                <p className="text-lg font-medium text-primary">
                  Enables voluntary, fair, self-organizing coordination.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-primary/20">
              <p className="text-center font-semibold">
                This new relationship, <span className="text-primary">Mutual Recognition</span>, forms the foundation of our Digital Public Infrastructure.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

