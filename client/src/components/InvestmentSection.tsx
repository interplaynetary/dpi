import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { TreeMap } from "./TreeMap";

const tiers = [
  {
    name: "COP30 Deployment",
    amount: "$200K",
    description: "Launch at COP30 with full functionality",
    highlighted: true
  },
  {
    name: "Global Scale",
    amount: "$1M",
    description: "Scale to billions of users worldwide",
    roi: "188x cost savings through coordination efficiency"
  }
];

const recognitionAllocation = {
  name: "Collective Recognition",
  children: [
    { 
      name: "Technical Contributors", 
      value: 35,
      color: "hsl(var(--primary))"
    },
    { 
      name: "Coordination & Design", 
      value: 25,
      color: "hsl(var(--chart-2))"
    },
    { 
      name: "R & D", 
      value: 20,
      color: "hsl(var(--chart-3))"
    },
    { 
      name: "Community Building", 
      value: 15,
      color: "hsl(var(--chart-4))"
    },
    { 
      name: "Operations", 
      value: 7,
      color: "hsl(var(--chart-5))"
    },
  ]
};

export default function InvestmentSection() {
  return (
    <section id="investment" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Investment Ask</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Funding tiers designed for maximum impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`p-8 ${tier.highlighted ? 'border-primary border-2' : ''} hover-elevate transition-all`}
              data-testid={`card-tier-${index}`}
            >
              {tier.highlighted && (
                <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  RECOMMENDED
                </div>
              )}
              <h3 className="font-display font-semibold text-2xl mb-2">{tier.name}</h3>
              <div className="text-5xl font-bold text-primary mb-4">{tier.amount}</div>
              <p className="text-muted-foreground mb-6">{tier.description}</p>
              {tier.roi && (
                <div className="bg-chart-2/10 text-chart-2 px-4 py-2 rounded-lg text-sm font-medium mb-6">
                  ROI: {tier.roi}
                </div>
              )}
              <Button className="w-full gap-2" variant={tier.highlighted ? "default" : "outline"} data-testid={`button-invest-${index}`}>
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
        
        <Card className="p-8">
          <h3 className="font-display font-semibold text-4xl md:text-5xl mb-6 text-center leading-tight break-words">
            Collective Recognition<br className="block" />
            for Fund Distribution
          </h3>
          <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            We use <strong>collective recognition</strong> instead of traditional budgets. 
            Members recognize each other's contributions towards collective self-actualization, 
            and funds are allocated <strong>proportionally</strong> based on mutual recognition shares—not 
            predetermined categories.
          </p>
          
          <div className="mb-8">
            <TreeMap data={recognitionAllocation} width={600} height={400} />
          </div>
          
          <div className="bg-muted/50 rounded-lg p-6 space-y-4">
            <h4 className="font-semibold text-lg">How Collective Recognition Works:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>No centralized budget:</strong> Members recognize contributions that enable their own growth and self-actualization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Mutual recognition:</strong> When members mutually recognize each other, they establish recognition percentages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Proportional allocation:</strong> Providers allocate resources based on recognition shares—everyone gets their fair share, not winner-takes-all</span>
              </li>
            </ul>
            
            <div className="pt-4 flex items-center justify-center">
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://playnet.gitbook.io/docs/collective-recognition" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  Learn More About Collective Recognition
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-6">
            The percentages shown is an example of collective-recognition, which emerge organically from genuine mutual enabling relationships.
          </p>
        </Card>
      </div>
    </section>
  );
}
