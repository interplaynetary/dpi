import { Card } from "@/components/ui/card";
import { Heart, UserCheck, Share2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Heart,
    title: "Express Values",
    description: "What matters to you right now?",
    detail: "Define your priorities and values in the platform"
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Recognize Contributors",
    description: "Who helps achieve your priorities?",
    detail: "Allocate 100% total recognition to those who contribute"
  },
  {
    number: "03",
    icon: Share2,
    title: "Share Resources",
    description: "Your capacity flows to mutual recognition partners",
    detail: "Resources automatically flow where they create the most mutual value"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple 3-step process to align resources with values
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 h-full hover-elevate transition-all" data-testid={`card-step-${index}`}>
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-5xl font-bold text-muted-foreground/20">{step.number}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display font-semibold text-2xl">{step.title}</h3>
                    <p className="text-primary font-medium">{step.description}</p>
                    <p className="text-sm text-muted-foreground">{step.detail}</p>
                  </div>
                </div>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-card border border-card-border rounded-lg max-w-4xl mx-auto">
          <p className="text-center text-lg">
            <span className="font-semibold">Result:</span>{" "}
            <span className="text-muted-foreground">Resources automatically flow where they create the most mutual value</span>
          </p>
        </div>
      </div>
    </section>
  );
}
