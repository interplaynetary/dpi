import { Card } from "@/components/ui/card";
import { Zap, Globe, Shield, Wifi } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "83% Cost Reduction",
    description: "Peer-to-peer architecture eliminates almost all centralized server costs"
  },
  {
    icon: Globe,
    title: "Scales to Billions",
    description: "From 100K users to 8B users with minimal cost increase"
  },
  {
    icon: Wifi,
    title: "Works Offline",
    description: "Real-time coordination that doesn't require constant connectivity"
  },
  {
    icon: Shield,
    title: "Interoperable",
    description: "Works seamlessly with existing systems and platforms"
  }
];

const costData = [
  { users: "100K", cost: "$200/month" },
  { users: "3M", cost: "$5000/month" },
  { users: "8B", cost: "$10M/month" }
];

export default function TechnicalSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Technical Advantage</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on peer-to-peer architecture for unprecedented efficiency
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover-elevate transition-all" data-testid={`card-feature-${index}`}>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-card border border-card-border rounded-lg p-8">
          <h3 className="font-display font-semibold text-2xl mb-8 text-center">Average Operating Costs at Scale</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {costData.map((item, index) => (
              <div key={index} className="text-center" data-testid={`cost-${index}`}>
                <div className="text-4xl font-bold text-primary mb-2">{item.users}</div>
                <div className="text-sm text-muted-foreground mb-3">Users</div>
                <div className="text-xl font-semibold">{item.cost}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
