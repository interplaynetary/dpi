import { Card } from "@/components/ui/card";
import { AlertTriangle, Clock, Zap, CheckCircle2 } from "lucide-react";
import { FloatingSDG } from "@/components/FloatingSDG";

const traditionalApproach = [
  { label: "Step 1", event: "Organization identifies need for resources", icon: AlertTriangle, color: "text-destructive" },
  { label: "Step 2", event: "Submit applications and proposals to multiple funders", icon: Clock, color: "text-orange-500" },
  { label: "Step 3", event: "Wait for review cycles, committees, and negotiations", icon: Clock, color: "text-orange-500" },
  { label: "Step 4", event: "Resources arrive piecemeal, often misaligned with priorities", icon: Clock, color: "text-destructive" },
  { label: "Result", event: "Slow, unpredictable, disconnected from what funders actually value", icon: Clock, color: "text-destructive" }
];

const freeAssociationApproach = [
  { label: "Step 1", event: "Organizations express what they value & need", icon: CheckCircle2, color: "text-primary" },
  { label: "Step 2", event: "Funders publish capacity & recognition weights", icon: CheckCircle2, color: "text-chart-2" },
  { label: "Step 3", event: "Algorithm converges to optimal allocation in real-time", icon: Zap, color: "text-chart-2" },
  { label: "Step 4", event: "Resources flow automatically to mutually-recognized partners", icon: CheckCircle2, color: "text-chart-2" },
  { label: "Result", event: "Fast, transparent, aligned with priorities & needs", icon: Zap, color: "text-chart-2" }
];

export default function ExampleSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* SDG Icons Background */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <FloatingSDG sdgNumber={9} size="md" />
        <FloatingSDG sdgNumber={12} size="lg" />
        <FloatingSDG sdgNumber={17} size="sm" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Coordination in Action</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Resources flow automatically to satisfy needs based on mutual recognition - from daily operations to crisis response
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Traditional System */}
          <Card className="p-6 bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">
            <div className="space-y-4">
              <div className="text-center pb-4 border-b border-destructive/20">
                <h3 className="font-display font-bold text-2xl mb-2">Traditional Approach</h3>
                <p className="text-sm text-muted-foreground">Disconnected priorities & needs</p>
              </div>
              
              {traditionalApproach.map((item, index) => (
                <div key={index} className="flex items-start gap-4" data-testid={`traditional-step-${index}`}>
                  <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="font-semibold text-sm mb-1">{item.day}</div>
                    <p className="text-sm text-muted-foreground">{item.event}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-destructive/20 text-center">
                <div className="text-2xl font-bold text-destructive mb-1">Slow & Misaligned</div>
                <div className="text-sm text-muted-foreground">Resources don't match priorities</div>
              </div>
            </div>
          </Card>

          {/* Free Association System */}
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/30">
            <div className="space-y-4">
              <div className="text-center pb-4 border-b border-primary/20">
                <h3 className="font-display font-bold text-2xl mb-2">Free Association</h3>
                <p className="text-sm text-muted-foreground">Priority-aligned allocation</p>
              </div>
              
              {freeAssociationApproach.map((item, index) => (
                <div key={index} className="flex items-start gap-4" data-testid={`freeassoc-step-${index}`}>
                  <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="font-semibold text-sm mb-1">{item.day}</div>
                    <p className="text-sm text-muted-foreground">{item.event}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-primary/20 text-center">
                <div className="text-2xl font-bold text-chart-2 mb-1">Fast & Aligned</div>
                <div className="text-sm text-muted-foreground">Resources match what you value</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-10 text-center max-w-4xl mx-auto">
          <Card className="p-4 bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/20">
            <p className="font-semibold mb-2">
              <span className="text-primary">Capacity flows to priorities</span> • <span className="text-chart-2">Needs get satisfied</span> • <span className="text-primary">Values drive allocation</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Whether coordinating daily operations, climate action, research funding, or emergency response
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
