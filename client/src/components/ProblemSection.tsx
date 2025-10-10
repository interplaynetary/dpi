import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingDown, Eye, Link2 } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "$188M Lost Annually",
    description: "Due to coordination failures in resource allocation"
  },
  {
    icon: AlertCircle,
    title: "Wrong Place, Wrong Time",
    description: "Resources flow to locations without proper coordination"
  },
  {
    icon: Eye,
    title: "No Real-Time Visibility",
    description: "Lack of insight into who's doing what and where"
  },
  {
    icon: Link2,
    title: "Disconnected Values",
    description: "Priorities separated from actual resource allocation"
  }
];

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl">The Problem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We need Digital Public Infrastructure for global coordination
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-problem-${index}`}>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
