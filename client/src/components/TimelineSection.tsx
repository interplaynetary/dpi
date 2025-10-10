import { Card } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";

const milestones = [
  {
    status: "complete",
    items: ["P2P functionality", "Capacity mapping", "Priority distribution"]
  },
  {
    status: "progress",
    items: ["Security hardening", "AI integration", "Custom interfaces"]
  }
];

export default function TimelineSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Implementation Status</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            COP30 Ready with $200K Investment
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <div className="space-y-8">
              <div data-testid="milestone-complete">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-chart-2 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl">Complete</h3>
                </div>
                <div className="ml-11 space-y-2">
                  {milestones[0].items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-chart-2 rounded-full" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="h-px bg-border" />
              
              <div data-testid="milestone-progress">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-chart-4/20 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-chart-4" />
                  </div>
                  <h3 className="font-semibold text-xl">In Progress</h3>
                </div>
                <div className="ml-11 space-y-2">
                  {milestones[1].items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-chart-4 rounded-full" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-4 text-center">
                <p className="font-semibold">Timeline: Fully operational for COP30 (6 months)</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
