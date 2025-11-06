import { Card } from "@/components/ui/card";
import { Users, DollarSign, Building2, TrendingUp } from "lucide-react";

const momentum = [
  {
    icon: Users,
    metric: "200+",
    label: "Active Contributors",
    description: "Global community building coordination infrastructure"
  },
  {
    icon: DollarSign,
    metric: "Open",
    label: "Source & Transparent",
    description: "All code and allocations publicly verifiable"
  },
  {
    icon: Building2,
    metric: "Global",
    label: "Scale Ready",
    description: "Architecture designed for planetary coordination"
  },
  {
    icon: TrendingUp,
    metric: "Live",
    label: "Working Demo",
    description: "Fully functional prototype demonstrating real-time allocation"
  }
];

export default function MomentumSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Building Momentum</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From working prototype to global partnerships - ready for deployment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {momentum.map((item, index) => (
            <Card key={index} className="p-5 text-center hover-elevate transition-all" data-testid={`card-momentum-${index}`}>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">{item.metric}</div>
                  <div className="font-semibold mb-2">{item.label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

