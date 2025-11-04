import { Card } from "@/components/ui/card";
import { Building2, Globe2, Heart, Sprout, Users2, Landmark } from "lucide-react";

const audiences = [
  {
    icon: Users2,
    title: "Mutual Aid Networks",
    description: "Person-to-person resource sharing - childcare co-ops, tool libraries, skill exchanges, and neighborhood care circles"
  },
  {
    icon: Sprout,
    title: "Community Collectives",
    description: "Housing co-ops, maker spaces, community gardens - any group coordinating shared resources through contribution"
  },
  {
    icon: Heart,
    title: "Philanthropic Foundations",
    description: "Align grant-making with partners who recognize your impact and share your values"
  },
  {
    icon: Building2,
    title: "Civil Society Organizations",
    description: "Access resources from partners who recognize your contributions to shared goals"
  },
  {
    icon: Globe2,
    title: "UN Agencies & Nation-States",
    description: "Coordinate multilateral aid and cooperation budgets based on mutual recognition and shared priorities"
  },
  {
    icon: Landmark,
    title: "Impact Funds",
    description: "Direct capital to projects that create mutual value across your investment portfolio"
  }
];

export default function AudienceSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Who This Is For</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Any entity-to-entity relationship - from neighbors sharing tools to nations coordinating aid. If you value each other's contributions, this infrastructure serves you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map((audience, index) => (
            <Card key={index} className="p-5 hover-elevate transition-all" data-testid={`card-audience-${index}`}>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <audience.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{audience.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{audience.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Card className="inline-block px-6 py-4 bg-gradient-to-r from-primary/10 to-chart-3/10 border-primary/20 max-w-3xl">
            <p className="font-semibold">
              This infrastructure maintains your <span className="text-primary">autonomy and values</span> while enabling unprecedented coordination efficiency
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}


