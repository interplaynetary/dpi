import { Globe, Heart, Users, Leaf } from "lucide-react";

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
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-chart-3/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl">The Vision</h2>
          <p className="text-2xl md:text-3xl font-semibold max-w-4xl mx-auto leading-tight">
            A Full Stack Commons for Human Coordination
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform how humanity coordinates resources - from local communities to global institutions - by aligning resource flows with collective values and mutual contribution.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center space-y-3" data-testid={`impact-${index}`}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <impact.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{impact.title}</h3>
              <p className="text-sm text-muted-foreground">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
