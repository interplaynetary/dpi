import { Globe, Heart, Users, Leaf } from "lucide-react";
import { NetworkBackground } from "./NetworkBackground";
import { Card } from "@/components/ui/card";

const impacts = [
  {
    icon: Leaf,
    title: "Climate",
    description: "Coordinate global climate action"
  },
  {
    icon: Heart,
    title: "Health",
    description: "Align health resources efficiently"
  },
  {
    icon: Users,
    title: "Education",
    description: "Distribute learning opportunities"
  },
  {
    icon: Globe,
    title: "Social Challenges",
    description: "Address inequality at scale"
  }
];

export default function VisionSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-chart-3/5 relative overflow-hidden">
      <div className="opacity-30">
        <NetworkBackground />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-12">
          <h2 className="font-display font-bold text-4xl md:text-6xl">The Vision</h2>
          <p className="text-2xl md:text-3xl font-semibold max-w-4xl mx-auto leading-tight">
            Infrastructure for Planetary Coordination
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A unique window of opportunity to evolve beyond failing systems. From neighborhood mutual aid to planetary coordination - aligning capacity flows with what we value through mutual recognition.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto mb-10">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center space-y-2" data-testid={`impact-${index}`}>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <impact.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{impact.title}</h3>
              <p className="text-sm text-muted-foreground">{impact.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-chart-2/10 to-primary/10 border-chart-2/30">
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl text-chart-2">Freedom</h3>
                <p className="text-sm font-mono italic text-muted-foreground">
                  = The decreasing sum of all unmet needs
                </p>
                <p className="text-sm leading-relaxed">
                  Can you be free if you're hungry? Freedom requires not just absence of interference, but <span className="font-semibold">presence of capacity</span>. Your freedom is realized through your community's recognition and their capacity to help - concrete, measurable, directly tied to material satisfaction. As needs approach zero, freedom converges to maximum. <span className="font-semibold text-chart-2">For everyone, simultaneously.</span>
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-chart-3/10 border-primary/30">
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl text-primary">Community</h3>
                <p className="text-sm font-mono italic text-muted-foreground">
                  = The web of mutual recognition relationships
                </p>
                <p className="text-sm leading-relaxed">
                  Not defined by property ("who owns what") but by contribution ("who helps whom"). Inherently plural, fluid, transcending geography - forming and evolving as recognition changes.
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/30">
            <div className="text-center space-y-4">
              <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                Built on Mathematical Certainty
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This infrastructure is implemented, tested, and mathematically proven. The code is open-source, the proofs are rigorous, and real-world pilots are coordinating. Join us in building coordination infrastructure that scales from local communities to planetary challenges.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
